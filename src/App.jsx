// import { Routes, Route } from 'react-router-dom';
// import Header from './views/Header/Header';
// import Footer from './views/Footer/Footer';
// import routes from './routes';

import { useState, useEffect } from 'react';
import UserInterface from './views/UserInterface/UserInterface';
import AdminInterface from './views/AdminInterface/AdminInterface';

const App = () => {
  // Example: Use state to track the user's role
  const [userRole, setUserRole] = useState('user'); // 'user' or 'admin'

  useEffect(() => {
    // Check the URL path and set userRole accordingly
    if (window.location.pathname === '/admin-page') {
      setUserRole('admin');
    } else {
      setUserRole('user');
    }
  }, []);

  return (
    <div>
      {/* You may remove the buttons since userRole is now determined by the URL path */}
      {/* <button onClick={() => setUserRole('user')}>Switch to User Interface</button>
    <button onClick={() => setUserRole('admin')}>Switch to Admin Interface</button> */}

      {userRole === 'user' ? <UserInterface /> : <AdminInterface />}
    </div>
  );
};

export default App;
