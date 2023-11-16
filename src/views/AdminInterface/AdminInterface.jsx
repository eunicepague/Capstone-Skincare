// import React from 'react'
import { Routes, Route } from 'react-router-dom';
import AdminHeader from './../Header/adminHeader';
import AdminFooter from '../Footer/adminFooter';
import routes from './../../routes';

const AdminInterface = () => {
  return (
    <>
      <AdminHeader />
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
      <AdminFooter />
    </>
  );
};

export default AdminInterface;
