import React, { lazy } from 'react';

const Home = lazy(() => import('../components/home/Home'));
const Settings = lazy(() => import('../components/settings/Settings'));
const DayForm = lazy(() => import('../components/day/DayForm'));
const DayDetails = lazy(() => import('../components/day/DayDetails'));

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
