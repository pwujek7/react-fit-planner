import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchAllDays } from '../../actions/daysActions';
import { selectDays, selectDaysData } from '../../selectors/selectors';

import ErrorBoundary from '../common/ErrorBoundary';
import DayList from '../day/DayList';

const Home = () => {
  const days = useSelector(selectDays);
  const daysData = useSelector(selectDaysData);
  const {
    fetchAllDaysLoading,
    fetchAllDaysError,
    fetchAllDaysErrorMessage
  } = days;
  const dispatch = useDispatch();

  useEffect(() => {
    if (daysData.length > 0) return;
    dispatch(fetchAllDays());
  }, []);

  return (
    <ErrorBoundary>
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
          (daysData && !fetchAllDaysError && !fetchAllDaysLoading)
          && <DayList data={daysData} />
        }
      </div>
    </ErrorBoundary>
  );
};

export default Home;
