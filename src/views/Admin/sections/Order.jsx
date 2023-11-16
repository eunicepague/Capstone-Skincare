// import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Order.css';

const Order = () => {
  return (
    <Container fluid>
      <section id="adminOrder-content">
        <Row>
          <h3>Orders</h3>
          <Col>
            <div className="admin-Order">
              <table id="order-table">
                <tr id="adminOrder-tableHead">
                  <th>Order Id</th>
                  <th style={{ width: '20rem' }}>Client Name</th>
                  <th style={{ width: '20rem' }}>Client Email</th>
                  <th style={{ width: '10rem' }}>Product Cost</th>
                  <th style={{ width: '10rem' }}>Status</th>
                  <th style={{ width: '10rem' }}>Date</th>
                </tr>
                <tr id="adminOrdertableBody">
                  <td>sample sample sample</td>
                  <td>sample sample sample</td>
                  <td>sample sample sample</td>
                  <td>sample sample sample</td>
                  <td>sample sample sample</td>
                  <td>sample sample sample</td>
                </tr>
              </table>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Order;
