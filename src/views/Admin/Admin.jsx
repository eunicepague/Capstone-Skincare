// import React from 'react';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Logo from './../../assets/profile.png';

import Dashboard from './sections/Dashboard';
import Products from './sections/Products';
import Category from './sections/Category';
import Concern from './sections/Concern';
import Order from './sections/Order';
import './Admin.css';

const Admin = () => {
  // Use state to track the selected component
  const [selectedComponent, setSelectedComponent] = useState('dashboard');

  // Define a function to handle button clicks and update the selected component
  const handleButtonClick = (component) => {
    setSelectedComponent(component);
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
            <button onClick={() => handleButtonClick('dashboard')}>
              Dashboard
            </button>
            <button onClick={() => handleButtonClick('products')}>
              Products
            </button>
            <button onClick={() => handleButtonClick('category')}>
              Category
            </button>
            <button onClick={() => handleButtonClick('concern')}>
              Concerns
            </button>
            <button onClick={() => handleButtonClick('order')}>Orders</button>
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
