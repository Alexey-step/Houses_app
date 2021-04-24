import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import Error from "../components/error/error";
import {ERROR_TIMEOUT, Status} from "../const";
import * as ActionCreator from "../store/action-creators";
import {RootState} from "../store/reducer";

const withError = (Component: React.FC) => {
  const WithError: React.FC = (props) => {
    const dispatch = useDispatch();
    const {isLoading} = useSelector((state: RootState) => state);

    useEffect(() => {
      if (isLoading === Status.ERROR) {
        setTimeout(() => dispatch(ActionCreator.setStatus(Status.PENDING)), ERROR_TIMEOUT);
      }
    }, [dispatch, isLoading]);

    return (
      <>
        {
          isLoading === Status.ERROR && <Error/>
        }
        <Component {...props}/>
      </>
    );
  };

  return WithError;
};

export default withError;
