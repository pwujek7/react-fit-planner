import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import DayListItem from './DayListItem';
import NewDayListItem from './NewDayListItem';

import { removeDay } from '../../actions/daysActions';
import { selectDays } from '../../selectors/selectors';

const StyledDayListContainer = styled.div`
  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.s}) {
    margin: 60px 40px 0 40px;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.m}) {
    margin: 40px;
    padding: 0;
  }
`;

const StyledDayList = styled.ul`
  display: grid;
  list-style-type: none;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.s}) {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 50px;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.m}) {
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 40px;
    grid-column-gap: 40px;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.l}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const DayList = ({ data }) => {
  const days = useSelector(selectDays);
  const dispatch = useDispatch();
  const { deleteDayError, deleteDayErrorMessage } = days;

  const handleDayDelete = (id) => {
    dispatch(removeDay(id));
  };

  return (
    <StyledDayListContainer>
      <StyledDayList>
        <NewDayListItem />
        {
          data.map((day) => (
            <DayListItem
              day={day}
              onDelete={handleDayDelete}
              key={day.id}
            />
          ))
        }
      </StyledDayList>
      {
        deleteDayError
          && <span>{deleteDayErrorMessage}</span>
      }
    </StyledDayListContainer>
  );
};

DayList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default DayList;
