import axios, {AxiosError, AxiosResponse} from "axios";
import Cookie from "js-cookie";
import {URL, REQUEST_TIMEOUT, HttpCode} from "./const";

export const createAPI = (onUnauthorized: () => void) => {
  const api = axios.create({
    baseURL: URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response: AxiosResponse) => response;

  const onFail = (err: AxiosError) => {
    const {response} = err;

    if (response?.status === HttpCode.UNAUTHORIZED) {
      onUnauthorized();
      Cookie.remove(`token`)

      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;

};
