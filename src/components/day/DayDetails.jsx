import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { selectCurrentMacroAmount } from '../../selectors/selectors';
import StyledAbsoluteContainer from '../common/styled/StyledAbsoluteContainer';

const StyledDayDetailsContainer = styled(StyledAbsoluteContainer)`
  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.s}) {
    top: 75px;
    transform: translate(-50%, 0%);
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
  const calories = (proteins * 4) + (carbs * 4) + (fat * 9);

  return (
    <StyledDayDetailsContainer>
      <span>Calories: {calories}</span>
      <br />
      <span>
        Proteins: {proteins} | Carbohydrates: {carbs} | Fat: {fat}
      </span>
    </StyledDayDetailsContainer>
  );
};

export default DayDetails;
