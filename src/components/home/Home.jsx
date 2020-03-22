import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchAllDays } from '../../actions/daysActions';
import { selectDays, selectDaysData } from '../../selectors/selectors';

import ErrorBoundary from '../common/ErrorBoundary';
import DayList from '../day/DayList';
import LoadingIndicator from '../common/LoadingIndicator';

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
      <>
        {
          fetchAllDaysError
          && <span>{fetchAllDaysErrorMessage}</span>
        }

        {
          fetchAllDaysLoading
          && <LoadingIndicator />
        }

        {
          (daysData && !fetchAllDaysError && !fetchAllDaysLoading)
          && <DayList data={daysData} />
        }
      </>
    </ErrorBoundary>
  );
};

export default Home;
