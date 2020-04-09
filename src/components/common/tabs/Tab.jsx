import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ activeTab, label, onClick }) => {
  const handleClick = () => {
    onClick(label);
  };

  return (
    <li onClick={handleClick}>
      {label}
    </li>
  );
};

Tab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Tab;
