import browserHistory from "../../browser-history";
import { ActionType } from "../actions";
import {RootState} from "../reducer";
import {Middleware} from "redux"


export const redirect: Middleware<RootState> = () => (next) => (action) => {
  if (action.type === ActionType.REDIRECT_TO_ROUTE) {
    browserHistory.push(`/`);
  }

  return next(action)
}

