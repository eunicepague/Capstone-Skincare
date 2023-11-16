// import React from 'react'
import { Component, useEffect, useState } from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
// import Fade from 'react-reveal/Fade';

import './Sec2.css';
import axios from 'axios';

const Sec2 = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/products');
      setProducts(response.data.data);
      console.log(response);
    } catch (error) {
      console.error('Fetching products failed', error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <section id="s2-container">
        <Container id="s2-content">
          <h1 id="s2-h1">THE ORDINARY BEST SELLERS</h1>

          <div id="s2-card-container">
            <Row className="mx-auto">
              {/* Map through the products and add a key prop */}
              {products.slice(0, 4).map((item) => (
                <Col key={item.id} xs={6} sm={6} md={3} lg={3}>
                  <Card id="s2-card-box" className="mx-auto mt-3 ">
                    <Card.Img
                      id="s2-cardimg"
                      variant="top"
                      src={`/src/assets/${item.image}`}
                    />
                    <Card.Body id="s2-cardbody">
                      <Card.Text id="s2-cardtitle">
                        {item.name}
                        <Button id="s2-button">SHOP NOW</Button>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Sec2;
