// import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './Login.css';

const Login = () => {
  return (
    <Container id="login-mainbox">
      <Row>
        <Col lg={6} id="left-side">
          <h5 style={{ fontWeight: ' bold' }} className="mx-5">
            RETURNING CUSTOMER
          </h5>
          <p className="mx-5" style={{ fontSize: '0.9rem', marginTop: '1rem' }}>
            First time visiting our new site? Create an account here.
          </p>
          <Form id="login-form" className="mx-5">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />

              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
          </Form>
          <button id="login-button" className="mx-5">
            Sign-in
          </button>
        </Col>

        <Col lg={6} id="right-side">
          <h5 style={{ fontWeight: ' bold' }}>NEW CUSTOMERS</h5>
          <hr></hr>
          <p>
            Set up an account so we can remember your details and speed up your
            next visit.
          </p>
          <button id="login-button"> Create Account</button>
          <hr></hr>
          <h5
            style={{
              fontWeight: ' bold',
              marginTop: '1rem',
              marginBottom: '1rem',
            }}
          >
            ORDER TRACKING
          </h5>
          <p>
            Good things are on their way. Track the progress of your order.
            Track your order
          </p>
          <p id="login-track">Track your order here {'>'} </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
