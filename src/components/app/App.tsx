import React, {useEffect} from 'react';
import {Switch, Route} from "react-router-dom";
import Main from "../main/main";
import Login from "../login/login"
import Cookie from 'js-cookie';
import {useDispatch} from "react-redux";
import * as ActionCreator from "../../store/action-creators";

const App: React.FC = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const token = Cookie.get("token")
    if (token) {
      dispatch(ActionCreator.setAuthorization(token))
    }
  }, [dispatch])

  return (
    <Switch>
      <Route path="/" exact>
        <Main/>
      </Route>
      <Route path="/login">
        <Login/>
      </Route>
    </Switch>
  );
}

export default App;
