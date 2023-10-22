// import React from 'react'
import { Component } from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Product1 from './../../../assets/hyaluronic.jpg';
import Product2 from './../../../assets/niacinamide.jpg';
import Product3 from './../../../assets/toning.jpg';
import Product4 from './../../../assets/peptide.jpg';

import './Sec2.css';

class Sec2 extends Component {
  render() {
    return (
      <>
        <section id="s2-container">
          <Container id="s2-content">
            <h1 id="s2-h1">THE ORDINARY BEST SELLERS</h1>
            <Fade bottom>
              <div id="s2-card-container">
                <Row className="mx-auto">
                  {/* first card */}
                  <Col xs={6} sm={6} md={3} lg={3}>
                    <Card id="s2-card-box" className="mx-auto mt-3 ">
                      <Card.Img id="s2-cardimg" variant="top" src={Product1} />
                      <Card.Body id="s2-cardbody">
                        <Card.Text id="s2-cardtitle">
                          The Ordinary Hyaluronic Acid 2% + B5
                          <Button id="s2-button">SHOP NOW</Button>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  {/* second card */}
                  <Col xs={6} sm={6} md={3} lg={3}>
                    <Card id="s2-card-box" className="mx-auto mt-3 ">
                      <Card.Img id="s2-cardimg" variant="top" src={Product2} />
                      <Card.Body id="s2-cardbody">
                        <Card.Text id="s2-cardtitle">
                          The Ordinary Niacinamide 10% + Zinc 1%
                          <Button id="s2-button">SHOP NOW</Button>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  {/* third card */}
                  <Col xs={6} sm={6} md={3} lg={3}>
                    <Card id="s2-card-box" className="mx-auto mt-3 ">
                      <Card.Img id="s2-cardimg" variant="top" src={Product3} />
                      <Card.Body id="s2-cardbody">
                        <Card.Text id="s2-cardtitle">
                          The Ordinary Glycolic Acid 7% Toning Solution
                          <Button id="s2-button">SHOP NOW</Button>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  {/* fourth card */}
                  <Col xs={6} sm={6} md={3} lg={3}>
                    <Card id="s2-card-box" className="mx-auto mt-3 ">
                      <Card.Img id="s2-cardimg" variant="top" src={Product4} />
                      <Card.Body id="s2-cardbody">
                        <Card.Text id="s2-cardtitle">
                          The Ordinary Multi-Peptide + HA Serum
                          <Button id="s2-button">SHOP NOW</Button>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
            </Fade>
          </Container>
        </section>
      </>
    );
  }
}

export default Sec2;
