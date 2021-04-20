import React from "react";
import ReactPaginate from "react-paginate";
import {useSelector, useDispatch} from "react-redux";
import {fetchHousesList} from "../../store/api/api-actions"
import {RootState} from "../../store/reducer";

import "./paginate.scss";

interface Props {
  pageCount: number
}

const Paginate: React.FC<Props> = ({pageCount}) => {

  const dispatch = useDispatch()
  const {auth, companie} = useSelector((state: RootState) => state);

  const handlePageClick = (evt: any) => {
    if (auth && companie) {
      dispatch(fetchHousesList(auth, companie.id, evt.selected))
    }
  }

  return (
    <div className="paginate__wrapper">
      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}/>
    </div>
  )
}

export default Paginate;
