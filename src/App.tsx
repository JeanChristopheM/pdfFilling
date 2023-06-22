import { PDFDocument } from "pdf-lib/cjs/api";
import { useEffect, useState } from "react";
import "./App.css";
import {
  getPdfDocFromLocalFile,
  handleFillFormPDF,
  printPdfOnIframe,
} from "./functions";
import { ILease, lease } from "./assets/lease";
import { building } from "./assets/building";

const street = "Rue du loisir";

function App() {
  // . Local State
  // . -----------
  const [pdfDoc, setPdfDoc] = useState<PDFDocument | null>(null);

  // . Effects
  // . -------
  const init = async () => {
    const doc = await getPdfDocFromLocalFile();
    setPdfDoc(doc);
  };

  useEffect(() => {
    pdfDoc && printPdfOnIframe(pdfDoc);
  }, [pdfDoc]);

  useEffect(() => {
    init();
  }, []);

  // . Handlers
  // . --------

  const handleSavePDF = async () => {
    if (!pdfDoc) return;

    const form = pdfDoc.getForm();
    const formFields = form.getFields();
    formFields.forEach((field) => field.enableReadOnly());
    const link = document.createElement("a");
    const pdfBytes = await pdfDoc.save();

    const docUrl = URL.createObjectURL(
      new Blob([pdfBytes], { type: "application/pdf" })
    );
    link.setAttribute("download", "Document de reprise des énergies");
    link.href = docUrl;
    document.body.appendChild(link);
    link.click();
  };

  // . Return
  // . ------
  return (
    <div className="App">
      <button
        onClick={
          // () => pdfDoc && handleFillPDF(pdfDoc, lease, building, setPdfDoc)
          () => pdfDoc && handleFillFormPDF(pdfDoc, lease, building, setPdfDoc)
        }
      >
        Fill in
      </button>
      <button onClick={handleSavePDF}>Save</button>
      <div className="templatePreviewContainer" style={{ width: "65vw" }} />
    </div>
  );
}

export default App;
