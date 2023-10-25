// import React from 'react'
import Home from './views/Home/Home';
import Loginmain from './views/Login/Loginmain';
import Registermain from './views/Register/Registermain';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Loginmain />,
  },
  {
    path: '/register',
    element: <Registermain />,
  },
];

export default routes;
