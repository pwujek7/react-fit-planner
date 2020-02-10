import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const DayList = ({ days }) => (
  <div>
    <ul>
      {
        days.map((day) => (
          <li key={day.id}>
            {day.id}
            <Link to={`/${day.id}`}>Podgląd</Link>
          </li>
        ))
      }
    </ul>
  </div>
);

DayList.propTypes = {
  days: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default DayList;
