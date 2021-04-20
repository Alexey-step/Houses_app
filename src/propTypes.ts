export interface Companies {
  id: number,
  housesWithManagementContract: string | number,
  clarificationHouses: number,
  isDeletable: boolean,
  housesCount: number,
  createdAt: string,
  updatedAt: string,
  bitrixId: string,
  inn: string,
  ogrn: string,
  kpp:  string,
  shortName:  string,
  email:  string,
  bik: string | number
  name: string,
  director: string,
  phone:  string,
  legalAddress: string,
  bankName: string,
  correspondenceAccount: string | number,
  checkingAccount:  string | number,
  timezone: string | number,
  housesLoadStatus: string,
  innScan:  string | number,
  ogrnScan: string | number,
  regulations:  string,
  parent: number,
  bank: string,
  creator: number,
  workers: Array<Workers>
}

export interface Workers {
  id: number,
  avatar: string,
  createdAt:  string,
  updatedAt:  string,
  firstName:  string,
  lastName: string,
  patronymic: string,
  email:  string,
  inviteCode: string | number,
  user: number,
  roles: Array<string>,
  positions: Array<string>,
  companies: Array<number>
}

export interface House {
  id: number,
  createdAt: string
  address: string,
  reestrFlatCount: number,
  managementContractFilesize:number,
  courtWorksCount: number,
  fiasCode: string,
  status: string | number | boolean,
  city: string,
  street: string,
  houseNum: string,
  floors: number,
  cadNum: string | number,
  square: number,
  egrnSquare: number,
  meta: string | number,
  buildYear:  string | number,
  commissioningYear:  string | number,
  managementContract: string | number,
  inClarificationFrom:  string | number,
  creator:  number,
  company:  number,
  parent: number,
  courtSite: {
    id: number,
    name: string,
    address: string
  },
  companyData: Companies,
  lastExtract: LastExtract
}

export interface LastExtract {
  id: number,
  extractInternalType: string,
  extractType: string,
  status: string,
  actualDate: string | number,
  dealId: number,
  polymorphicCtype: number,
  creator: number,
  parent: string | number,
  house: number,
  actualization: Actualization
  invoice: Invoice
}

export interface Actualization {
  id: number,
  createdAt: string,
  updatedAt: string,
  inActualization: boolean,
  actualizeTo: string,
  period: number,
  status: string,
  extract: number,
  invoice: number
}

export interface Invoice {
  id: number,
  upSells: string | number,
  payDate: string,
  sum: number,
  startCost: number,
  status: string,
  bitrixDealId: string,
  uid: string,
  type: string,
  discount: number,
  accountDiscount: number,
  completitionCert: string,
  invoiceSheet: string,
  managerOrderTariff: string | number,
  isInProcessing: boolean,
  createdBy: string,
  createdAt: string,
  updatedAt: string,
  deletedAt: string,
  polymorphicCtype: number,
  creator: number,
  executorData: {
    id: number,
    executorType: string,
    polymorphicCtype: number,
    company: number,
  }
}
