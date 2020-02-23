import React from 'react';
import Home from '../components/home/Home';
import Settings from '../components/settings/Settings';
import Day from '../components/day/Day';
import DayDetails from '../components/day/DayDetails';

export const ROUTES = [
  {
    exact: true,
    path: '/',
    component: () => <Home />
  },
  {
    path: '/settings',
    component: () => <Settings />
  },
  {
    path: '/day/:dayId',
    component: () => <Day />
  },
  {
    path: '/day',
    component: () => <Day />
  },
  {
    path: '/:dayId',
    component: () => <DayDetails />
  },
];
