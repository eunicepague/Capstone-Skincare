import { useState, useRef, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  FloatingLabel,
  Button,
  Card,
} from 'react-bootstrap';
import stepOne from './../../assets/checkout-1blk.png';
import stepTwoGray from './../../assets/checkout-2gray.png';
import stepTwo from './../../assets/checkout-2blk.png';
import stepThreeGray from './../../assets/checkout-3gray.png';
import Check from './../../assets/check.png';

import Paypal from './../../assets/paypal.png';
import Visa from './../../assets/visa.png';
import Gcash from './../../assets/gcash.png';
import Paymaya from './../../assets/paymaya.png';
import Mastercard from './../../assets/mastercard.png';
import './Checkout.css';

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [validated, setValidated] = useState(false);
  const formRef = useRef(null);

  const [selectedPayment, setSelectedPayment] = useState('');
  const handlePaymentSelection = (event) => {
    setSelectedPayment(event.target.value);
  };

  const handleStepChange = (step, event, isBack = false) => {
    const form = formRef.current;

    if (!isBack && form.checkValidity() === false) {
      // If it's a forward movement and the form is invalid, trigger validation and stop the event
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }
      setValidated(true);
    } else {
      // Move to the next/previous step when the form is valid or it's a backward movement
      setValidated(false); // Reset validation for the next step

      // Check if the step is the last step, and if so, handle form submission
      if (step === 3 && event) {
        event.preventDefault();
        handleSubmit(event); // Handle the form submission
      } else {
        setActiveStep(step);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = formRef.current;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      setValidated(true);
      // Move to the next step when the form is valid
      handleStepChange(activeStep + 1);
    }

    // Check if a payment method is selected
    if (!selectedPayment) {
      // Display an alert if no payment method is selected
      alert('Please select a payment method.');
      return;
    } else {
      alert(`Successfully selected ${selectedPayment}`);
    }
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
    <Container id="checkout-container">
      <div id="checkout-content">
        <Container>
          {activeStep === 1 && (
            <>
              <h3 style={{ textAlign: 'center', marginTop: '2rem' }}>
                Checkout
              </h3>
              <Container>
                <div id="checkout-steps">
                  <Row>
                    <Col
                      className="d-flex align-items-center mx-auto"
                      sm={6}
                      md={4}
                      lg={4}
                    >
                      <img src={stepOne} alt="Step One" />
                      <p style={{ fontWeight: '700' }}>Shipping address</p>
                      <hr
                        style={{ width: '3rem' }}
                        className="d-none d-md-flex"
                      />
                    </Col>
                    <Col
                      className="d-flex align-items-center mx-auto"
                      sm={6}
                      md={4}
                      lg={4}
                    >
                      <img src={stepTwoGray} alt="Step Two" />
                      <p>Payment details</p>
                      <hr
                        style={{ width: '3rem' }}
                        className="d-none d-md-flex"
                      />
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
                <h5 className="mt-5 mb-4">Shipping address</h5>
                <Form
                  // noValidate
                  validated={validated}
                  onSubmit={handleSubmit}
                  ref={formRef}
                >
                  <Form.Group controlId="validationCheckout">
                    <Row>
                      <Col className="d-flex" lg={6}>
                        {/* FIRST NAME */}
                        <FloatingLabel
                          controlId="checkout-firstName"
                          label="First Name"
                          className="checkout-name"
                        >
                          <Form.Control
                            required
                            type="text"
                            pattern="[A-Za-z\s]+"
                            placeholder="first name"
                            isInvalid={validated}
                          ></Form.Control>
                        </FloatingLabel>
                      </Col>
                      <Col className="d-flex" lg={6}>
                        {/* LAST NAME */}
                        <FloatingLabel
                          controlId="checkout-lastName"
                          label="Last Name"
                          className="checkout-name"
                        >
                          <Form.Control
                            required
                            type="text"
                            pattern="[A-Za-z\s]+"
                            placeholder="last name"
                            isInvalid={validated}
                          ></Form.Control>
                        </FloatingLabel>
                      </Col>
                    </Row>

                    {/* ADDRESS ONE */}
                    <FloatingLabel
                      controlId="checkout-addressOne"
                      label="Address 1*"
                      className="checkout-name"
                    >
                      <Form.Control
                        required
                        type="text"
                        placeholder="address one"
                        isInvalid={validated}
                      ></Form.Control>
                    </FloatingLabel>

                    {/* ADDRESS TWO */}
                    <FloatingLabel
                      controlId="checkout-addressTwo"
                      label="Address 2*"
                      className="checkout-name"
                    >
                      <Form.Control
                        required
                        type="text"
                        placeholder="address two"
                        isInvalid={validated}
                      ></Form.Control>
                    </FloatingLabel>

                    {/* -----------CITY AND ZIP CODE----------- */}
                    <Row>
                      <Col className="d-flex" lg={6}>
                        {/* CITY */}
                        <FloatingLabel
                          controlId="checkout-city"
                          label="City"
                          className="checkout-name"
                        >
                          <Form.Control
                            required
                            type="text"
                            pattern="[A-Za-z\s]+"
                            placeholder="city"
                            isInvalid={validated}
                          ></Form.Control>
                        </FloatingLabel>
                      </Col>

                      <Col className="d-flex" lg={6}>
                        {/* ZIP CODE */}
                        <FloatingLabel
                          controlId="checkout-zipCode"
                          label="Zip Code"
                          className="checkout-name"
                        >
                          <Form.Control
                            required
                            type="number"
                            placeholder="zip code"
                          ></Form.Control>
                        </FloatingLabel>
                      </Col>
                    </Row>

                    {['checkbox'].map((type) => (
                      <div key={`default-${type}`} className="mb-3">
                        <Form.Check // prettier-ignore
                          type={type}
                          id={`default-${type}`}
                          label={`Use this address for payment details `}
                        />
                      </div>
                    ))}
                  </Form.Group>
                </Form>
                <div className="d-flex justify-content-end">
                  {/* Change the onClick to move to the next step */}
                  <Button
                    type="submit"
                    onClick={() => handleStepChange(2)}
                    id="checkout-button"
                  >
                    Next
                  </Button>
                </div>
              </Container>
            </>
          )}

          {activeStep === 2 && (
            <>
              <h3 style={{ textAlign: 'center', marginTop: '2rem' }}>
                Checkout
              </h3>
              <Container>
                <div id="checkout-steps">
                  <Row>
                    <Col
                      className="d-flex align-items-center mx-auto"
                      sm={6}
                      md={4}
                      lg={4}
                    >
                      <img src={Check} alt="Step One" />
                      <p style={{ fontWeight: '700' }}>Shipping address</p>
                      <hr
                        style={{ width: '3rem' }}
                        className="d-none d-md-flex"
                      />
                    </Col>
                    <Col
                      className="d-flex align-items-center mx-auto"
                      sm={6}
                      md={4}
                      lg={4}
                    >
                      <img src={stepTwo} alt="Step Two" />
                      <p style={{ fontWeight: '700' }}>Payment details</p>
                      <hr
                        style={{ width: '3rem' }}
                        className="d-none d-md-flex"
                      />
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
                <h5 className="mt-5 mb-4">Payment details</h5>
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
                </Form>
                <div className="d-flex justify-content-end">
                  <Button
                    onClick={(event) => handleStepChange(1, event, true)}
                    className="mr-2"
                    id="payment-backButton"
                  >
                    Back
                  </Button>

                  <Button
                    type="submit"
                    onClick={(event) =>
                      selectedPayment
                        ? handleStepChange(3, event)
                        : alert('Please select a payment method')
                    }
                    id="checkout-button"
                  >
                    Next
                  </Button>
                </div>
              </Container>
            </>
          )}

          {activeStep === 3 && (
            <Container>
              <h5 className="mt-5 mb-4">Review your order</h5>
              {/* ... (your order review content) */}
              <div className="d-flex justify-content-end">
                {/* You might want to provide a way to go back to previous steps */}
                <Button
                  onClick={(event) => handleStepChange(2, event, true)}
                  className="mr-2"
                  id="payment-backButton"
                >
                  Back
                </Button>
                {/* You can handle the final step or order confirmation here */}
                <Button
                  onClick={() => alert('Order confirmed!')}
                  id="checkout-button"
                >
                  Confirm Order
                </Button>
              </div>
            </Container>
          )}
        </Container>
      </div>
    </Container>
  );
};

export default Checkout;
