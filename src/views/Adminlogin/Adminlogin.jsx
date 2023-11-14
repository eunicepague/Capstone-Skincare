// import React from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import smallLogo from './../../assets/admin-logo.png';
import Logo from './../../assets/the-ordinary-logo-vector.png';
import './Adminlogin.css';
import { useState } from 'react';

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

  return (
    <Container>
      <section id="adminLogin-content">
        <Row>
          <Col id="adminLogin-left" sm={12} md={5} lg={5}>
            <Card>
              <div id="adminLogin-imgContainer">
                <img src={smallLogo} />
                <h4>Welcome back!</h4>
                <p>please sign in to continue</p>
              </div>

              <Card.Body>
                <Card.Text>
                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <div id="admiLogin-remember">
                      <Form.Group className="mb-3">
                        <Form.Check
                          required
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
                      Log in
                    </button>
                    <p style={{ textAlign: 'center' }}>
                      Not a member? Register Now
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
  );
};

export default Adminlogin;
