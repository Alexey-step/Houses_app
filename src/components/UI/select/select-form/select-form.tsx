import React, {useState} from "react";
import {useSelector} from "react-redux";
import SelectList from "../select-list/select-list";
import {RootState} from "../../../../store/reducer";
import ArrowIcon from "../../arrow-icon/arrow-icon";

import "./select-form.scss";

const Select: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {companies, companie, auth} = useSelector((state: RootState) => state);

  const handleSelect = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="select">
      <h2 className="visually-hidden">Список компаний</h2>
      <form className="select__form" action="#" method="get">
        <span className="select__caption">Выберите компанию из списка: </span>
        <div className="select__wrapper">
          <span className="select__type" tabIndex={0}>
            {auth && companie?.name}
          </span>
          <button
            onClick={handleSelect}
            type="button"
            className={`select__arrow ${isOpen && `select__arrow--open`}`}
            disabled={!auth && true}
          >
            <ArrowIcon/>
          </button>
          {
            isOpen && <SelectList onItemClick={handleSelect} companies={companies} />
          }
        </div>
      </form>
    </section>
  )
}

export default Select;
