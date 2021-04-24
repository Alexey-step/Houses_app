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

export const fetchCompaniesList = (token: string): AppThunk => async (dispatch, _getState, api) => {
  dispatch(ActionCreator.setStatus(Status.LOAD));
  try {
    const { data: { data: data_1 } } = await api.get(`/reestrdoma/companies/`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
    dispatch(ActionCreator.setCompanies(data_1));
    dispatch(ActionCreator.setStatus(Status.LOADED));
  } catch (e) {
    dispatch(ActionCreator.setStatus(Status.ERROR));
  }
  };

export const fetchHousesList = (token: string, id: number, page: number = 1, perPage: number = 10): AppThunk => async (dispatch, _getState, api) => {
  dispatch(ActionCreator.setStatus(Status.LOAD));
  try {
    const { data } = await api.get(`/reestrdoma/company/houses/${id}/?page=${page}&perPage=${perPage}`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
    dispatch(ActionCreator.setHouses(data.data));
    dispatch(ActionCreator.setHousesCount(data.links.objectsCount));
    dispatch(ActionCreator.setStatus(Status.LOADED));
  } catch (e) {
    dispatch(ActionCreator.setStatus(Status.ERROR));
  }
};

export const login = ({username, password}: LoginType): AppThunk => async (dispatch, _getState, api) => {
  dispatch(ActionCreator.setStatus(Status.LOAD));
  try {
    const { data: { data: data_1 } } = await api.post(`/login/`, { username, password });
    Cookie.set(`token`, data_1.token.access, { expires: 1 });
    dispatch(ActionCreator.setAuthorization(data_1.token.access));
    dispatch(ActionCreator.setStatus(Status.LOADED));
    dispatch(ActionCreator.redirectToRoute(`/`));
  } catch (e) {
    dispatch(ActionCreator.setStatus(Status.ERROR));
  }
  };

