// import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';
import './Sec5.css';

const Sec5 = () => {
  return (
    <Container id="sec5-container">
      <section id="sec5-content">
        <Fade>
          <Row>
            <h1 className="mx-5">OUR BLOG.</h1>
            <Col id="sec5-left">
              <img src="https://johnlewis.scene7.com/is/image/JohnLewis/the-ordinarry-l-7-160222"></img>
              <p>
                All of this makes The Ordinary. poplular among those who value a
                scientific approach to skin care.
              </p>
            </Col>
            <Col id="sec5-right">
              <img src="https://blogscdn.thehut.net/app/uploads/sites/2/2021/09/0913-STDCRE-21708-LF-EJ-Deciem-Brand-Batching-Shot-031200-x-672_1631611118.jpg"></img>
              <p>
                All of this makes The Ordinary. poplular among those who value a
                scientific approach to skin care.
              </p>
            </Col>
          </Row>
        </Fade>
      </section>
    </Container>
  );
};

export default Sec5;
