// import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Slide } from 'react-awesome-reveal';
import './Sec1.css';

const Sec1 = () => {
  return (
    <Container>
      <section id="blog-sec1">
        <Row>
          <Col id="blog-sec1-left">
            <h1>What is The Ordinary?</h1>
            <Slide direction="left">
              <p style={{ textIndent: '90px' }}>
                At The Ordinary, our mission is to democratize skincare. We want
                to formulate quality and efficacious products, with integrity.
                We are a team of skincare experts and enthusiasts who seek to
                lead the way in beauty with our very own lab to produce skincare
                products that are clinically tested, vegan, and cruelty-free.
              </p>
              <p>
                Our commitment to transparency means that we provide you with
                straightforward, science-based information about our products
                and their active ingredients. We provide no-frills formulations
                that target your skin concerns at honest prices.
              </p>
            </Slide>
          </Col>
          <Col id="blog-sec1-right">
            <Slide direction="right">
              <p>
                With our ingredient-focused products, The Ordinary can help you
                build a skincare regimen customized to your specific needs.
                Whether you’re looking to target fine lines and wrinkles,
                searching for solutions for congested skin, or just an everyday
                simple routine, we’ve got you covered.
              </p>
            </Slide>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Sec1;
