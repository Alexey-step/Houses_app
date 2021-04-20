import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducer";
import {House} from "../../propTypes";
import {Status} from "../../const";
import Spinner from "../spinner/spinner";
import HousesItem from "../houses-item/houses-item";

import "./houses.scss"

const Houses: React.FC = () => {
  const {houses, isLoading} = useSelector((state: RootState) => state);

  if (isLoading === Status.LOAD) {
    return <Spinner/>
  }

  return (
    <section className="houses">
      <table className="houses__table">
        <thead>
          <tr>
            <th>id</th>
            <th>Адрес</th>
            <th>Кол-во квартир</th>
            <th>Дата добавления</th>
          </tr>
        </thead>
        {
          houses.map((house: House) =>
            <HousesItem house={house} key={house.id}/>
          )
        }
      </table>
    </section>
  )
}

export default Houses;
