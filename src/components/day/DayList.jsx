import React from 'react';
import { connect, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { removeDay } from '../../actions/daysActions';

const DayList = ({ data, remove }) => {
  const days = useSelector(state => state.days);
  const { deleteDayError, deleteDayErrorMessage } = days;

  return (
    <div>
      <ul>
        {
          data.map((day) => (
            <li key={day.id}>
              {day.id}
              <Link to={`/${day.id}`}>podgląd</Link>
              <button type="button" onClick={() => remove(day.id)}>usuń</button>
            </li>
          ))
        }
      </ul>
      {
        deleteDayError
        && <span>{deleteDayErrorMessage}</span>
      }
    </div>
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
