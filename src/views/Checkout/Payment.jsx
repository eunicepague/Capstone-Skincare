// import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  FloatingLabel,
  Accordion,
  Dropdown,
} from 'react-bootstrap';

import Check from './../../assets/check.png';
import stepTwo from './../../assets/checkout-2blk.png';
import stepThreeGray from './../../assets/checkout-3gray.png';
import Paypal from './../../assets/paypal.png';
import Visa from './../../assets/visa.png';
import Gcash from './../../assets/gcash.png';
import Mastercard from './../../assets/mastercard.png';
import './Payment.css';

const Payment = () => {
  const [validated, setValidated] = useState(false);
  const [selectedAccordion, setSelectedAccordion] = useState(null); // Track the selected accordion item
  const [selectedItem, setSelectedItem] = useState('Select a Bank');
  const formRef = useRef(null);

  const handleItemClick = (itemText, eventKey) => {
    setSelectedItem(itemText);
    setSelectedAccordion(eventKey);
  };

  const handleAccordionChange = (eventKey) => {
    setSelectedAccordion(eventKey);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedAccordion === null) {
      // If no accordion is selected, display an alert or perform error handling
      alert('Please select a payment method.');
      return;
    }

    if (selectedAccordion === '2') {
      if (formRef.current) {
        // Access the form using the ref
        if (formRef.current.checkValidity()) {
          // Check if the form is valid
          alert('Form submitted successfully!');
        } else {
          alert('Please fill in the required card information.');
        }
      }
    } else {
      alert('Form submitted successfully!');
    }

    setValidated(true);
  };
  return (
    <Container id="payment-container">
      <div id="payment-content">
        <h3 style={{ textAlign: 'center', marginTop: '2rem' }}>PAYMENT</h3>
        <Container>
          <div id="payment-steps">
            <Row>
              <Col
                className="d-flex align-items-center mx-auto"
                sm={6}
                md={4}
                lg={4}
              >
                <img src={Check} alt="Step One" />
                <p style={{ fontWeight: '700' }}>Shipping address</p>
                <hr style={{ width: '3rem' }} className="d-none d-md-flex" />
              </Col>
              <Col
                className="d-flex align-items-center mx-auto"
                sm={6}
                md={4}
                lg={4}
              >
                <img src={stepTwo} alt="Step Two" />
                <p style={{ fontWeight: '700' }}>Payment details</p>
                <hr style={{ width: '3rem' }} className="d-none d-md-flex" />
              </Col>
              <Col
                className="d-flex align-items-center mx-auto"
                sm={6}
                md={4}
                lg={4}
              >
                <img src={stepThreeGray} alt="Step Three" />
                <p>Review your order</p>
              </Col>
            </Row>
          </div>
        </Container>

        <Container>
          <h5 className="mt-5 mb-4">Payment Methods</h5>

          {/* LIST OF PAYMENTS */}
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            ref={formRef}
          >
            <Accordion onSelect={handleAccordionChange}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <div>
                    <Form.Check
                      type="radio"
                      name="payment-method"
                      className="d-flex justify-content-center align-items-center"
                      id="credit-card"
                      label={
                        <div className="d-flex justify-content-center align-items-center mx-3">
                          <span className="d-flex">
                            <img
                              src={Paypal}
                              style={{ width: '100px' }}
                              className="mx-3"
                            />
                            <img
                              src={Visa}
                              style={{ width: '50px' }}
                              alt="Visa"
                            />
                            <img
                              src={Mastercard}
                              style={{ width: '50px' }}
                              alt="Mastercard"
                            />
                          </span>
                        </div>
                      }
                    />
                  </div>
                </Accordion.Header>
              </Accordion.Item>
            </Accordion>
            {/* ------------GCASH------------ */}

            <Accordion onSelect={handleAccordionChange}>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <div>
                    <Form.Check
                      type="radio"
                      name="payment-method"
                      className="d-flex justify-content-center align-items-center"
                      id="credit-card"
                      label={
                        <div className="d-flex justify-content-center align-items-center mx-3">
                          <span className="d-flex">
                            <img
                              src={Gcash}
                              style={{ width: '100px' }}
                              className="mx-3"
                            />
                          </span>
                        </div>
                      }
                    />
                  </div>
                </Accordion.Header>
              </Accordion.Item>
            </Accordion>

            {/* ------------CREDIT CARD/DEBIT CARD------------ */}
            <Accordion onSelect={handleAccordionChange}>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <div>
                    <Form.Check
                      type="radio"
                      name="payment-method"
                      className="d-flex justify-content-center align-items-center"
                      id="credit-card"
                      label={
                        <div className="d-flex justify-content-center align-items-center mx-3">
                          Credit Card/Debit Card
                          <span className="d-flex">
                            <img
                              src={Visa}
                              style={{ width: '50px' }}
                              alt="Visa"
                            />
                            <img
                              src={Mastercard}
                              style={{ width: '50px' }}
                              alt="Mastercard"
                            />
                          </span>
                        </div>
                      }
                    />
                  </div>
                </Accordion.Header>

                <Accordion.Body>
                  <Container>
                    <Row>
                      <Col>
                        <FloatingLabel
                          controlId="floatingcardNumber"
                          label="Card Number"
                          className="mb-3"
                        >
                          <Form.Control type="text" required />
                        </FloatingLabel>
                      </Col>
                      <Col>
                        <FloatingLabel
                          controlId="floatingcardName"
                          label="Name on card"
                        >
                          <Form.Control type="text" required />
                        </FloatingLabel>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <FloatingLabel
                          controlId="floatingexpirationDate"
                          label="Expiration Date (MM / YY)"
                          className="mb-3"
                        >
                          <Form.Control type="text" required />
                        </FloatingLabel>
                      </Col>
                      <Col>
                        <FloatingLabel controlId="floatingCVV" label="CVV">
                          <Form.Control type="number" required />
                        </FloatingLabel>
                      </Col>
                    </Row>
                  </Container>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            {/* ------------BANK TRANSFER------------ */}
            <Accordion onSelect={handleAccordionChange} className="mb-5">
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <div>
                    <Form.Check
                      type="radio"
                      name="payment-method"
                      className="d-flex justify-content-center align-items-center"
                      id="credit-card"
                      label={<div className="mx-3">Bank Transfer</div>}
                    />
                  </div>
                </Accordion.Header>

                <Accordion.Body>
                  <Container>
                    <Dropdown autoClose="inside">
                      <Dropdown.Toggle
                        id="dropdown-autoclose-inside"
                        className="w-100 d-flex align-items-center"
                      >
                        {selectedItem}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item
                          eventKey="1"
                          onClick={() => handleItemClick('ICICI Bank')}
                        >
                          ICICI Bank
                        </Dropdown.Item>
                        <Dropdown.Divider />

                        <Dropdown.Item
                          eventKey="2"
                          onClick={() => handleItemClick('DBS Bank')}
                        >
                          DBS Bank
                        </Dropdown.Item>
                        <Dropdown.Divider />

                        <Dropdown.Item
                          eventKey="3"
                          onClick={() => handleItemClick('HSBC Bank')}
                        >
                          HSBC Bank
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Container>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <div className="mt-4 d-flex align-items-end justify-content-end">
              <Link to="/Checkout">
                <button id="payment-backButton">Back</button>
              </Link>
              <button onClick={handleSubmit} id="payment-button">
                Confirm Selection
              </button>
            </div>
          </Form>
        </Container>
      </div>
    </Container>
  );
};

export default Payment;
