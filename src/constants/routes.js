import React from 'react';
import Home from '../components/home/Home';
import Register from '../components/register/Register';
import Login from '../components/login/Login';
import Settings from '../components/settings/Settings';

export const ROUTES = [
  {
    exact: true,
    path: '/',
    component: <Home />
  },
  {
    path: '/register',
    component: <Register />
  },
  {
    path: '/login',
    component: <Login />
  },
  {
    path: '/settings',
    component: <Settings />
  }
];
