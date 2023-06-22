import pdf from "./assets/919.pdf";
import formPdf from "./assets/formulaireReprise.pdf";

import { Color, PDFDocument, PDFPage, rgb } from "pdf-lib";

import type { IBuilding } from "./assets/building";
import type { ILease } from "./assets/lease";
import { EnergyFormValues } from "./interfaces";

export const printPdfOnIframe = async (pdfDoc: PDFDocument) => {
  const pdfBytes = await pdfDoc.save();

  const docUrl = URL.createObjectURL(
    new Blob([pdfBytes], { type: "application/pdf" })
  );

  const targetElement = document.querySelector(".templatePreviewContainer");
  if (!targetElement) return;
  document.querySelector("#iframeContainer")?.remove();
  // Creating a container
  const container = document.createElement("div");
  container.id = "iframeContainer";
  // Creating some style
  const styleNode = document.createElement("style");
  const style = document.createTextNode(
    "#iframeContainer {width: 100%; aspect-ratio: 1/1; z-index: 10;} #closePreview {margin-left: auto;} #previewIframe {width: 100%; height: 90%;}"
  );
  styleNode.appendChild(style);
  // Creating the iframe for PDF display
  const iframe = document.createElement("iframe");
  iframe.id = "previewIframe";
  iframe.src = docUrl;
  container.appendChild(styleNode);
  container.appendChild(iframe);
  targetElement.appendChild(container);
};

export const getPdfDocFromLocalFile = async () => {
  // const existingPdfBytes = await fetch(pdf).then((res) => res.arrayBuffer());
  const existingPdfBytes = await fetch(formPdf).then((res) =>
    res.arrayBuffer()
  );
  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  return pdfDoc;
};

interface IDrawTextOnPdfProps {
  page: PDFPage;
  text: string;
  x: number;
  y: number;
  size?: number;
  color?: Color;
}

const drawTextOnPdf = ({
  page,
  text,
  x,
  y,
  size,
  color,
}: IDrawTextOnPdfProps) => {
  page.drawText(text, {
    x,
    y,
    size: size || 10,
    color: color || rgb(0.02, 0.6745098039, 1),
  });
};

const mapLeaseToFormValues = (lease: ILease, building: IBuilding) => {
  const today = new Date();

  const compteurDElec = lease.rentalUnit.meters.find(
    (m) => m.type.name === "Electricité"
  );
  const compteurDeGaz = lease.rentalUnit.meters.find(
    (m) => m.type.name === "Gaz"
  );
  const locataires = lease.tenancies.flatMap((t) => t.tenant);

  console.log({ locataires });

  return {
    // Date
    repriseDay: today.getDay().toString(),
    repriseMonth: today.getMonth().toString(),
    repriseYear: today.getFullYear().toString(),
    // Adresse
    addressNumber: building.address.number,
    addressBox: "",
    addressPostalCode: building.address.zip,
    addressStreet: building.address.street,
    addressCity: building.address.city,
    // Compteurs
    // Electricité
    readingSimple: "",
    meterSimpleCheckbox: false,
    meterSimpleNumber: "",
    meterBihoraireCheckbox: false,
    meterBihoraireNumber: "",
    readingBihoraireDay: "",
    readingBihoraireNight: "",
    meterNightNumber: "",
    meterNightCheckbox: false,
    readingNight: "",
    meterEANElectricity: "",
    activeElectricityBudgetCheckboxYes: false,
    activeElectricityBudgetCheckboxNo: false,
    // Gaz
    meterEANGaz: compteurDeGaz?.ean,
    meterGazNumber: compteurDeGaz?.number,
    readingGaz: compteurDeGaz?.readings
      .sort((a, b) => (a.date > b.date ? -1 : 1))[0]
      .value.toString(),
    activeGazBudgetCheckboxYes: false,
    activeGazBudgetCheckboxNo: false,
    // Locataire sortant
    VATnumber: locataires.flatMap((l) => l.vat).join(","),
    outgoingGenderMale: locataires[0].gender === "m",
    outgoingGenderFemale: locataires[0].gender === "f",
    outgoingGenderMoral: false,
    outgoingFirstname: locataires[0].firstname,
    outgoingLastname: locataires[0].lastname,
    outgoingCompanyName: "",
    outgoingPhone: `${locataires[0].phone.prefix}/${locataires[0].phone.number}`,
    outgoingEmail: locataires[0].email,
    outgoingStreet: locataires[0].address.street,
    outgoingNumber: locataires[0].address.number,
    outgoingBox: "",
    outgoingCity: locataires[0].address.city,
    outgoingPostalCode: locataires[0].address.zip,
    outgoingElectricityProvider: "",
    outgoingGazProvider: "",
    // Locataire entrant
    incomingGenderMale: false,
    incomingGenderFemale: false,
    incomingGenderMoral: false,
    incomingFirstname: "",
    incomingLastname: "",
    incomingCompany: "",
    incomingPhone: "",
    incomingEmail: "",
    incomingStreet: "",
    incomingNumber: "",
    incomingBox: "",
    incomingCity: "",
    incomingPostalCode: "",
    incomingElectricityProvider: "",
    incomingGazProvider: "",
    tenantCheckbox: false,
    ownerResidentCheckbox: false,
    ownerEmptyCheckbox: false,
    tenantSignature: "",
    ownerSignature: "",
  } as EnergyFormValues;
};

export const handleFillFormPDF = async (
  pdfDoc: PDFDocument,
  lease: ILease,
  building: IBuilding,
  setPdfDoc: (pdfDoc: PDFDocument) => void
) => {
  const form = pdfDoc.getForm();
  const formFields = form.getFields().map((f) => f.getName());

  const formValues = mapLeaseToFormValues(lease, building);

  formFields.forEach((fieldName) => {
    if (
      fieldName.toLowerCase().includes("checkbox") ||
      fieldName.toLowerCase().includes("gender")
    ) {
      const field = form.getCheckBox(fieldName);
      if (formValues[fieldName as keyof EnergyFormValues]) field.check();
    } else {
      const field = form.getTextField(fieldName);
      field.setText(formValues[fieldName as keyof EnergyFormValues].toString());
    }
  });

  const pdfBytes = await pdfDoc.save();
  const newPdfDoc = await PDFDocument.load(pdfBytes);

  setPdfDoc(newPdfDoc);
};
