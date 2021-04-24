import React, { useEffect } from "react";
import Header from "../header/header"
import Select from "../UI/select/select-form/select-form";
import {fetchHousesList, fetchCompaniesList} from "../../store/api/api-actions"
import {RootState} from "../../store/reducer";
import {useDispatch, useSelector} from "react-redux";
import Houses from "../houses/houses";
import Paginate from "../UI/paginate/paginate"
import {HOUSES_PER_PAGE} from "../../const"
import withError from "../../hocs/with-error";

const Main: React.FC = () => {
  const {companie, auth, housesCount} = useSelector((state: RootState) => state)
  const dispatch = useDispatch();
  const pageCount = housesCount / HOUSES_PER_PAGE

  useEffect(() => {
    if (auth) {
      dispatch(fetchCompaniesList(auth))
    }
  }, [dispatch, auth])

  useEffect(() => {
    if (companie && auth) {
      dispatch(fetchHousesList(auth, companie.id))
    }
  }, [dispatch, companie, auth])

  return (
    <>
      <Header/>
      <div className="main">
        <Select/>
        <Houses/>
        <Paginate pageCount={pageCount}/>
      </div>
    </>
  )
}

export default withError(Main);
