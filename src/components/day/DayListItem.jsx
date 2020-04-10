import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { formatDate } from '../../utilities/date';

const StyledDayListItem = styled.li`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  & > span {
    grid-column: 1/4;
    grid-row: 1/2;
  }
`;

const DayListItem = ({ day, onDelete }) => {
  const { createdDate, id } = day;
  const date = formatDate(createdDate);

  const handleClick = () => {
    onDelete(day.id);
  };

  return (
    <StyledDayListItem>
      <span>{date}</span>
      <Link to={`/${id}`}>view</Link>
      <Link to={`/day/${id}`}>edit</Link>
      <button type="button" onClick={handleClick}>delete</button>
    </StyledDayListItem>
  );
};

DayListItem.propTypes = {
  day: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default DayListItem;
