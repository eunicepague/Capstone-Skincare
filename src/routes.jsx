// import React from 'react'
import Home from './views/Home/Home';
import Footer from './views/Footer/Footer';
import Loginmain from './views/Login/Loginmain';
import Registermain from './views/Register/Registermain';
import Cart from './views/Cart/Cart';
import Account from './views/Profile/Account';
import Order from './views/Order/Order';
import Category from './views/Category/Category';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/footer',
    element: <Footer />,
  },
  {
    path: '/login',
    element: <Loginmain />,
  },
  {
    path: '/register',
    element: <Registermain />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/account',
    element: <Account />,
  },
  {
    path: '/order',
    element: <Order />,
  },
  {
    path: '/ProductCategories',
    element: <Category />,
  },
];

export default routes;
