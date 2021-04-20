import React, {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../store/api/api-actions";
import {Redirect} from "react-router-dom"
import {RootState} from "../../store/reducer"
import withError from "../../hocs/with-error";

import "./login.scss";

const Login: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();
  const {auth} = useSelector((state: RootState) => state);

  if (auth) {
    return <Redirect to="/"/>;
  }

  const handleSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    dispatch(login({
      username: emailRef.current?.value as string,
      password: passwordRef.current?.value as string
    }));
  };

  return (
    <section className="login">
      <h1 className="login__title">Авторизация</h1>
      <form
        className="login__form"
        onSubmit={handleSubmit}
        action="#"
        method="post"
        id="form"
      >
        <label className="visually-hidden">Login</label>
        <input
          className="login__input"
          ref={emailRef}
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <label className="visually-hidden">Password</label>
        <input
          className="login__input"
          ref={passwordRef}
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button
          className="login__submit"
          type="submit"
        >Войти</button>
      </form>
    </section>
  );
};

export default withError(Login);
