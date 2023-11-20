// import React from 'react';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Logo from './../../assets/profile.png';
import Dashboard from './sections/Dashboard';
import Products from './sections/Products';
import Category from './sections/Category';
import Concern from './sections/Concern';
import Order from './sections/Order';
import User from './sections/UserList';
import './Admin.css';

const Admin = () => {
  // track the selected component
  const [selectedComponent, setSelectedComponent] = useState('dashboard');
  const [activeButton, setActiveButton] = useState('dashboard');

  // Define a function to handle button clicks and update the selected component
  const handleButtonClick = (component) => {
    setSelectedComponent(component);
    setActiveButton(component);
  };

  // Render the selected component based on the state
  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case 'dashboard':
        return <Dashboard />;
      case 'products':
        return <Products />;
      case 'category':
        return <Category />;
      case 'concern':
        return <Concern />;
      case 'order':
        return <Order />;
      case 'user':
        return <User />;
      default:
        return null;
    }
  };

  return (
    <div id="admin-container">
      <Container fluid>
        <Row>
          <Col id="admin-left" lg={2}>
            <img src={Logo}></img>
            <h2>Admin</h2>
            <p style={{ marginBottom: '2rem' }}>The Ordinary Admin</p>
            <hr></hr>
            <button
              className={activeButton === 'dashboard' ? 'active' : ''}
              onClick={() => handleButtonClick('dashboard')}
            >
              Dashboard
            </button>
            <button
              className={activeButton === 'products' ? 'active' : ''}
              onClick={() => handleButtonClick('products')}
            >
              Products
            </button>
            <button
              className={activeButton === 'category' ? 'active' : ''}
              onClick={() => handleButtonClick('category')}
            >
              Category
            </button>
            <button
              className={activeButton === 'concern' ? 'active' : ''}
              onClick={() => handleButtonClick('concern')}
            >
              Concerns
            </button>
            <button
              className={activeButton === 'order' ? 'active' : ''}
              onClick={() => handleButtonClick('order')}
            >
              Orders
            </button>
            <button
              className={activeButton === 'user' ? 'active' : ''}
              onClick={() => handleButtonClick('user')}
            >
              User List
            </button>
          </Col>
          <Col id="admin-right" lg={10}>
            {renderSelectedComponent()}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Admin;
