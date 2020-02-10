import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createSelector } from 'reselect';

const selectDayById = (dayId) => {
  return createSelector(
    state => state.days.data,
    days => days.filter(day => day.id === dayId)
  );
};

const DayDetails = () => {
  const { dayId } = useParams();
  const data = useSelector(selectDayById(dayId));

  return (
    <div>
      {data[0].id}
    </div>
  );
};

export default DayDetails;
