import React from 'react';
import { shallow } from 'enzyme';
import { NavLink } from 'react-router-dom';

import Navigation from './Navigation';

describe('<Navigation /> component', () => {
  const navigation = shallow(<Navigation />);

  it('renders without errors', () => {
    shallow(<Navigation />);
  });

  it('renders with 4 <NavLink /> components', () => {
    expect(navigation.find(NavLink)).toHaveLength(4);
  });

  it('renders and each of the <NavLink /> has "to" prop defined', () => {
    navigation.find(NavLink).forEach((node) => {
      expect(node.props().to).toBeDefined();
    });
  });
});
