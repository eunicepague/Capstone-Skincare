// import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
// import { Link } from 'react-router-dom';
import "./Account.css";
import { useEffect, useState } from "react";
import axios from "./../../axios";
import { useNavigate, Link } from "react-router-dom";

const Account = () => {
  const [user, setUser] = useState({});

  const userLogged = async () => {
    await axios
      .get("/authUser")
      .then((res) => {
        setUser(res.data.user);
      })
      .catch((err) => {
        setUser({});
      });
  };
  useEffect(() => {
    // Call userLogged when the component mounts
    userLogged();
  }, []);

  return (
    <Container id="account-container">
      <section id="account-content">
        <Row id="account-left">
          <Col lg={6} xl={6} className="w-100">
            <h1>Hello,</h1>
            <h1 style={{ textTransform: "uppercase" }}>
              {" "}
              {user.username} :-{")"}
            </h1>
            <p className="mt-5">PROFILE</p>
            <Link style={{ textDecoration: "none", color: 'black',  }} as={Link} to="/order">
            <p>ORDERS</p>
            </Link>
          </Col>
        </Row>

        <Row id="account-right">
          <Col lg={6} xl={6} className="w-100">
            <hr className="w-100"></hr>
            <h6 className="mb-5">PROFILE</h6>
            <Col id="account-right-p">
              <p style={{ textTransform: "uppercase" }}>{user.name}</p>
              <p className="account-edit">edit</p>
            </Col>
            <Col id="account-right-p">
              <p>{user.email}</p>
              <p className="account-edit">edit</p>
            </Col>
            <Col id="account-right-p">
              <p>{user.address}</p>
              <p className="account-edit">edit</p>
            </Col>
            <Col id="account-right-p">
              <p>{user.phone}</p>
              <p className="account-edit">edit</p>
            </Col>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Account;
