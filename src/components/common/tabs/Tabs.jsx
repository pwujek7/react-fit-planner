import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Tab from './Tab';

const StyledTabs = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`;

const StyledTabsList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  list-style-type: none;
  width: 100%;
  margin: 0 0 15px 0;
`;

const StyledTabsContent = styled.div`
  width: 100%;
`;

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <StyledTabs>
      <StyledTabsList>
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
      </StyledTabsList>
      <StyledTabsContent>
        {
          children.map((child) => {
            return child.props.label !== activeTab ? undefined : child.props.children;
          })
        }
      </StyledTabsContent>
    </StyledTabs>
  );
};

Tabs.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired
};

export default Tabs;
