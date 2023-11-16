// import React from 'react'
import { useEffect, useState } from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { Slide } from 'react-awesome-reveal';

import './Sec2.css';
// import axios from "axios";
import axios from './../../../axios';
import swal from 'sweetalert2';
const Sec2 = () => {
  const [products, setProducts] = useState([]);

  const addToCart = async (product) => {
    try {
      let quantity = 1;
      let product_id = product;
      const response = await axios.post(`/carts`, {
        quantity,
        product_id,
      });
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

  const getProducts = async () => {
    try {
      const response = await axios.get('/products');
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
                  <Slide direction="left">
                    <Card id="s2-card-box" className="mx-auto mt-3 ">
                      <Card.Img
                        id="s2-cardimg"
                        variant="top"
                        src={`/src/assets/${item.image}`}
                      />
                      <Card.Body id="s2-cardbody">
                        <Card.Text id="s2-cardtitle">
                          {item.name}
                          <Button
                            onClick={() => addToCart(item.id)}
                            id="s2-button"
                          >
                            SHOP NOW
                          </Button>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Slide>
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
