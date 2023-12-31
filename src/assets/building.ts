export const building = {
  id: 2,
  uuid: "23d30cd7-23a3-41ac-8384-b6ec5cfbe844",
  createdAt: "2023-02-27T10:46:14.000Z",
  updatedAt: "2023-02-27T14:26:47.000Z",
  deletedAt: null,
  name: "Paradis",
  comment: "quantify Ergonomic",
  pebScore: null,
  archivedAt: null,
  contactInfo: null,
  unitsQuotity: 10000,
  address: {
    id: 48,
    uuid: "7a2f945c-2b71-4bbb-87ca-8baf75cfab5c",
    createdAt: "2023-02-27T14:26:47.000Z",
    updatedAt: "2023-02-27T14:26:47.000Z",
    deletedAt: null,
    street: "Rue Paradis",
    number: "79",
    city: "Liège",
    zip: "4000",
    country: "Belgique",
  },
  phone: {
    id: 44,
    uuid: "15f62247-4dd9-4008-8370-fbb8d031668e",
    createdAt: "2023-02-27T14:26:47.000Z",
    updatedAt: "2023-02-27T14:26:47.000Z",
    deletedAt: null,
    prefix: "1225",
    number: "733695923",
  },
  buildingOwnerships: [
    {
      version: 1,
      balance: 0,
      archivedAt: null,
      uuid: "e09b44a4-f312-463e-a849-d55f836528b4",
      createdAt: "2023-02-27T10:46:14.000Z",
      updatedAt: "2023-02-27T14:26:47.000Z",
      person_id: 2,
      building_id: 2,
      share: 1,
      totalShares: 1,
      payments: [],
      owner: {
        id: 2,
        uuid: "bbd0deeb-462e-490b-85a7-490edf77b810",
        createdAt: "2023-02-27T10:46:14.000Z",
        updatedAt: "2023-02-27T10:46:14.000Z",
        deletedAt: null,
        firstname: "Tobin",
        lastname: "Parker",
        email: "Tobin_Parker64@grr.la",
        gender: "f",
        birthDate: "1945-08-08T00:00:00.000+02:00",
        birthPlace: "South Lorenza",
        nationality: "new caledonia",
        nationalId: "712723175",
        iban: "BE61310126985517",
        bic: "BBRUBEBB",
        comment: null,
        roles: ["owner"],
        vat: null,
        archivedAt: null,
        address: {
          id: 2,
          uuid: "6f92e41a-5c47-4560-b619-97f640274285",
          createdAt: "2023-02-27T10:46:14.000Z",
          updatedAt: "2023-02-27T10:46:14.000Z",
          deletedAt: null,
          street: "Gerda Knolls",
          number: "32950",
          city: "Eulahport",
          zip: "42868",
          country: "palau",
        },
        phone: {
          id: 3,
          uuid: "095f2ffb-3eda-41db-8d2d-91d65b27be4a",
          createdAt: "2023-02-27T10:46:14.000Z",
          updatedAt: "2023-02-27T10:46:14.000Z",
          deletedAt: null,
          prefix: "6393",
          number: "8799986979",
        },
      },
    },
  ],
  rentalUnitModels: [
    {
      id: 6,
      uuid: "d36f12ef-3968-4cca-8ba9-06b2ca7d1b6a",
      createdAt: "2023-02-27T10:46:14.000Z",
      updatedAt: "2023-02-27T10:46:14.000Z",
      deletedAt: null,
      name: "Modèle A",
      surfaceArea: "17-20",
      capacity: 1,
      baseRent: 48000,
      baseDeposit: 45000,
      baseFee: 12000,
      baseInventoryCost: 11500,
      description:
        "1 séjour-chambre, 1 cuisine entièrement équipée, 1 salle de bain équipée d'une douche, d'un meuble évier miroir et d'un wc.",
      rentalUnits: [
        {
          id: 62,
          uuid: "15e2294f-ee8b-4028-8635-fdb7fc87ce29",
          createdAt: "2023-02-27T10:46:14.000Z",
          updatedAt: "2023-02-27T14:20:30.000Z",
          deletedAt: null,
          number: "A5",
          comment: null,
          needsCleaning: 0,
          available: 1,
          pebScore: null,
          archivedAt: null,
          floor: null,
          buildingQuotity: 100,
          rentalUnitOwnerships: [
            {
              version: 1,
              balance: 0,
              archivedAt: null,
              uuid: "1163c6b2-5ecd-4112-a102-1dc988b73c73",
              createdAt: "2023-02-27T14:12:26.000Z",
              updatedAt: "2023-02-27T14:20:30.000Z",
              person_id: 1,
              rentalUnit_id: 62,
              share: 1,
              totalShares: 1,
              rentalUnit: {
                id: 62,
                uuid: "15e2294f-ee8b-4028-8635-fdb7fc87ce29",
                createdAt: "2023-02-27T10:46:14.000Z",
                updatedAt: "2023-02-27T14:20:30.000Z",
                deletedAt: null,
                number: "A5",
                comment: null,
                needsCleaning: 0,
                available: 1,
                pebScore: null,
                archivedAt: null,
                floor: null,
                buildingQuotity: 100,
              },
              payments: [],
            },
          ],
          payments: [],
          tasks: [],
          leases: [],
        },
        {
          id: 61,
          uuid: "5cf1873e-9842-42f8-8f83-9f73bf396728",
          createdAt: "2023-02-27T10:46:14.000Z",
          updatedAt: "2023-02-27T10:46:14.000Z",
          deletedAt: null,
          number: "A4",
          comment: null,
          needsCleaning: 0,
          available: 1,
          pebScore: null,
          archivedAt: null,
          floor: null,
          buildingQuotity: null,
          rentalUnitOwnerships: [],
          payments: [],
          tasks: [],
          leases: [],
        },
        {
          id: 63,
          uuid: "8c76ca81-993e-472c-9d31-7e0539176b8f",
          createdAt: "2023-02-27T10:46:14.000Z",
          updatedAt: "2023-02-27T10:46:14.000Z",
          deletedAt: null,
          number: "A6",
          comment: null,
          needsCleaning: 0,
          available: 1,
          pebScore: null,
          archivedAt: null,
          floor: null,
          buildingQuotity: null,
          rentalUnitOwnerships: [],
          payments: [],
          tasks: [],
          leases: [],
        },
        {
          id: 59,
          uuid: "a778ff13-1847-4f0e-8247-c96accaf2cc1",
          createdAt: "2023-02-27T10:46:14.000Z",
          updatedAt: "2023-02-27T10:46:14.000Z",
          deletedAt: null,
          number: "A2",
          comment: null,
          needsCleaning: 0,
          available: 1,
          pebScore: null,
          archivedAt: null,
          floor: null,
          buildingQuotity: null,
          rentalUnitOwnerships: [],
          payments: [],
          tasks: [],
          leases: [],
        },
        {
          id: 60,
          uuid: "f350ae5b-72c3-4164-a49f-cdde1d3ad8ea",
          createdAt: "2023-02-27T10:46:14.000Z",
          updatedAt: "2023-02-27T10:46:14.000Z",
          deletedAt: null,
          number: "A3",
          comment: null,
          needsCleaning: 0,
          available: 1,
          pebScore: null,
          archivedAt: null,
          floor: null,
          buildingQuotity: null,
          rentalUnitOwnerships: [],
          payments: [],
          tasks: [],
          leases: [],
        },
        {
          id: 58,
          uuid: "fa2135b0-6415-4bde-bdf6-795b8686f40f",
          createdAt: "2023-02-27T10:46:14.000Z",
          updatedAt: "2023-02-27T10:46:14.000Z",
          deletedAt: null,
          number: "A1",
          comment: null,
          needsCleaning: 0,
          available: 1,
          pebScore: null,
          archivedAt: null,
          floor: null,
          buildingQuotity: null,
          rentalUnitOwnerships: [],
          payments: [],
          tasks: [],
          leases: [],
        },
      ],
    },
    {
      id: 7,
      uuid: "df1de2c1-d0ba-4b79-9d17-b9c544b9fc65",
      createdAt: "2023-02-27T10:46:14.000Z",
      updatedAt: "2023-02-27T10:46:14.000Z",
      deletedAt: null,
      name: "Modèle B",
      surfaceArea: "20-23",
      capacity: 2,
      baseRent: 90000,
      baseDeposit: 90000,
      baseFee: 24000,
      baseInventoryCost: 11500,
      description:
        "1 séjour-chambre, 1 cuisine entièrement équipée, 1 salle de bain équipée d'une douche, d'un meuble évier miroir et d'un wc.",
      rentalUnits: [
        {
          id: 65,
          uuid: "47bac873-1675-4ea2-844e-7b01843683f1",
          createdAt: "2023-02-27T10:46:14.000Z",
          updatedAt: "2023-02-27T10:46:14.000Z",
          deletedAt: null,
          number: "B2",
          comment: null,
          needsCleaning: 0,
          available: 1,
          pebScore: null,
          archivedAt: null,
          floor: null,
          buildingQuotity: null,
          rentalUnitOwnerships: [],
          payments: [],
          tasks: [],
          leases: [],
        },
        {
          id: 64,
          uuid: "5579c5f1-5c59-4c48-b81a-f112d5a032dc",
          createdAt: "2023-02-27T10:46:14.000Z",
          updatedAt: "2023-02-27T10:46:14.000Z",
          deletedAt: null,
          number: "B1",
          comment: null,
          needsCleaning: 0,
          available: 1,
          pebScore: null,
          archivedAt: null,
          floor: null,
          buildingQuotity: null,
          rentalUnitOwnerships: [],
          payments: [],
          tasks: [],
          leases: [],
        },
        {
          id: 66,
          uuid: "5bab9a0a-a37f-4f8d-ba44-ad6e4c29b4a2",
          createdAt: "2023-02-27T10:46:14.000Z",
          updatedAt: "2023-02-27T10:46:14.000Z",
          deletedAt: null,
          number: "B3",
          comment: null,
          needsCleaning: 0,
          available: 1,
          pebScore: null,
          archivedAt: null,
          floor: null,
          buildingQuotity: null,
          rentalUnitOwnerships: [],
          payments: [],
          tasks: [],
          leases: [],
        },
        {
          id: 67,
          uuid: "6d4b1b94-168f-43b4-a2e1-10575882fa9a",
          createdAt: "2023-02-27T10:46:14.000Z",
          updatedAt: "2023-02-27T10:46:14.000Z",
          deletedAt: null,
          number: "B4",
          comment: null,
          needsCleaning: 0,
          available: 1,
          pebScore: null,
          archivedAt: null,
          floor: null,
          buildingQuotity: null,
          rentalUnitOwnerships: [],
          payments: [],
          tasks: [],
          leases: [
            {
              terminationDate: "2023-08-31T00:00:00.000+02:00",
              id: 36,
              uuid: "87e2aa52-354c-4595-b348-5a65f25a9d89",
              createdAt: "2023-02-27T10:46:14.000Z",
              updatedAt: "2023-02-27T10:46:14.000Z",
              deletedAt: null,
              signDate: "2016-08-31T00:00:00.000+02:00",
              startDate: "2016-09-01T00:00:00.000+02:00",
              endDate: "2023-08-31T00:00:00.000+02:00",
              rentAmount: 60000,
              maintenanceCharges: 12000,
              partialFirstMonthRent: null,
              partialFirstMonthCharges: null,
              dueDate: 1,
              status: "ok",
              inventoryCost: 11500,
              dueInventories: "both",
              comment: "bail loong double splitcom test indexation",
              specificity: null,
              indexable: 1,
              increased: 0,
              deposit: 90000,
              rentalGuarantee: null,
              archivedAt: null,
              type: {
                id: 1,
                uuid: "ae88bfdc-18e7-4f68-a7e4-bf4b438da162",
                createdAt: "2023-02-27T10:46:12.000Z",
                updatedAt: "2023-02-27T10:46:12.000Z",
                deletedAt: null,
                name: "Bail étudiant",
                minDuration: 0,
                maxDuration: 12,
                noticePeriod: 2,
              },
              tenancies: [
                {
                  domiciliated: 0,
                  uuid: "57b09235-1c2b-4b0f-91f0-0df1328a1176",
                  createdAt: "2023-02-27T10:46:14.000Z",
                  updatedAt: "2023-02-27T10:46:14.000Z",
                  communication: "022222222373",
                  share: 40000,
                  chargesShare: 6000,
                  tenant_id: 62,
                  lease_id: 36,
                  rentsPaid: 0,
                  chargesPaid: 0,
                  additionalCostsPaid: 0,
                  feesPaid: 0,
                  lease: {
                    terminationDate: "2023-08-31T00:00:00.000+02:00",
                    id: 36,
                    uuid: "87e2aa52-354c-4595-b348-5a65f25a9d89",
                    createdAt: "2023-02-27T10:46:14.000Z",
                    updatedAt: "2023-02-27T10:46:14.000Z",
                    deletedAt: null,
                    signDate: "2016-08-31T00:00:00.000+02:00",
                    startDate: "2016-09-01T00:00:00.000+02:00",
                    endDate: "2023-08-31T00:00:00.000+02:00",
                    rentAmount: 60000,
                    maintenanceCharges: 12000,
                    partialFirstMonthRent: null,
                    partialFirstMonthCharges: null,
                    dueDate: 1,
                    status: "ok",
                    inventoryCost: 11500,
                    dueInventories: "both",
                    comment: "bail loong double splitcom test indexation",
                    specificity: null,
                    indexable: 1,
                    increased: 0,
                    deposit: 90000,
                    rentalGuarantee: null,
                    archivedAt: null,
                    rentalUnit: {
                      id: 67,
                      uuid: "6d4b1b94-168f-43b4-a2e1-10575882fa9a",
                      createdAt: "2023-02-27T10:46:14.000Z",
                      updatedAt: "2023-02-27T10:46:14.000Z",
                      deletedAt: null,
                      number: "B4",
                      comment: null,
                      needsCleaning: 0,
                      available: 1,
                      pebScore: null,
                      archivedAt: null,
                      floor: null,
                      buildingQuotity: null,
                    },
                  },
                  payments: [],
                  tenant: {
                    id: 62,
                    uuid: "0673c459-982f-484c-9f80-c69db8174978",
                    createdAt: "2023-02-27T10:46:14.000Z",
                    updatedAt: "2023-02-27T10:46:14.000Z",
                    deletedAt: null,
                    firstname: "Alan",
                    lastname: "Daniel",
                    email: "Alan_Daniel@grr.la",
                    gender: "m",
                    birthDate: "1984-08-12T00:00:00.000+02:00",
                    birthPlace: "Port Evangelinefurt",
                    nationality: "turkmenistan",
                    nationalId: "7286387763",
                    iban: "BE61310126985517",
                    bic: "BBRUBEBB",
                    comment: null,
                    roles: ["tenant"],
                    vat: null,
                    archivedAt: null,
                  },
                },
                {
                  domiciliated: 0,
                  uuid: "72aae818-b21e-463a-8335-8412aa04d0c0",
                  createdAt: "2023-02-27T10:46:14.000Z",
                  updatedAt: "2023-02-27T10:46:14.000Z",
                  communication: "022222222474",
                  share: 20000,
                  chargesShare: 6000,
                  tenant_id: 63,
                  lease_id: 36,
                  rentsPaid: 0,
                  chargesPaid: 0,
                  additionalCostsPaid: 0,
                  feesPaid: 0,
                  lease: {
                    terminationDate: "2023-08-31T00:00:00.000+02:00",
                    id: 36,
                    uuid: "87e2aa52-354c-4595-b348-5a65f25a9d89",
                    createdAt: "2023-02-27T10:46:14.000Z",
                    updatedAt: "2023-02-27T10:46:14.000Z",
                    deletedAt: null,
                    signDate: "2016-08-31T00:00:00.000+02:00",
                    startDate: "2016-09-01T00:00:00.000+02:00",
                    endDate: "2023-08-31T00:00:00.000+02:00",
                    rentAmount: 60000,
                    maintenanceCharges: 12000,
                    partialFirstMonthRent: null,
                    partialFirstMonthCharges: null,
                    dueDate: 1,
                    status: "ok",
                    inventoryCost: 11500,
                    dueInventories: "both",
                    comment: "bail loong double splitcom test indexation",
                    specificity: null,
                    indexable: 1,
                    increased: 0,
                    deposit: 90000,
                    rentalGuarantee: null,
                    archivedAt: null,
                    rentalUnit: {
                      id: 67,
                      uuid: "6d4b1b94-168f-43b4-a2e1-10575882fa9a",
                      createdAt: "2023-02-27T10:46:14.000Z",
                      updatedAt: "2023-02-27T10:46:14.000Z",
                      deletedAt: null,
                      number: "B4",
                      comment: null,
                      needsCleaning: 0,
                      available: 1,
                      pebScore: null,
                      archivedAt: null,
                      floor: null,
                      buildingQuotity: null,
                    },
                  },
                  payments: [],
                  tenant: {
                    id: 63,
                    uuid: "a09bdcc5-9beb-40aa-8b63-2d49f0e10c35",
                    createdAt: "2023-02-27T10:46:14.000Z",
                    updatedAt: "2023-02-27T10:46:14.000Z",
                    deletedAt: null,
                    firstname: "Kasey",
                    lastname: "Wiza",
                    email: "Kasey_Wiza@grr.la",
                    gender: "f",
                    birthDate: "1956-02-21T00:00:00.000+01:00",
                    birthPlace: "North Timothyton",
                    nationality: "panama",
                    nationalId: "3827984694",
                    iban: "BE61310126985517",
                    bic: "BBRUBEBB",
                    comment: null,
                    roles: ["tenant"],
                    vat: null,
                    archivedAt: null,
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  payments: [],
  files: [],
  fileTypes: [
    {
      isValid: 0,
      uuid: "7fcfc72f-84b9-4284-8970-dc0ddbcb1648",
      createdAt: "2023-02-27T10:46:14.000Z",
      updatedAt: "2023-02-27T10:46:14.000Z",
      building_id: 2,
      file_type_id: 1,
      validityDate: null,
      fileType: {
        id: 1,
        uuid: "4e9636be-e4e1-4a36-881c-580d0b7bb1de",
        createdAt: "2023-02-27T10:46:12.000Z",
        updatedAt: "2023-02-27T10:46:12.000Z",
        deletedAt: null,
        name: "misc",
        targetEntities: [
          "tenant",
          "owner",
          "lease",
          "rentalUnit",
          "warrantor",
          "building",
          "contractor",
        ],
        handlesValidity: 0,
        hasToggle: 0,
      },
    },
    {
      isValid: 0,
      uuid: "e8157287-789e-4b97-9e13-7852c774e7ef",
      createdAt: "2023-02-27T10:46:14.000Z",
      updatedAt: "2023-02-27T10:46:14.000Z",
      building_id: 2,
      file_type_id: 8,
      validityDate: null,
      fileType: {
        id: 8,
        uuid: "9725b23c-3935-4479-89ea-348ca41a5237",
        createdAt: "2023-02-27T10:46:12.000Z",
        updatedAt: "2023-02-27T10:46:12.000Z",
        deletedAt: null,
        name: "energyCertificate",
        targetEntities: ["rentalUnit", "building"],
        handlesValidity: 1,
        hasToggle: 1,
      },
    },
  ],
  tasks: [],
};

export type IBuilding = typeof building;
