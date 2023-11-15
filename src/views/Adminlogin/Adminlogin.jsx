// import React from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import smallLogo from './../../assets/admin-logo.png';
import Logo from './../../assets/the-ordinary-logo-vector-blk.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Adminlogin.css';

const Adminlogin = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div id="adminLogin-container">
      <Container>
        <section id="adminLogin-content">
          <Row>
            <Col id="adminLogin-left" sm={12} md={5} lg={5}>
              <Card>
                <div id="adminLogin-imgContainer">
                  <img src={smallLogo} />
                  <h4 style={{ fontWeight: 'bold' }}>Welcome back!</h4>
                  <p>Please Sign In to continue</p>
                </div>

                <Card.Body>
                  <Card.Text>
                    <Form
                      noValidate
                      validated={validated}
                      onSubmit={handleSubmit}
                    >
                      <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label style={{ fontWeight: 'bold' }}>
                          Email
                        </Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          required
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formGroupPassword"
                      >
                        <Form.Label style={{ fontWeight: 'bold' }}>
                          Password
                        </Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          required
                        />
                      </Form.Group>

                      <div id="admiLogin-remember">
                        <Form.Group className="mb-3">
                          <Form.Check
                            label="Remember me"
                            feedbackType="valid"
                          />
                        </Form.Group>
                        <span
                          className="forgot-password"
                          style={{ color: 'rgb(173, 1, 1)' }}
                        >
                          Forgot Password
                        </span>
                      </div>
                      <button id="admiLogin-btn" type="submit">
                        Login
                      </button>
                      <p style={{ textAlign: 'center' }}>
                        Not a member?
                        <Link to="/admin-register" onClick={scrollToTop}>
                          Register Now
                        </Link>
                      </p>
                    </Form>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col id="adminLogin-right" sm={12} md={7} lg={7}>
              <div id="adminLogin-rightContainer">
                <img src={Logo} />
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
};

export default Adminlogin;
