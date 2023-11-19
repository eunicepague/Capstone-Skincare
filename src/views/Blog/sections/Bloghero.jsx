// import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Bloghero.css';
import { Slide, Fade } from 'react-awesome-reveal';

const Bloghero = () => {
  return (
    <>
      <Container id="bloghero-container">
        <section id="blog-hero-content">
          <Row>
            <Col id="blog-hero-container">
              <Slide>
                {' '}
                <h1>A Beginner’s Guide to The Ordinary</h1>
              </Slide>
              <img src="https://cdn.media.amplience.net/i/deciem/D30638-ORD-Slowvember-Web-Essentials-Blog-Img-01?fmt=auto&$poi$&sm=aspect&w=500&aspect=1:1"></img>
            </Col>
          </Row>

          <Row>
            <section id="blog-hero-p">
              <Fade>
                <p style={{ textIndent: '90px' }}>
                  Welcome to our beginner’s guide to The Ordinary. If you’re new
                  to skincare or simply curious about us, you’ve come to the
                  right place. In this guide, we’ll let you know a little bit
                  more about us, and why we do what we do before introducing you
                  to some great products if you just don’t know where to start.
                </p>
              </Fade>
            </section>
          </Row>
        </section>
      </Container>
    </>
  );
};

export default Bloghero;
