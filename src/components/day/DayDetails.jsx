import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectDayById } from '../../selectors/selectors';

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
