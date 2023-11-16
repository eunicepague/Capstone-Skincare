// import React from 'react'

import { Routes, Route } from 'react-router-dom';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import routes from './../../routes';

const UserInterface = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                element={route.element}
                exact
              />
            );
          })}
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default UserInterface;
