import { Container, Row, Col } from "react-bootstrap";
import Cart from "./../../../assets/cart-icon.png";

import Crueltyfree from "./../../../assets/cruelty-free.png";
import Check from "./../../../assets/check.png";
import X from "./../../../assets/x.png";


import "./Single.css";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "../../../axios";

const Order = () => {
  const [product, setProduct] = useState({});
  const [isContentVisible, setContentVisibility] = useState(false);
  const [count, setCount] = useState(1);
  const { id } = useParams();
  const navigate = useNavigate();

 

  const toggleContent = () => {
    setContentVisibility(!isContentVisible);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  useEffect(() => {
    getSingle();
  }, []);

  const getSingle = async () => {
    try {
      const response = await axios.get(`/products/${id}`);
      setProduct(response.data.data);
      console.log(response);
    } catch (error) {
      console.error("failed", error);
    }
  };

  const addToCart = async () => {
    try {
      let quantity = count;
      let product_id = id;
      const response = await axios.post(`/carts`, {
        quantity,
        product_id,
      });
      navigate(`/cart`);
    } catch (error) {
      console.error("failed", error);
    }
  };

  return (
    <>
      <Container id="order-container">
        <section id="order-content">
          <Row className="w-100">
            <Col sm={12} md={12} lg={6} xl={5}>
              <section id="order-left">
                <div id="order-top-content">
                  <h2 className="mb-5">{product.name}</h2>
                  <h4 className="mb-4">{product.price}</h4>
                </div>

                {/* visible only when in small screen */}
                <section id="order-sm" className="d-md-block d-lg-none">
                  <img
                    src={`/products/${product.image}`}
                    alt={product.name}
                  />
                </section>

                <div id="order-bot-content">
                  <h6>Regimen Step 2: Treat</h6>
                  <p>{product.main_description}</p>
                  <hr></hr>
                  <h6>Targets</h6>
                  <p>{product.target != "" ? product.target : "N/A"}</p>
                  <hr></hr>
                  <h6>Suited To</h6>
                  <p>{product.suited != "" ? product.suited : "N/A"}</p>
                  <hr></hr>
                  <h6>Format</h6>
                  <p>{product.format != "" ? product.format : "N/A"}</p>
                  <hr></hr>
                  <div className="d-flex justify-content-between">
                    <h6>Key Ingredients</h6>
                    <button id="order-button" onClick={toggleContent}>
                      +
                    </button>
                  </div>
                  {isContentVisible && (
                    <p>
                      {product.ingredients != "" ? product.ingredients : "N/A"}
                    </p>
                  )}
                </div>

                <div id="order-count-container">
                  <div id="order-counter">
                    <button onClick={decrementCount}>-</button>
                    <span>{count}</span>
                    <button onClick={incrementCount}>+</button>
                  </div>

                  <div id="order-basket-container">
                    <div id="order-basket">
                      <button className="d-none d-lg-flex">
                        <img src={Cart}></img>
                        <h6 onClick={() => addToCart()}>ADD TO BASKET</h6>
                      </button>
                    </div>
                  </div>
                </div>

                {/* ICON CONTAINER */}
                <div id="order-icon-container">
                  <Row id="order-icon-content">
                    <Col id="order-icon-col">
                      <p>water-free</p>
                      <img src={X}></img>
                    </Col>
                    <Col id="order-icon-col">
                      <p>alcohol-free</p>
                      <img src={Check}></img>
                    </Col>
                    <Col id="order-icon-col">
                      <p>oil-free</p>
                      <img src={Check}></img>
                    </Col>
                    <Col id="order-icon-col">
                      <p>silicone-free</p>
                      <img src={Check}></img>
                    </Col>
                    <Col id="order-icon-col">
                      <p>vegan</p>
                      <img src={Check}></img>
                    </Col>
                    <Col id="order-icon-col">
                      <p>gluten-free</p>
                      <img src={Check}></img>
                    </Col>
                    <Col id="order-icon-col">
                      <p>cruelty-free</p>
                      <img src={Crueltyfree}></img>
                    </Col>
                  </Row>
                </div>

                {/* OVERVIEW CONTAINER */}
                <div id="order-overview-container">
                  <Row id="order-overview-content">
                    <Col sm={12} md={12} lg={6}>
                      <h2 className="mb-md-3 mb-sm-3">Overview.</h2>
                    </Col>
                    <Col sm={12} md={12} lg={6}>
                      <h5 className="mb-md-3 mb-sm-3">About.</h5>
                      <p>
                        {product.description != ""
                          ? product.description
                          : "N/A"}
                      </p>
                    </Col>
                  </Row>
                </div>
              </section>
            </Col>

            <Col sm={12} md={12} lg={6} xl={7}>
              <section id="order-right" className="mt-5">
                <img src={`/products/${product.image}`} alt={product.name} />
              </section>
            </Col>
          </Row>
        </section>
      </Container>

      {/* --------THIS IS THE ADD TO BASKET BUTTON WHEN IN SM SCREEN*/}
      <div id="sm-button">
        <button id="sm-button" className="d-lg-none sticky">
          <img src={Cart}></img>
          <h6 onClick={() => addToCart()}>ADD TO BASKET</h6>
        </button>
      </div>
    </>
  );
};

export default Order;
