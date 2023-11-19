import { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
// import Pic1 from "./../../assets/Toner.jpg";
import { Link } from 'react-router-dom';
import './Cart.css';
import axios from './../../axios';
import swal from 'sweetalert2';

const Cart = () => {
  const [itemCount, setItemCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [carts, setCarts] = useState([]);

  const getCarts = async () => {
    try {
      const response = await axios.get('/carts');
      setCarts(response.data.data);
      setItemCount(response.data.data.length);
      setTotalPrice(response.data.total_cart);

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
    // setTotalPrice(totals);
  };
  const incrementQuantity = async (item) => {
    try {
      let quantity = item.quantity + 1;
      const response = await axios.put(`/carts/${item.id}`, { quantity });

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
      const response = await axios.put(`/carts/${item.id}`, { quantity });
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
      const response = await axios.delete(`/carts/${item.id}`);
      const updatedCarts = carts.filter((cartItem) => cartItem.id !== item.id);
      setItemCount(updatedCarts.length);
      setCarts(updatedCarts);
      swal.fire({
        position: 'top-end',
        icon: 'success',
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
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
                  <h5>Shopping Cart</h5>
                </Col>
                <Col>
                  <h6>{itemCount} Items</h6>
                </Col>
                <hr></hr>
              </Row>
              {carts.map((item) => (
                <Row key={item.id} className="cart-left-container mt-3">
                  <Col id="cart-img">
                    <p>
                      <b>PRODUCT DETAILS</b>
                    </p>
                    <div className="product-info-container">
                      <img
                        src={`/products/${item.product.image}`}
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
                  <Col xl={2} className="d-flex flex-column">
                    <p>
                      <b>QUANTITY</b>
                    </p>
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
                    <p>
                      <b>PRICE</b>
                    </p>
                    <h6 style={{ marginTop: '3rem' }}>{item.price}</h6>
                  </Col>
                  <Col xl={2}>
                    <p>
                      <b>TOTAL</b>
                    </p>
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
                  <h5>Order Summary</h5>
                </Col>
                <hr className="w-100"></hr>
                <Col className="d-flex justify-content-between w-100">
                  <p className="mb-4 mt-3">
                    <b>ITEMS {itemCount}</b>
                  </p>
                  <p className="mb-4 mt-3">
                    <b> TOTAL</b>
                  </p>
                </Col>
                {carts.map((item) => (
                  <Col
                    key={item.product.id}
                    className="d-flex justify-content-between w-100"
                  >
                    <p>{item.product.name}</p>
                    <p>{item.total_price}</p>
                  </Col>
                ))}

                <hr className="w-100"></hr>
                <Col className="d-flex justify-content-between w-100">
                  <h6>
                    <b>TOTAL COST</b>
                  </h6>
                  <h6>
                    <b>₱{totalPrice}</b>
                  </h6>
                </Col>
                <Col className="w-100 d-flex justify-content-center">
                  <Button
                    type="submit"
                    className={`w-100 mb-5 mt-5 ${
                      itemCount > 0 ? '' : 'disabled'
                    }`}
                    id="cart-button"
                    Link
                    as={Link}
                    to="/checkout"
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
