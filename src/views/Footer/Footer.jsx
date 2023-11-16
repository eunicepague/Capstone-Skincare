import { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  OverlayTrigger,
  Tooltip,
  Accordion,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from './../../assets/the-ordinary-logo-vector.png';
import './Footer.css';

const Footer = () => {
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 992) {
        setIsMediumScreen(true);
      } else {
        setIsMediumScreen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer>
      <hr></hr>
      <Container>
        <section id="footer-content">
          <Row className="mt-5">
            <Col md={12} lg={4} className="d-none d-lg-flex" id="footer-img">
              <img src={Logo}></img>
            </Col>
            <Col md={12} lg={4} className={isMediumScreen ? 'order-third' : ''}>
              {isMediumScreen ? (
                <Accordion flush className="mt-2">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <h6>Company</h6>
                    </Accordion.Header>
                    <Accordion.Body>
                      <nav id="footer-nav">
                        <ul>
                          <li>
                            <Link to="/about" onClick={scrollToTop}>
                              About Us
                            </Link>
                          </li>
                          <li>
                            <Link to="/register">Join Us</Link>
                          </li>
                          <li>
                            <Link to="/transparency">
                              Transparency in Supply Chains
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    </Accordion.Body>
                    <Accordion.Header>
                      <h6>Customer Care</h6>
                    </Accordion.Header>
                    <Accordion.Body>
                      <nav id="footer-nav">
                        <ul>
                          <li>
                            <Link to="/faqs" onClick={scrollToTop}>
                              FAQ
                            </Link>
                          </li>
                          <li>
                            <Link to="/disposal" onClick={scrollToTop}>
                              Disposal Instructions
                            </Link>
                          </li>
                          <li>
                            <Link to="/return-policy" onClick={scrollToTop}>
                              Return Policy
                            </Link>
                          </li>
                          <li>
                            <Link to="/">Promition Terms & Conditions</Link>
                          </li>
                        </ul>
                      </nav>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              ) : (
                <>
                  <div id="footer-second">
                    <nav id="footer-nav">
                      <h6>Company</h6>
                      <ul>
                        <li>
                          <Link to="/about" onClick={scrollToTop}>
                            About Us
                          </Link>
                        </li>
                        <li>
                          <Link to="/register" onClick={scrollToTop}>
                            Join Us
                          </Link>
                        </li>
                        <li>
                          <Link to="/transparency" onClick={scrollToTop}>
                            Transparency in Supply Chains
                          </Link>
                        </li>
                      </ul>
                      <h6 className="mt-3">Customer Care</h6>
                      <nav id="footer-nav">
                        <ul>
                          <li>
                            <Link to="/faqs" onClick={scrollToTop}>
                              FAQ
                            </Link>
                          </li>
                          <li>
                            <Link to="/disposal" onClick={scrollToTop}>
                              Disposal Instructions
                            </Link>
                          </li>
                          <li>
                            <Link to="/return-policy" onClick={scrollToTop}>
                              Return Policy
                            </Link>
                          </li>
                          <li>
                            <Link to="/">Promition Terms & Conditions</Link>
                          </li>
                        </ul>
                      </nav>
                    </nav>
                  </div>
                </>
              )}
            </Col>
            {/* NEXT  */}

            <Col md={12} lg={4} className={isMediumScreen ? 'order-first' : ''}>
              <h6>Stay in Touch.</h6>
              <Form.Group
                as={Col}
                md="10"
                className="mb-3 mt-2"
                controlId="validationCustomEmail"
              >
                <OverlayTrigger
                  placement="right"
                  overlay={
                    <Tooltip id="tooltip-username">
                      Please enter a valid email address.
                    </Tooltip>
                  }
                >
                  <Form.Control
                    style={{ margin: '0' }}
                    type="email"
                    placeholder="Email"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                </OverlayTrigger>
                <Button type="submit" className="mb-3 w-100" id="footer-button">
                  SUBMIT
                </Button>
              </Form.Group>
              <p style={{ fontSize: '0.6rem', width: '85%' }}>
                *By checking the above box you are agreeing to receive email
                communications from DECIEM Inc., it affiliates, brands (The
                Ordinary and NIOD) and/or marketing partners. This can be
                changed at any time. Please refer to our Privacy Policy and
                Terms of Use for more details or Contact Us
              </p>

              <Link
                to="https://www.facebook.com/theordinary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <box-icon
                  style={{ marginRight: '1rem', cursor: 'pointer' }}
                  type="logo"
                  name="facebook-circle"
                ></box-icon>
              </Link>

              <Link
                to="https://www.instagram.com/theordinary/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <box-icon
                  style={{ marginRight: '1rem', cursor: 'pointer' }}
                  name="instagram"
                  type="logo"
                ></box-icon>
              </Link>

              <Link
                to="https://www.youtube.com/deciem"
                target="_blank"
                rel="noopener noreferrer"
              >
                <box-icon
                  style={{ marginRight: '1rem', cursor: 'pointer' }}
                  name="youtube"
                  type="logo"
                ></box-icon>
              </Link>

              <Link
                to="https://twitter.com/theordinary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <box-icon
                  style={{ marginRight: '1rem', cursor: 'pointer' }}
                  name="twitter"
                  type="logo"
                ></box-icon>
              </Link>
            </Col>
          </Row>
        </section>

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
      </Container>
    </footer>
  );
};

export default Footer;
