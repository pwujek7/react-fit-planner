import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Tab from './Tab';

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <ul>
        {children.map((child) => {
          const { label } = child.props;

          return (
            <Tab
              activeTab={activeTab}
              key={label}
              label={label}
              onClick={handleTabClick}
            />
          );
        })}
      </ul>
      <div>
        {
          children.map((child) => {
            return child.props.label !== activeTab ? undefined : child.props.children;
          })
        }
      </div>
    </div>
  );
};

Tabs.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired
};

export default Tabs;
