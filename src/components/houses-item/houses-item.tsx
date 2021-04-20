import React from "react";
import {House} from "../../propTypes";

interface Props {
  house: House
}

const HousesItem: React.FC<Props> = ({house}) => {

  return (
    <React.Fragment>
      <tbody>
        <tr>
          <td>{house.id}</td>
          <td>{house.address}</td>
          <td>{house.reestrFlatCount}</td>
          <td>{new Date(house.createdAt).toLocaleDateString(`ru-RU`, {year: `numeric`, day: `numeric`, month: `numeric`})}</td>
        </tr>
      </tbody>
    </React.Fragment>
  )
}

export default HousesItem;
