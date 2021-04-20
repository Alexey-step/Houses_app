import React from "react";
import SelectItem from "../select-item/select-item";
import {Companies} from "../../propTypes";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducer";

interface Props {
  companies: Array<Companies>,
  onItemClick: () => void
}

const SelectList: React.FC<Props> = (props) => {
  const {companies, onItemClick} = props;
  const {auth} = useSelector((state: RootState) => state)

  return (
    <ul className="select__list">
      {
        auth && companies.map((item) => <SelectItem item={item} onItemClick={onItemClick} key={item.id}/>)
      }
    </ul>
  );
};

export default SelectList;
