// import React from 'react'
import Home from './views/Home/Home';
import Loginmain from './views/Login/Loginmain';
const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Loginmain />,
  },
];

export default routes;
