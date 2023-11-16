// import { Routes, Route } from 'react-router-dom';
// import Header from './views/Header/Header';
// import Footer from './views/Footer/Footer';
// import routes from './routes';

import { useState, useEffect } from 'react';
import UserInterface from './views/UserInterface/UserInterface';
import AdminInterface from './views/AdminInterface/AdminInterface';

const App = () => {
  const [userRole, setUserRole] = useState('user'); // 'user' or 'admin'

  useEffect(() => {
    if (window.location.pathname === '/admin-page') {
      setUserRole('admin');
    } else {
      setUserRole('user');
    }
  }, []);

  return (
    <div>{userRole === 'user' ? <UserInterface /> : <AdminInterface />}</div>
  );
};

export default App;
