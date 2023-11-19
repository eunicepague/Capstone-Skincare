// import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Sec3.css';
import { Fade } from 'react-awesome-reveal';

const Sec3 = () => {
  return (
    <Container>
      <section id="sec3-content">
        <Fade>
          <h1>Patch-Testing and How to Incorporate New Products</h1>
          <Row>
            <Col id="sec3-whole">
              <p style={{ textIndent: '90px', marginBottom: '4rem' }}>
                Before introducing any new skincare products into your regimen,
                including The Ordinary, patch testing is always recommended.
                Patch testing can be a way to help ensure that your skin is
                compatible with the new products before fully incorporating them
                into your routine. Check out our step-by-step guide on how to
                perform a patch test. {'\n'}
                {'\n'}
                Patch-testing is not fool-proof, and you can still experience a
                reaction, but there are some additional steps to try and ensure
                you have the best chance for success with your new products.
              </p>

              <ol>
                <li>
                  <b>Start gradually:</b> So you bought a new set of products.
                  You’re excited (we are too!) but the key is to go slow.
                  Incorporate one new product at a time into your regimen. This
                  approach allows you to monitor how your skin responds to each
                  addition, and if there’s something it doesn’t like you can
                  better identify which product it may be.
                </li>
                <li>
                  <b>Frequency:</b> We’ve got a theme going on here - go slow.
                  With new products, your skin has to adjust. Incorporating a
                  new product every other day and building up daily or twice
                  daily use will allow your skin to become accustomed to it.
                </li>
                <li>
                  <b>Adjust as Needed:</b>We could give you all the tips in the
                  world, but only you know your skin best. If you feel
                  discomfort or like something just isn’t working, it’s okay to
                  take a break or to stop altogether.
                </li>
              </ol>
            </Col>
          </Row>
        </Fade>
      </section>
    </Container>
  );
};

export default Sec3;
