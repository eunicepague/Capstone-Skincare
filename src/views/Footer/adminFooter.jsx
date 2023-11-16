// import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
// import './adminFooter.css';

const adminFooter = () => {
  return (
    <Container>
      <section>
        <Row>
          <Col id="copyright">
            <p>
              &copy; The Ordinary. 2023. All rights reserved. Terms & Conditions{' '}
            </p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Do not sell my personal information</p>
            <p>Cookies</p>
            <p style={{ fontWeight: 'bold' }}>A NICOLE AND EUNICE PROJECT</p>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default adminFooter;
