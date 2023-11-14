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
import Review from './views/Checkout/Review';
import About from './views/About/About';
import Status from './views/Status/Status';
import Adminlogin from './views/Adminlogin/Adminlogin';
import Adminregister from './views/Adminregister/Adminregister';

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
    path: '/products/:id',
    element: <Order />,
  },
  {
    path: '/products',
    element: <Products />,
  },
  {
    path: '/checkout',
    element: <Checkout />,
  },
  {
    path: '/payment',
    element: <Payment />,
  },
  {
    path: '/review',
    element: <Review />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/status',
    element: <Status />,
  },
  {
    path: '/admin-login',
    element: <Adminlogin />,
  },
  {
    path: '/admin-register',
    element: <Adminregister />,
  },
];

export default routes;
