import React from 'react';
import { connect, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { removeDay } from '../../actions/daysActions';
import { selectDays } from '../../selectors/selectors';

const StyledDayListContainer = styled.div`
  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.s}) {
    margin: 10px;
    padding: 20px;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.m}) {
    margin: 20px;
  }
`;

const StyledDayList = styled.ul`
  display: grid;
  list-style-type: none;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.s}) {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 20px;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.m}) {
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 20px;
    grid-column-gap: 20px;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.l}) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const StyledDayListItem = styled.li`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  & > span {
    grid-column: 1/4;
    grid-row: 1/2;
  }
`;

const formatDate = (date) => {
  const fromString = new Date(date);
  return `${fromString.getDate()}-${(fromString.getMonth() + 1)}-${fromString.getFullYear()}`;
};

const DayList = ({ data, remove }) => {
  const days = useSelector(selectDays);
  const { deleteDayError, deleteDayErrorMessage } = days;

  return (
    <StyledDayListContainer>
      <StyledDayList>
        {
          data.map((day) => (
            <StyledDayListItem key={day.id}>
              <span>{formatDate(day.createdDate)}</span>
              <Link to={`/${day.id}`}>podgląd</Link>
              <Link to={`/day/${day.id}`}>edytuj</Link>
              <button type="button" onClick={() => remove(day.id)}>usuń</button>
            </StyledDayListItem>
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

const mapDispatchToProps = (dispatch) => {
  return {
    remove: (id) => dispatch(removeDay(id))
  };
};

DayList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  remove: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(DayList);
