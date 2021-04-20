import * as ActionCreator from "../action-creators";
import {ActionTypes} from "../actions";
import {ThunkAction} from "redux-thunk";
import {AxiosInstance} from "axios";
import {Status} from "../../const";
import Cookie from 'js-cookie';

export type AppThunk = ThunkAction<
  Promise<void>,
  any,
  AxiosInstance,
  ActionTypes
>;

interface LoginType {
  username: string,
  password: string
}

export const fetchCompaniesList = (token: string): AppThunk => (dispatch, _getState, api) => {
  dispatch(ActionCreator.setStatus(Status.LOAD));
  return api.get(`/reestrdoma/companies/`, {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
   .then(({data: {data}}) => {
     dispatch(ActionCreator.setCompanies(data))
     dispatch(ActionCreator.setStatus(Status.LOADED))
   })
   .catch(() => {dispatch(ActionCreator.setStatus(Status.ERROR))})
  };

export const fetchHousesList = (token: string, id: number, page: number = 1, perPage: number = 10): AppThunk => (dispatch, _getState, api) => {
  dispatch(ActionCreator.setStatus(Status.LOAD));
  return api.get(`/reestrdoma/company/houses/${id}/?page=${page}&perPage=${perPage}`, {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
   .then(({data}) => {
     dispatch(ActionCreator.setHouses(data.data))
     dispatch(ActionCreator.setHousesCount(data.links.objectsCount))
     dispatch(ActionCreator.setStatus(Status.LOADED))
   })
   .catch(() => {dispatch(ActionCreator.setStatus(Status.ERROR))})
};

export const login = ({username, password}: LoginType): AppThunk => (dispatch, _getState, api) => {
  dispatch(ActionCreator.setStatus(Status.LOAD));
  return api.post(`/login/`, {username, password})
    .then(({data: {data}}) => {
      Cookie.set(`token`, data.token.access, {expires: 1})
      dispatch(ActionCreator.setAuthorization(data.token.access));
      dispatch(ActionCreator.setStatus(Status.LOADED))
      dispatch(ActionCreator.redirectToRoute(`/`));
    })
    .catch(() => {dispatch(ActionCreator.setStatus(Status.ERROR))})
  };

