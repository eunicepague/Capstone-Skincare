// import React from 'react';
import { Container, Card, Row, Col, Table } from 'react-bootstrap';
import './Dashboard.css';
// import axios from 'axios';
import axios from "../../../axios";
import { useEffect, useState } from 'react';

const Dashboard = () => {
const [dashboard, setDashboard] = useState({})

  const getDashboard = async  () => {
    try {
      const response = await axios.get(`/dashboard`) 
      setDashboard(response.data)
      console.log(response);
    }catch (error){
      console.log(error)
    }
  }
  
  useEffect (() =>{
    getDashboard();
  })

  return (
    <Container fluid>
      <section>
        <Row id="dashboard-totals">
          <h3>Dashboard</h3>
          <Col>
            {/* total sales */}
            <Card className="dashboard-card" id="dashboardCard-one">
              <Card.Body>
                <h5>Total Sales</h5>
                <p>{dashboard.total_sale}</p>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            {/* total orders */}
            <Card className="dashboard-card" id="dashboardCard-two">
              <Card.Body>
                <h5>Total Orders</h5>
                <p>{dashboard.total_order}</p>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            {/* total products */}
            <Card className="dashboard-card" id="dashboardCard-three">
              <Card.Body>
                <h5>Total Products</h5>
                <p>{dashboard.total_products}</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* ----table---- */}
        <Row id="dashboard-orders">
          <Col className="p-0">
            <Table striped>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Client Name</th>
                  <th>Client Email</th>
                  <th>Product Cost</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Order data</td>
                  <td>Client Name data </td>
                  <td>Client Email data </td>
                  <td>Product Cost data </td>
                  <td>Status data </td>
                  <td>Date data </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Dashboard;
