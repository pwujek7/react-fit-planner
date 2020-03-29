import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { selectCurrentMacroAmount } from '../../selectors/selectors';
import StyledAbsoluteContainer from '../common/styled/StyledAbsoluteContainer';
import ChartPie from '../charts/ChartPie';

import { calculateCalories, calculateMacroPercentage } from '../../utilities/macro';

const StyledDayDetailsContainer = styled(StyledAbsoluteContainer)`
  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.s}) {
    width: 280px;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.m}) {
    width: 380px;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.l}) {
    width: 520px;
  }
`;

const DayDetails = () => {
  const { dayId } = useParams();
  const proteins = useSelector(selectCurrentMacroAmount('proteins', dayId));
  const carbs = useSelector(selectCurrentMacroAmount('carbs', dayId));
  const fat = useSelector(selectCurrentMacroAmount('fat', dayId));
  const calories = calculateCalories(proteins, carbs, fat);
  const chartData = calculateMacroPercentage(proteins, carbs, fat);

  return (
    <StyledDayDetailsContainer>
      <span>Calories: {calories}</span>
      <br />
      <span>
        Proteins: {proteins} | Carbohydrates: {carbs} | Fat: {fat}
      </span>
      <br />
      <br />
      <br />
      <ChartPie data={chartData} />
    </StyledDayDetailsContainer>
  );
};

export default DayDetails;
