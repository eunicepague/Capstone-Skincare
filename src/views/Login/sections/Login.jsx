// import React from 'react'
import { Container, Row, Col, Form, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
// import axios from "axios";
import axios from "../../../axios";

import { Slide, Fade } from "react-awesome-reveal";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("/login", {
        email,
        password,
      });
      window.localStorage.setItem("ECCOM_TOKEN", response.data.token);
      // axios.defaults.headers[
      //   "Authorization"
      // ] = `Bearer ${window.localStorage.getItem("ECOM_TOKEN")}`;
      if (response.data.user.usertype == "user") {
        window.location.href = "/";
      } else {
        window.location.href = "/admin-page";
      }
    } catch (error) {
      // Handle authentication error (e.g., show an error message to the user).
      alert("Invalid Username or Password");
      console.error("Login failed", error);
    }
  };
  return (
    <Container fluid id="login-container">
      <section id="login-content">
        <Row>
          <Col sm={12} md={6} lg={6} id="login-left">
            <Fade>
              <Card id="login-card">
                <Card.Body>
                  <h2>RETURNING CUSTOMER</h2>
                  <p>
                    First time visiting our new site? Create an account here.
                  </p>
                  <Form id="login-form">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>
                        <b>Email address</b>
                      </Form.Label>
                      <Form.Control
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Enter email"
                      />

                      <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>
                        <b>Password</b>
                      </Form.Label>
                      <Form.Control
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                  </Form>
                  <button onClick={handleLogin} id="login-button">
                    Sign-in
                  </button>
                </Card.Body>
              </Card>
            </Fade>
          </Col>
          {/*  ---------*/}
          <Col sm={12} md={6} lg={6} id="login-right">
            <section id="login-right-content">
              <Slide direction="right">
                <h2 style={{ fontWeight: " bold" }}>NEW CUSTOMERS</h2>
                <hr></hr>
                <p>
                  Set up an account so we can remember your details and speed up
                  your next visit.
                </p>
                <Link to="/register" style={{ textDecoration: "none" }}>
                  <button id="login-button">Create Account</button>
                </Link>
                <hr></hr>
                <h5
                  style={{
                    fontWeight: " bold",
                    marginTop: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  ORDER TRACKING
                </h5>
                <p>
                  Good things are on their way. Track the progress of your
                  order.
                </p>
              </Slide>
            </section>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Login;
