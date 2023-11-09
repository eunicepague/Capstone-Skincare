// import React from 'react';
import { useState, useRef } from 'react';
import { Container, Row, Col, Form, Card } from 'react-bootstrap';

import Check from './../../assets/check.png';
import stepTwo from './../../assets/checkout-2blk.png';
import stepThreeGray from './../../assets/checkout-3gray.png';
import Paypal from './../../assets/paypal.png';
import Visa from './../../assets/visa.png';
import Gcash from './../../assets/gcash.png';
import Paymaya from './../../assets/paymaya.png';
import Mastercard from './../../assets/mastercard.png';
import './Payment.css';

const Payment = () => {
  const [selectedPayment, setSelectedPayment] = useState('');
  const formRef = useRef(null);

  const handlePaymentSelection = (event) => {
    setSelectedPayment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = formRef.current;

    // Check if a payment method is selected
    if (!selectedPayment) {
      // Display an alert if no payment method is selected
      alert('Please select a payment method.');
      return;
    } else {
      alert(`Successfully selected ${selectedPayment}`);
    }

    // Check form validity
    if (form.checkValidity()) {
      // Perform any additional actions or navigation logic here
      console.log(`Selected payment method: ${selectedPayment}`);
      // Navigate to /Review if the form is valid
      window.location.href = '/Review';
    } else {
      // Display an alert if the form is not valid
      alert('Please fill out the required fields.');
    }
  };

  const handleBack = () => {
    // Navigate to /Checkout when the "Back" button is clicked
    history.push('/Checkout');
  };

  const paymentMethods = [
    {
      id: 'Paypal',
      label: (
        <div className="d-flex justify-content-center align-items-center mx-3">
          <span className="d-flex">
            <img src={Paypal} style={{ width: '100px' }} className="mx-3" />
            <img src={Visa} style={{ width: '50px' }} alt="Visa" />
            <img src={Mastercard} style={{ width: '50px' }} alt="Mastercard" />
          </span>
        </div>
      ),
    },
    {
      id: 'Gcash',
      label: (
        <div className="d-flex justify-content-center align-items-center mx-3">
          <span className="d-flex">
            <img src={Gcash} style={{ width: '100px' }} className="mx-3" />
          </span>
        </div>
      ),
    },
    {
      id: 'Paymaya',
      label: (
        <div className="d-flex justify-content-center align-items-center mx-3">
          <span className="d-flex">
            <img src={Paymaya} style={{ width: '100px' }} className="mx-3" />
          </span>
        </div>
      ),
    },
    {
      id: 'COD',
      label: (
        <div className="d-flex justify-content-center align-items-center mx-3">
          <span className="d-flex">Cash On Delivery ( COD )</span>
        </div>
      ),
    },
  ];

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
          <Form ref={formRef} onSubmit={handleSubmit}>
            {paymentMethods.map((method) => (
              <Card key={method.id}>
                <Form.Check
                  type="radio"
                  name="payment-method"
                  className="d-flex align-items-center mx-3"
                  id={method.id}
                  value={method.id}
                  checked={selectedPayment === method.id}
                  onChange={handlePaymentSelection}
                  label={method.label}
                />
              </Card>
            ))}
            <div className="mt-4 d-flex align-items-end justify-content-end">
              <button onClick={handleBack} id="payment-backButton">
                Back
              </button>
              <button id="payment-button" type="submit">
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
