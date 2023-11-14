// import React from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import smallLogo from './../../assets/admin-logo.png';
import Logo from './../../assets/the-ordinary-logo-vector.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Adminregister.css';

const Adminregister = () => {
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
    <div id="adminRegister-container">
      <Container>
        <section id="adminRegister-content">
          <Row>
            <Col id="adminRegister-right" sm={12} md={7} lg={7}>
              <div id="adminRegister-rightContainer">
                <img src={Logo} />
              </div>
            </Col>
            <Col id="adminRegister-left" sm={12} md={5} lg={5}>
              <Card id="adminRegister-card">
                <div id="adminRegister-imgContainer">
                  <img src={smallLogo} />
                  <h4 style={{ fontWeight: 'bold' }}>Create Your Account</h4>
                  <p>Please Enter Your Details</p>
                </div>

                <Card.Body>
                  <Card.Text>
                    <Form
                      noValidate
                      validated={validated}
                      onSubmit={handleSubmit}
                    >
                      <Form.Group
                        className="mb-3"
                        controlId="formGroupUsername"
                      >
                        <Form.Label style={{ fontWeight: 'bold' }}>
                          Username
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Username"
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label style={{ fontWeight: 'bold' }}>
                          Email
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formGroupPassword"
                      >
                        <Form.Label style={{ fontWeight: 'bold' }}>
                          Password
                        </Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formGroupPassword"
                      >
                        <Form.Label style={{ fontWeight: 'bold' }}>
                          Retype Password
                        </Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>

                      <div id="admiLogin-remember">
                        <Form.Group className="mb-3">
                          <Form.Check
                            required
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                            feedbackType="invalid"
                          />
                        </Form.Group>
                      </div>
                      <button id="admiLogin-btn" type="submit">
                        Sign in
                      </button>
                      <p style={{ textAlign: 'center' }}>
                        Already Have an Account?
                        <Link to="/admin-login" onClick={scrollToTop}>
                          Log In Now
                        </Link>
                      </p>
                    </Form>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
};

export default Adminregister;
