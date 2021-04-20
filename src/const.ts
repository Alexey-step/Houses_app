export const HOUSES_PER_PAGE: number = 10;
export const ERROR_TIMEOUT: number = 3000;

interface StatusTypes {
  PENDING: string,
  LOAD: string,
  LOADED: string,
  ERROR: string
}

export const Status: StatusTypes = {
  PENDING: `pending`,
  LOAD: `load`,
  LOADED: `loaded`,
  ERROR: `error`
}
