import { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import Pic1 from "./../../assets/Toner.jpg";
import { Link } from 'react-router-dom';
import './Cart.css';
import axios from './../../axios';
import swal from "sweetalert2";

const Cart = () => {
  const [itemCount, setItemCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [carts, setCarts] = useState([]);

  const getCarts = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/carts');
      setCarts(response.data.data);
      setItemCount(response.data.data.length);

      console.log(response);
    } catch (error) {
      console.error('failed', error);
    }
  };

  useEffect(() => {
    // When the component mounts, load categories
    calculateTotalPrice();

    getCarts();
  }, []);

  const calculateTotalPrice = () => {
    let totals = 0;
    const total = carts.map((item) => {
      totals = totals + parseFloat(item.total_price);
    });
    setTotalPrice(totals);
  };
  const incrementQuantity = async (item) => {
    try {
      let quantity = item.quantity + 1;
      const response = await axios.put(
        `http://localhost:8000/api/carts/${item.id}`,
        { quantity }
      );

      const updatedCarts = carts.map((cartItem) => {
        if (cartItem.id === item.id) {
          return {
            ...cartItem,
            quantity: quantity,
            total_price: response.data.data.total_price.toFixed(2),
          };
        }
        return cartItem;
      });

      setCarts(updatedCarts);
    } catch (error) {
      console.error('failed', error);
    }
  };

  const decrementQuantity = async (item) => {
    // calculateTotalPrice();

    try {
      let quantity = item.quantity - 1;
      const response = await axios.put(
        `http://localhost:8000/api/carts/${item.id}`,
        { quantity }
      );
      const updatedCarts = carts.map((cartItem) => {
        if (cartItem.id === item.id) {
          return {
            ...cartItem,
            quantity: quantity,
            total_price: response.data.data.total_price.toFixed(2),
          };
        }
        return cartItem;
      });
      setCarts(updatedCarts);
    } catch (error) {
      console.error('failed', error);
    }
  };
  const removeFromCart = async (item) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/carts/${item.id}`
      );
      const updatedCarts = carts.filter((cartItem) => cartItem.id !== item.id);
      setItemCount(updatedCarts.length);
      setCarts(updatedCarts);
      swal.fire({
        position: "top-end",
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500
      });
    } catch (error) {
      console.error('failed', error);
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
                  <h6>{itemCount} Items</h6>
                </Col>
                <hr></hr>
              </Row>
              {carts.map((item) => (
                <Row key={item.id} className="cart-left-container mt-3">
                  <Col id="cart-img">
                    <p>PRODUCT DETAILS</p>
                    <div className="product-info-container">
                      <img
                        src={`/src/assets/${item.product.image}`}
                        alt={item.product.name}
                      />
                      <Col className="product-content" xl={6}>
                        <p style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
                          {item.product.name}
                        </p>
                        <p>Category: {item.product.category.name}</p>
                        <p>
                          {'Targets: '}
                          <span style={{ color: 'black' }}>
                            {item.product.target}
                          </span>
                        </p>
                        <p
                          style={{ color: 'gray', cursor: 'pointer' }}
                          onClick={() => removeFromCart(item)}
                        >
                          Remove
                        </p>
                      </Col>
                    </div>
                  </Col>
                  <Col xl={2}>
                    <p>QUANTITY</p>
                    <div className="quantity-controls">
                      <button
                        className="quantity-button me-2"
                        onClick={() => decrementQuantity(item)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="quantity-button mx-2"
                        onClick={() => incrementQuantity(item)}
                      >
                        +
                      </button>
                    </div>
                  </Col>
                  <Col xl={2}>
                    <p>PRICE</p>
                    <h6 style={{ marginTop: '3rem' }}>{item.price}</h6>
                  </Col>
                  <Col xl={2}>
                    <p>TOTAL</p>
                    <h6 style={{ marginTop: '3rem' }}>{item.total_price}</h6>
                  </Col>
                </Row>
              ))}

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
                  <p>ITEMS {itemCount}</p>
                  <p>₱{totalPrice}</p>
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
                    Link
                    as={Link}
                    to="/Checkout"
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
