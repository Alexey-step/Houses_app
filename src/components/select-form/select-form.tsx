import React, {useState} from "react";
import {useSelector} from "react-redux";
import SelectList from "../select-list/select-list";
import {RootState} from "../../store/reducer";

import "./select-form.scss";

const Select: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {companies, companie, auth} = useSelector((state: RootState) => state);

  const handleSelect = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="select">
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
            <svg width="10" height="7" viewBox="0 0 7 4" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"/>
            </svg>
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
