import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectCurrentMacroAmount } from '../../selectors/selectors';

const DayDetails = () => {
  const { dayId } = useParams();
  const proteins = useSelector(selectCurrentMacroAmount('proteins', dayId));
  const carbs = useSelector(selectCurrentMacroAmount('carbs', dayId));
  const fat = useSelector(selectCurrentMacroAmount('fat', dayId));
  const calories = (proteins * 4) + (carbs * 4) + (fat * 9);

  return (
    <div>
      <span>Calories: {calories}</span>
      <br />
      <span>
        Proteins: {proteins} | Carbohydrates: {carbs} | Fat: {fat}
      </span>
    </div>
  );
};

export default DayDetails;
