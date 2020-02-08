import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchAllDays } from '../../actions/daysActions';

const Home = () => {
  const days = useSelector(state => state.days);
  const {
    fetchAllDaysLoading,
    fetchAllDaysError,
    fetchAllDaysErrorMessage
  } = days;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllDays());
  }, []);

  return (
    <div>
      {
        fetchAllDaysError
        && <span>{fetchAllDaysErrorMessage}</span>
      }

      {
        fetchAllDaysLoading
        && <span>Loading...</span>
      }
    </div>
  );
};

export default Home;
