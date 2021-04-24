import React from "react";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";
import {useSelector, useDispatch} from "react-redux";
import {fetchHousesList} from "../../../store/api/api-actions"
import {RootState} from "../../../store/reducer";
import {PaginateConfig} from "./const";

import "./paginate.scss";

interface Props {
  pageCount: number
}

const Paginate: React.FC<Props> = ({pageCount}) => {

  const dispatch = useDispatch()
  const {auth, companie} = useSelector((state: RootState) => state);

  type OnPageChangeCallback = ReactPaginateProps['onPageChange']

  const handlePageClick: OnPageChangeCallback = (selectedItem) => {
    const newPage = selectedItem.selected;
    if (auth && companie) {
      dispatch(fetchHousesList(auth, companie.id, newPage))
    }
  }

  return (
    <div className="paginate__wrapper">
      <ReactPaginate
        previousLabel={PaginateConfig.PREVIOUS_LABEL}
        nextLabel={PaginateConfig.NEXT_LABEL}
        breakLabel={PaginateConfig.BREAK_LABEL}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={PaginateConfig.MARGIN_PAGES}
        pageRangeDisplayed={PaginateConfig.PAGE_RANGE}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}/>
    </div>
  )
}

export default Paginate;
