import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Pic1 from './../../assets/Toner.jpg';
import './Cart.css';

const Cart = () => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Container>
      <section id="cart-container">
        <Row>
          <Col md={8}>
            <div id="cart-left-container">
              <Row className="cart-left-content" lg={8} xl={8}>
                <Col>
                  <h6>Shopping Cart</h6>
                </Col>
                <Col>
                  <h6>3 Items</h6>
                </Col>
                <hr></hr>
              </Row>
              <Row className="cart-left-container mt-3">
                <Col id="cart-img">
                  <p>PRODUCT DETAILS</p>
                  <div className="product-info-container">
                    <img src={Pic1} alt="Hyaluronic Acid 2% + B5" />
                    <Col className="product-content" xl={6}>
                      <p style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
                        The Ordinary Hyaluronic Acid 2% + B5
                      </p>
                      <p style={{ color: 'red' }}>Dryness</p>
                      <p style={{ color: 'gray' }}>Remove</p>
                    </Col>
                  </div>
                </Col>
                <Col xl={2}>
                  <p>QUANTITY</p>
                  <div className="quantity-controls">
                    <button
                      className="quantity-button me-2"
                      onClick={decrementQuantity}
                    >
                      -
                    </button>
                    <span>{quantity}</span>
                    <button
                      className="quantity-button mx-2"
                      onClick={incrementQuantity}
                    >
                      +
                    </button>
                  </div>
                </Col>
                <Col xl={2}>
                  <p>PRICE</p>
                  <h6 style={{ marginTop: '3rem' }}>P1,000</h6>
                </Col>
                <Col xl={2}>
                  <p>TOTAL</p>
                  <h6 style={{ marginTop: '3rem' }}>P1,000</h6>
                </Col>
              </Row>
              {/* You can repeat the product details section for additional items */}
            </div>
          </Col>
          <Col md={4} style={{ backgroundColor: 'rgb(245, 245, 245' }}>
            <section id="cart-right-container">
              <Row id="cart-right-content" lg={4} xl={4}>
                <Col className="w-100">
                  <h6>Order Summary</h6>
                </Col>
                <hr className="w-100"></hr>
                <Col className="d-flex justify-content-between w-100">
                  <p>ITEMS 3</p>
                  <p>P1000</p>
                </Col>
                <Col>
                  <p>SHIPPING</p>

                  <Form.Select
                    aria-label="Default select example"
                    id="cart-select"
                  >
                    <option value="1">Standard Deliver - P100</option>
                    <option value="2">Fast Deliver - P300</option>
                  </Form.Select>
                </Col>
                <Col className="w-100">
                  <p>PROMO CODE</p>
                  <Form.Control
                    type="text"
                    placeholder="Normal text"
                    id="cart-select"
                  />
                  <Button type="submit" id="cart-button">
                    APPLY
                  </Button>
                  <br />
                </Col>

                <hr className="w-100"></hr>
                <Col className="d-flex justify-content-between w-100">
                  <h6>TOTAL COST</h6>
                  <h6>P1000</h6>
                </Col>
                <Col className="w-100 d-flex justify-content-center">
                  <Button
                    type="submit"
                    className="w-100 mb-5 mt-5"
                    id="cart-button"
                  >
                    CHECKOUT
                  </Button>
                </Col>
              </Row>
            </section>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Cart;
