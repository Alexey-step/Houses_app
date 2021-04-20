import {createReducer} from "@reduxjs/toolkit";
import * as ActionCreator from "./action-creators";
import {Companies, House} from "../propTypes";
import {Status} from "../const";

interface InitialStateTypes {
  companies: Companies[],
  auth?: string,
  companie?: Companies,
  houses: House[],
  housesCount: number,
  isLoading: string
}

const initialState: InitialStateTypes = {
  companies: [],
  houses: [],
  housesCount: 0,
  isLoading: Status.PENDING
}

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(ActionCreator.setCompanies, (state, action) => {
      state.companies = action.payload;
    })
    .addCase(ActionCreator.setAuthorization, (state, action) => {
      state.auth = action.payload;
    })
    .addCase(ActionCreator.setCompanie, (state, action) => {
      state.companie = action.payload;
    })
    .addCase(ActionCreator.setHouses, (state, action) => {
      state.houses = action.payload;
    })
    .addCase(ActionCreator.setHousesCount, (state, action) => {
      state.housesCount = action.payload;
    })
    .addCase(ActionCreator.setStatus, (state, action) => {
      state.isLoading = action.payload;
    })
})

export type RootState = ReturnType<typeof reducer>

export default reducer;
