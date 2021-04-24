import React, {FormEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../store/api/api-actions";
import {Redirect} from "react-router-dom"
import {RootState} from "../../store/reducer"
import withError from "../../hocs/with-error";

import "./login.scss";

const Login: React.FC = () => {
  const [data, setData] = useState({
    username: ``,
    password: ``,
  })

  const dispatch = useDispatch();
  const {auth} = useSelector((state: RootState) => state);

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = evt.target
    setData({
      ...data,
      [name]: value
    })
  }

  if (auth) {
    return <Redirect to="/"/>;
  }

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    dispatch(login({
      username: data.username,
      password: data.password
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
        <label htmlFor="user_email" className="visually-hidden">Login</label>
        <input
          className="login__input"
          value={data.username}
          type="email"
          name="username"
          id="user_email"
          placeholder="Email"
          required
          onChange={handleInputChange}
        />
        <label htmlFor="user_password" className="visually-hidden">Password</label>
        <input
          className="login__input"
          value={data.password}
          type="password"
          name="password"
          id="user_password"
          placeholder="Password"
          required
          onChange={handleInputChange}
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
