// import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Account.css';

const Account = () => {
  return (
    <Container id="account-container">
      <section id="account-content">
        <Row id="account-left">
          <Col lg={6} xl={6} className="w-100">
            <h1>Hello,</h1>
            <h1 style={{ textTransform: 'uppercase' }}>NAME HERE :-{')'}</h1>
            <p className="mt-5">PROFILE</p>
            <p>ORDERS</p>
            <p>ADDRESS BOOK</p>
            <p>PAYMENT</p>

            <button id="account-button">SIGN OUT</button>
          </Col>
        </Row>

        <Row id="account-right">
          <Col lg={6} xl={6} className="w-100">
            <hr className="w-100"></hr>
            <h6 className="mb-5">PROFILE</h6>
            <Col id="account-right-p">
              <p style={{ textTransform: 'uppercase' }}>FULL NAME GOES HERE</p>
              <p className="account-edit">edit</p>
            </Col>
            <Col id="account-right-p">
              <p>EMAIL ADDRESS GOES HERE</p>
              <p className="account-edit">edit</p>
            </Col>
            <Col id="account-right-p">
              <p className="mt-5">PASSWORD ADDRESS GOES HERE</p>
              <p className="account-edit mt-5">edit</p>
            </Col>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Account;
