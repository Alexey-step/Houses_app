import {createAction} from "@reduxjs/toolkit";
import {ActionType} from "./actions";

export const setCompanies = createAction(ActionType.SET_COMPANIES, (data) => {
  return {
    payload: data
  }
})

export const setAuthorization = createAction(ActionType.SET_AUTHORIZATION, (token) => {
  return {
    payload: token
  }
})

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => {
  return {
    payload: url
  }
})

export const setCompanie = createAction(ActionType.SET_COMPANIE, (name) => {
  return {
    payload: name
  }
})

export const setHouses = createAction(ActionType.SET_HOUSES, (data) => {
  return {
    payload: data
  }
})

export const setHousesCount = createAction(ActionType.SET_HOUSES_COUNT, (count) => {
  return {
    payload: count
  }
})

export const setStatus = createAction(ActionType.SET_STATUS, (isLoading) => {
  return {
    payload: isLoading
  }
})
