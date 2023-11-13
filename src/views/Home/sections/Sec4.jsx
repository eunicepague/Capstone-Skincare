// import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import Logo from './../../../assets/about-logo.jpg';
import Shop from './../../../assets/about-shop.jpg';
import './Sec4.css';

const Sec4 = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section id="sec4-container">
      <Container id="sec4-content">
        <Row>
          <h1>ABOUT THE ORDINARY.</h1>
          <Nav.Link as={Link} to="/about" onClick={scrollToTop}>
            <h5>READ MORE</h5>
          </Nav.Link>

          <Col id="sec4-left" sm={12} md={6} lg={6}>
            <p style={{ whiteSpace: 'pre-line' }}>
              The ordinary is a cosmetic brand that has gained popularity for
              its approach to skincare based on transparent science and
              affordable prices. The brand is owned by a deciem, a company known
              for its innovative philosophy and high-quality products. {'\n'}{' '}
              {'\n'}One of the unique features of The Ordinary. us their
              simplified system of incredible transparency. Instead of
              mysterious names and promises, the packaging of each product shows
              the active ingredient, its concentration, and how to use it. This
              allows consumers to understand exactly what they are putting on
              their skin and how it works.
            </p>
            <img src={Shop} className="d-none d-md-flex" />
          </Col>
          <Col id="sec4-right" sm={12} md={6} lg={6}>
            <img src={Logo} />
            <p className="mt-3">
              All of this makes The Ordinary popular among those who value a
              scientific approach to skin care, effectiveness, and
              affordability.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Sec4;
