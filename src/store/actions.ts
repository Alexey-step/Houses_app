import {Companies, House} from "../propTypes";

export enum ActionType {
  SET_COMPANIES = `setCompanies`,
  SET_AUTHORIZATION = `setAuthorization`,
  REDIRECT_TO_ROUTE = `redirectToRoute`,
  SET_COMPANIE = `setCompanie`,
  SET_HOUSES = `setHouses`,
  SET_HOUSES_COUNT = `setHousesCount`,
  SET_STATUS = `setStatus`
}

interface setCompaniesAction {
  type: ActionType.SET_COMPANIES,
  payload: Companies[]
}

interface setAuthorizationAction {
  type: ActionType.SET_AUTHORIZATION,
  payload: string
}

interface redirectToRouteAction {
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: string
}

interface setCompanieAction {
  type: ActionType.SET_COMPANIE,
  payload: Companies
}

interface setHousesAction {
  type: ActionType.SET_HOUSES,
  payload: House[]
}

interface setHousesCountAction {
  type: ActionType.SET_HOUSES_COUNT,
  payload: number
}

interface setStatusAction {
  type: ActionType.SET_STATUS,
  payload: string
}

export type ActionTypes =
| setCompaniesAction
| setAuthorizationAction
| redirectToRouteAction
| setCompanieAction
| setHousesAction
| setHousesCountAction
| setStatusAction;
