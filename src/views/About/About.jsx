// import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import aboutLogo from './../../assets/O-favicon-r.png';
import './About.css';

const About = () => {
  return (
    <Container>
      <section id="about-content">
        <Row>
          <Col sm={12} md={6} lg={6} id="about-left">
            <img src={aboutLogo}></img>
          </Col>
          <Col sm={12} md={6} lg={6} id="about-right">
            <h1>About.</h1>
            <p style={{ whiteSpace: 'pre-line' }}>
              The Ordinary is an evolving collection of treatments offering
              familiar, effective clinical technologies positioned to raise
              pricing and communication integrity in skincare. The brand was
              created to celebrate integrity in its most humble and true form.
              Its offering is pioneering, not in the familiar technologies it
              uses, but in its honesty and integrity. The Ordinary is born to
              disallow commodity to be disguised as ingenuity. The Ordinary is
              "Clinical formulations with integrity".
              {'\n'}
              {'\n'}
              The Ordinary is a brand from DECIEM. We are an umbrella of brands
              focused on advanced functional beauty. Our team is specialized in
              materials chemistry and biochemistry, and we have brought
              pioneering innovation in skincare through NIOD. In the category of
              functional beauty, integrity is rare. Commonplace technologies are
              referred to as groundbreaking and insensible pricing strategies
              confuse the audience, disguising commodity technologies as
              advanced. The Ordinary exists to communicate with integrity and
              bring to market effective, more familiar technologies at
              honourable prices. The Ordinary takes pride in honesty, fights
              innovation stagnancy in the industry and indirectly celebrates the
              depth of innovation NIOD continues to bring to the category.
              {'\n'}
              {'\n'}A Nicole and Eunice Capstone Project :{')'}
            </p>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default About;
