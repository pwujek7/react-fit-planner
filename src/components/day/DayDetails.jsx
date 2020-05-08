import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { selectCurrentMacroAmount, selectDayById } from '../../selectors/daysSelectors';

import ChartPie from '../charts/ChartPie';

import StyledAbsoluteContainer from '../common/styled/StyledAbsoluteContainer';
import StyledText from '../common/styled/StyledText';
import StyledHeading from '../common/styled/StyledHeading';
import Icon from '../common/Icon';

import { calculateCalories, calculateMacroPercentage } from '../../utilities/macro';
import { formatDate } from '../../utilities/date';
import { ICONS } from '../../constants/icons';
import {
  COLOR, SIZE, WEIGHT, FLEXROW
} from '../../constants/styles';

const StyledDayDetailsContainer = styled(StyledAbsoluteContainer)`
  border: 1px solid ${({ theme }) => theme.color.lightGray};
  background-color: ${({ theme }) => theme.color.white};

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.s}) {
    width: 320px;
    padding: 20px 10px;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.m}) {
    width: 400px;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.l}) {
    width: 480px;
    padding: 20px;
  }
`;

const StyledDayDetailsHeading = styled(StyledHeading)`
  color: ${({ theme }) => theme.color.lightGray};
  background-color: ${({ theme }) => theme.color.white};
  font-weight: ${({ theme }) => theme.font.weight.normal};
  padding: 0 10px;
  position: absolute;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.s}) {
    font-size: ${({ theme }) => theme.font.size.m};
    top: -11px;
    right: 15px;
  }
`;

const StyledDayDetailsText = styled(StyledText)`
  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.l}) {
    display: block;
    border-bottom: 1px solid ${({ theme }) => theme.color.veryLightGray};
    padding: 0 0 10px 0;
    margin: 0 0 10px 0;
  }
`;

const StyledDayDetailsWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.s}) {
    flex-direction: column;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.l}) {
    flex-direction: row;
  }
`;

const StyledDayDetailsRow = styled.div`
  margin: 10px 0 0 0;
  display: flex;
  flex-wrap: nowrap;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.s}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.l}) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const StyledTextWrapper = styled.div`
  ${FLEXROW};
  align-items: center;
  margin: 10px 0 0 0;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.s}) {
    justify-content: flex-start;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.l}) {
    width: 100%;
    justify-content: space-between;
  }
`;

const StyledDayDetailsOptionsPanel = styled.div`
  ${FLEXROW};
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.lightGray};
  padding: 7px 12px;
  position: absolute;
  bottom: -20px;
  right: -15px;

  & svg {
    margin: 0 10px;
  }
`;

const DayDetails = () => {
  const { dayId } = useParams();
  const day = useSelector(selectDayById(dayId));
  const { createdDate } = day[0];
  const [dDay, month, year] = formatDate(createdDate);
  const history = useHistory();
  const proteins = useSelector(selectCurrentMacroAmount('proteins', dayId));
  const carbs = useSelector(selectCurrentMacroAmount('carbs', dayId));
  const fat = useSelector(selectCurrentMacroAmount('fat', dayId));
  const calories = calculateCalories(proteins, carbs, fat);
  const chartData = calculateMacroPercentage(proteins, carbs, fat);

  const handleReturn = () => {
    history.goBack();
  };

  return (
    <StyledDayDetailsContainer>
      <StyledDayDetailsHeading>{dDay}-{month}-{year}</StyledDayDetailsHeading>
      <StyledDayDetailsText
        fontColor={COLOR.DARKBLUE}
        fontSize={SIZE.L}
        fontWeight={WEIGHT.MEDIUM}
      >
        {calories} kcal
      </StyledDayDetailsText>
      <StyledDayDetailsWrapper>
        <StyledDayDetailsRow>
          <StyledTextWrapper>
            <StyledText
              fontColor={COLOR.GRAY}
              fontSize={SIZE.S}
              fontWeight={WEIGHT.NORMAL}
            >
              Proteins:
            </StyledText>
            <StyledText
              fontColor={COLOR.DARKBLUE}
              borderColor={COLOR.BLUE}
              fontSize={SIZE.L}
              fontWeight={WEIGHT.MEDIUM}
              padding
              margin
            >
              {proteins}g
            </StyledText>
          </StyledTextWrapper>
          <StyledTextWrapper>
            <StyledText
              fontColor={COLOR.GRAY}
              fontSize={SIZE.S}
              fontWeight={WEIGHT.NORMAL}
            >
              Fat:
            </StyledText>
            <StyledText
              fontColor={COLOR.DARKBLUE}
              borderColor={COLOR.RED}
              fontSize={SIZE.L}
              fontWeight={WEIGHT.MEDIUM}
              padding
              margin
            >
              {fat}g
            </StyledText>
          </StyledTextWrapper>
          <StyledTextWrapper>
            <StyledText
              fontColor={COLOR.GRAY}
              fontSize={SIZE.S}
              fontWeight={WEIGHT.NORMAL}
            >
              Carbs:
            </StyledText>
            <StyledText
              fontColor={COLOR.DARKBLUE}
              borderColor={COLOR.YELLOW}
              fontSize={SIZE.L}
              fontWeight={WEIGHT.MEDIUM}
              padding
              margin
            >
              {carbs}g
            </StyledText>
          </StyledTextWrapper>
        </StyledDayDetailsRow>
        <ChartPie data={chartData} />
      </StyledDayDetailsWrapper>
      <StyledDayDetailsOptionsPanel>
        <Icon
          onClick={handleReturn}
          icon={ICONS.RETURN}
          size="24"
          color={COLOR.DARKBLUE}
        />
        <Link to={`/day/${dayId}`}>
          <Icon icon={ICONS.PENCIL} size="24" color={COLOR.DARKBLUE} />
        </Link>
      </StyledDayDetailsOptionsPanel>
    </StyledDayDetailsContainer>
  );
};

export default DayDetails;
