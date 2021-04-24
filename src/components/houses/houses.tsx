import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducer";
import {House} from "../../types";
import {Status} from "../../const";
import Spinner from "../UI/spinner/spinner";
import HousesItem from "./houses-item/houses-item";

import "./houses.scss"

const Houses: React.FC = () => {
  const {houses, isLoading} = useSelector((state: RootState) => state);

  if (isLoading === Status.LOAD) {
    return <Spinner/>
  }

  return (
    <section className="houses">
      <h2 className="visually-hidden">Таблица домов</h2>
      <table className="houses__table">
        <thead>
          <tr>
            <th>id</th>
            <th>Адрес</th>
            <th>Кол-во квартир</th>
            <th>Дата добавления</th>
          </tr>
        </thead>
        <tbody>
        {
          houses.map((house: House) =>
            <HousesItem house={house} key={house.id}/>
          )
        }
        </tbody>
      </table>
    </section>
  )
}

export default Houses;
