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
import Single from './views/Products/SingleProduct/Single';

import Transparency from './views/Footer/sections/Transparency';
import Faqs from './views/Faqs/Faqs';
import Disposal from './views/Footer/sections/Disposal';
import Return from './views/Footer/sections/Return';
import Promotion from './views/Footer/sections/Promotion';

// admin
import Admin from './views/Admin/Admin';
import AdminFooter from './views/Footer/adminFooter';

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
    element: <Single />,
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
    path: '/faqs',
    element: <Faqs />,
  },
  {
    path: '/transparency',
    element: <Transparency />,
  },
  {
    path: '/disposal',
    element: <Disposal />,
  },
  {
    path: '/return-policy',
    element: <Return />,
  },
  {
    path: '/promotional-offer-terms',
    element: <Promotion />,
  },
  {
    path: '/admin-page',
    element: <Admin />,
  },
  {
    path: '/admin-footer',
    element: <AdminFooter />,
  },
];

export default routes;
