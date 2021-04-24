import React from "react";
import {Companies} from "../../../../types";
import {useDispatch} from "react-redux";
import {setCompanie} from "../../../../store/action-creators";

interface Props {
  item: Companies,
  onItemClick: () => void
}

const SelectItem: React.FC<Props> = (props) => {
  const {item, onItemClick} = props;
  const dispatch = useDispatch()

  const handleChangeOption = (item: Companies) => {
    dispatch(setCompanie(item));
    onItemClick();
  };

  return (
    <li className={`select__item`}
      tabIndex={0}
      data-testid="option"
      onClick={() => handleChangeOption(item)}
    >
      {item.name}
    </li>
  );
};

export default SelectItem;
