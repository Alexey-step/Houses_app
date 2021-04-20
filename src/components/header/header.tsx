import React from "react";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {setAuthorization} from "../../store/action-creators";
import {RootState} from "../../store/reducer";
import Cookie from "js-cookie";

import "./header.scss"

const Header: React.FC = () => {

  const dispatch = useDispatch();
  const {auth} = useSelector((state: RootState) => state)

  const handleLogoutButton = () => {
    dispatch(setAuthorization(null))
    Cookie.remove(`token`)
  }

  return (
    <div className="header">
      {
        auth ?
          <button onClick={handleLogoutButton} type="button" className="header__logout-btn">Выйти</button> :
          <Link to="/login" className="header__link">
            Войти
          </Link>
      }
    </div>
  )
}

export default Header;
