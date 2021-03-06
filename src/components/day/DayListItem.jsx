import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Icon from '../common/Icon';
import StyledButton from '../common/styled/StyledButton';
import StyledLink from '../common/styled/StyledLink';

import { formatDate } from '../../utilities/date';
import { ICONS } from '../../constants/icons';
import { COLOR, FLEXCOLUMN, FLEXROW } from '../../constants/styles';

const StyledDayItemDatePanel = styled.div`
  color: ${({ theme }) => theme.color.gray};
  background-color: ${({ theme }) => theme.color.white};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  position: absolute;
  transition: all .25s ease-in-out;

  & span {
    display: block;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.s}) {
    font-size: calc(${({ theme }) => theme.font.size.xxl} * 1.5);
    line-height: 30px;
    padding: 5px 5px 0 0;
    bottom: -15px;
    left: -10px;
  }
`;

const StyledDayListItem = styled.li`
  display: grid;
  border: 1px solid ${({ theme }) => theme.color.lightGray};
  position: relative;

  &:hover ${StyledDayItemDatePanel} {
    color: ${({ theme }) => theme.color.darkBlue};
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.s}) {
    grid-template-columns: 30% 40% 30%;
    height: 90px;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.m}) {
    grid-template-columns: 10% 25% 65%;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.l}) {
    grid-template-columns: 30% 40% 30%;
  }
`;

const StyledDayItemOptionPanel = styled.div`
  ${FLEXCOLUMN};
  justify-content: space-around;
  align-items: flex-start;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.s}) {
    grid-column: 2/3;
    grid-row: 3/4;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: flex-start;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.m}) {
    grid-column: 3/4;
    grid-row: 2/3;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.l}) {
    grid-column: 2/3;
    grid-row: 3/4;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: flex-start;
  }
`;

const StyledDayItemIconPanel = styled.div`
  ${FLEXROW};
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.color.white};
  width: 70px;
  padding: 0 5px;
  position: absolute;
  top: -12px;
  right: 12px;
`;

const StyledDayItemButton = styled(StyledButton)`
  color: ${({ theme }) => theme.color.lightGray};
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.lightGray};
  font-size: ${({ theme }) => theme.font.size.s};
  font-weight: ${({ theme }) => theme.font.weight.normal};
  line-height: 16px;
  padding: 10px 25px;
  position: absolute;
  bottom: -15px;
  right: -15px;

  &:hover,
  &:active {
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.darkBlue};
    border: 1px solid ${({ theme }) => theme.color.darkBlue};
  }
`;

const StyledDayItemLink = styled(StyledLink)`
  & > svg {
    margin: 0 5px 0 0;
  }
`;

const DayListItem = ({ day, onDelete }) => {
  const {
    id, createdDate, exercises
  } = day;
  const [dDay, month, year] = formatDate(createdDate);
  const isTrainingDay = exercises.length > 0;

  const handleClick = () => {
    onDelete(day.id);
  };

  return (
    <StyledDayListItem>
      <StyledDayItemDatePanel>
        <span>{dDay}</span>
        <span>{month}</span>
        <span>{year}</span>
      </StyledDayItemDatePanel>
      <StyledDayItemOptionPanel>
        <StyledDayItemLink to={`/${id}`}>
          <Icon icon={ICONS.EYE} size="16" color={COLOR.DARKBLUE} />
          view
        </StyledDayItemLink>
        <StyledDayItemLink to={`/day/${id}`}>
          <Icon icon={ICONS.PENCIL} size="14" color={COLOR.DARKBLUE} />
          edit
        </StyledDayItemLink>
      </StyledDayItemOptionPanel>
      <StyledDayItemIconPanel>
        <Icon icon={ICONS.LIFT} size="24" color={isTrainingDay ? COLOR.DARKBLUE : COLOR.VERYLIGHTGRAY} />
        <Icon icon={ICONS.SPOONKNIFE} size="24" color={COLOR.DARKBLUE} />
      </StyledDayItemIconPanel>
      <StyledDayItemButton type="button" onClick={handleClick}>delete</StyledDayItemButton>
    </StyledDayListItem>
  );
};

DayListItem.propTypes = {
  day: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default DayListItem;
