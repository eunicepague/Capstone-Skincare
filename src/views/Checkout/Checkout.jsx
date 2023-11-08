import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Form,
  FloatingLabel,
  Button,
} from 'react-bootstrap';
import stepOne from './../../assets/checkout-1blk.png';
import stepTwoGray from './../../assets/checkout-2gray.png';
import stepThreeGray from './../../assets/checkout-3gray.png';
// import Payment from './Payment';
import './Checkout.css';

const Checkout = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Container id="checkout-container">
      <div id="checkout-content">
        <h3 style={{ textAlign: 'center', marginTop: '2rem' }}>Checkout</h3>
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
                <hr style={{ width: '3rem' }} className="d-none d-md-flex" />
              </Col>
              <Col
                className="d-flex align-items-center mx-auto"
                sm={6}
                md={4}
                lg={4}
              >
                <img src={stepTwoGray} alt="Step Two" />
                <p>Payment details</p>
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
          <h5 className="mt-5 mb-4">Shipping address</h5>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
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
            <div className="d-flex justify-content-end">
              <Link to="/Payment">
                <Button type="button" id="checkout-button">
                  Next
                </Button>
              </Link>
            </div>
          </Form>
        </Container>
      </div>
    </Container>
  );
};

export default Checkout;
