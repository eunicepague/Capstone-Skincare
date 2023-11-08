// import React from 'react'
import Home from './views/Home/Home';
import Footer from './views/Footer/Footer';
import Loginmain from './views/Login/Loginmain';
import Registermain from './views/Register/Registermain';
import Cart from './views/Cart/Cart';
import Account from './views/Profile/Account';
import Order from './views/Order/Order';
import Products from './views/Products/Products';
import Checkout from './views/Checkout/Checkout';
import Payment from './views/Checkout/Payment';

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
    path: '/Products',
    element: <Products />,
  },
  {
    path: '/Checkout',
    element: <Checkout />,
  },
  {
    path: '/Payment',
    element: <Payment />,
  },
];

export default routes;
