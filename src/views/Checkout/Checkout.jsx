import { useState, useRef } from 'react';
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
import stepThree from './../../assets/checkout-3blk.png';
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

  // State for form data for activestep1
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    addressOne: '',
    addressTwo: '',
    city: '',
    zipCode: '',
  });

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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
                            isInvalid={validated}
                            placeholder="first name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
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
                            isInvalid={validated}
                            placeholder="last name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
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
                        name="addressOne"
                        value={formData.addressOne}
                        onChange={handleInputChange}
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
                        name="addressTwo"
                        value={formData.addressTwo}
                        onChange={handleInputChange}
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
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
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
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleInputChange}
                          ></Form.Control>
                        </FloatingLabel>
                      </Col>
                    </Row>
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
                      <img src={Check} alt="Step Two" />
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
                      <img src={stepThree} alt="Step Three" />
                      <p style={{ fontWeight: '700' }}>Review your order</p>
                    </Col>
                  </Row>
                </div>
              </Container>
              <Container>
                <h5 className="mt-5 mb-4">Order Summary</h5>
                <div>
                  <Row>
                    <Col className="d-flex justify-content-between mb-3">
                      <h6>Product Name Data goes here</h6>
                      <h6>Price Data Goes here</h6>
                    </Col>
                  </Row>
                  <Row className="mt-5">
                    <Col id="review-checkout-shipping">
                      <h5>Shipping</h5>
                      <p>Name Data goes here</p>
                      <p>Adress 1 Data goes here</p>
                      <p>Zip Code Data goes here</p>
                    </Col>
                    <Col>
                      <h5>Payment Details</h5>
                      <p>Payment Data goes here</p>
                    </Col>
                  </Row>
                </div>

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
            </>
          )}
        </Container>
      </div>
    </Container>
  );
};

export default Checkout;
