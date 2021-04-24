import React from "react";
import {House} from "../../../types";

interface Props {
  house: House
}

const HousesItem: React.FC<Props> = ({house}) => {
  const {id, address, reestrFlatCount, createdAt} = house;
  const date = new Date(createdAt).toLocaleDateString(`ru-RU`, {year: `numeric`, day: `numeric`, month: `numeric`})

  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{address}</td>
        <td>{reestrFlatCount}</td>
        <td>{date}</td>
      </tr>
    </>
  )
}

export default HousesItem;
