import React from 'react';
import Home from '../components/home/Home';
import Settings from '../components/settings/Settings';
import DayForm from '../components/day/DayForm';
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
    component: () => <DayForm />
  },
  {
    path: '/day',
    component: () => <DayForm />
  },
  {
    path: '/:dayId',
    component: () => <DayDetails />
  },
];
