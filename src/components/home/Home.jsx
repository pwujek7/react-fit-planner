import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchAllDays } from '../../actions/daysActions';

import DayList from '../day/DayList';

const Home = () => {
  const days = useSelector(state => state.days);
  const {
    data,
    fetchAllDaysLoading,
    fetchAllDaysError,
    fetchAllDaysErrorMessage
  } = days;
  const dispatch = useDispatch();

  useEffect(() => {
    if (data.length > 0) return;
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

      {
        (data && !fetchAllDaysError && !fetchAllDaysLoading)
        && <DayList data={data} />
      }
    </div>
  );
};

export default Home;
