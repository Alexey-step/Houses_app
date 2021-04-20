import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import App from "./components/app/App";
import {createAPI} from "./store/api/api";
import reducer from "./store/reducer";
import {redirect} from "./store/middlewares/redirect";
import * as ActionCreator from "./store/action-creators";
import {configureStore} from '@reduxjs/toolkit';
import {BrowserRouter} from "react-router-dom";

import "./index.scss"

const api = createAPI(() => {store.dispatch(ActionCreator.setAuthorization(null))});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: {
        extraArgument: api
      }
    })
    .concat(redirect)
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.querySelector(`#root`)
);
