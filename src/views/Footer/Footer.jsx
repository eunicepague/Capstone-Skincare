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
import './Footer.css';

const Footer = () => {
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 992) {
        // Adjust this value for your desired medium size breakpoint
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

  return (
    <footer className="py-3">
      <hr></hr>
      <Container>
        <Row className="mt-5">
          <Col md={12} lg={3} className={isMediumScreen ? 'order-third' : ''}>
            {isMediumScreen ? (
              <Accordion className="mt-2">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h6>Company</h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    <nav id="footer-nav">
                      <ul>
                        <li>
                          <Link to="/about">About Us</Link>
                        </li>
                        <li>
                          <Link to="/register">Join Us</Link>
                        </li>
                        <li>
                          <Link to="/">Transparency in Supply Chains</Link>
                        </li>
                      </ul>
                    </nav>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            ) : (
              <>
                <h6>Company</h6>
                <nav id="footer-nav">
                  <ul>
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li>
                      <Link to="/register">Join Us</Link>
                    </li>
                    <li>
                      <Link to="/">Transparency in Supply Chains</Link>
                    </li>
                  </ul>
                </nav>
              </>
            )}
            <Col>
              {isMediumScreen ? (
                <Accordion className="mt-2">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <h6>Our Commitments</h6>
                    </Accordion.Header>
                    <Accordion.Body>
                      <nav id="footer-nav">
                        <ul>
                          <li>
                            <Link to="/">Accessibility</Link>
                          </li>
                          <li>
                            <Link to="/">Sustainability</Link>
                          </li>
                          <li>
                            <Link to="/">Change is the Journey</Link>
                          </li>
                          <li>
                            <Link to="/">Everything is Chemical</Link>
                          </li>
                        </ul>
                      </nav>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              ) : (
                <>
                  <h6 style={{ marginTop: '1rem' }}>Our Commitments</h6>
                  <nav id="footer-nav">
                    <ul>
                      <li>
                        <Link to="/">Accessibility</Link>
                      </li>
                      <li>
                        <Link to="/">Sustainability</Link>
                      </li>
                      <li>
                        <Link to="/">Change is the Journey</Link>
                      </li>
                      <li>
                        <Link to="/">Everything is Chemical</Link>
                      </li>
                    </ul>
                  </nav>
                </>
              )}
            </Col>
          </Col>
          {/* NEXT  */}
          <Col md={12} lg={3}>
            {isMediumScreen ? (
              <Accordion className="mt-2">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h6>Customer Care</h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    <nav id="footer-nav">
                      <ul>
                        <li>
                          <Link to="/">FAQ</Link>
                        </li>
                        <li>
                          <Link to="/">Disposal Instructions</Link>
                        </li>
                        <li>
                          <Link to="/">Return Policy</Link>
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
                <h6>Customer Care</h6>
                <nav id="footer-nav">
                  <ul>
                    <li>
                      <Link to="/">FAQ</Link>
                    </li>
                    <li>
                      <Link to="/">Disposal Instructions</Link>
                    </li>
                    <li>
                      <Link to="/">Return Policy</Link>
                    </li>
                    <li>
                      <Link to="/">Promition Terms & Conditions</Link>
                    </li>
                  </ul>
                </nav>
              </>
            )}
            <Col>
              {isMediumScreen ? (
                <Accordion className="mt-2">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <h6>Gift Cards</h6>
                    </Accordion.Header>
                    <Accordion.Body>
                      <nav id="footer-nav">
                        <ul>
                          <li>
                            <Link to="/">Purchase</Link>
                          </li>
                          <li>
                            <Link to="/">Check Balance</Link>
                          </li>
                        </ul>
                      </nav>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              ) : (
                <>
                  <h6 style={{ marginTop: '1rem' }}>Gift Cards</h6>
                  <nav id="footer-nav">
                    <ul>
                      <li>
                        <Link to="/">Purchase</Link>
                      </li>
                      <li>
                        <Link to="/">Check Balance</Link>
                      </li>
                    </ul>
                  </nav>
                </>
              )}
            </Col>
          </Col>
          {/* NEXT  */}
          <Col
            md={12}
            lg={3}
            className={isMediumScreen ? 'order-second' : ''}
            style={{ marginTop: '0.8rem' }}
          >
            <h6>Contact Us</h6>
            <h6>Track Order</h6>
            <h6>Sign In</h6>
            <h6>Store Locator</h6>
          </Col>
          <Col md={12} lg={3} className={isMediumScreen ? 'order-first' : ''}>
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
            <p style={{ fontSize: '0.6rem' }}>
              *By checking the above box you are agreeing to receive email
              communications from DECIEM Inc., it affiliates, brands (The
              Ordinary and NIOD) and/or marketing partners. This can be changed
              at any time. Please refer to our Privacy Policy and Terms of Use
              for more details or Contact Us
            </p>

            <box-icon
              style={{ marginRight: '1rem', cursor: 'pointer' }}
              type="logo"
              name="facebook-circle"
            ></box-icon>
            <box-icon
              style={{ marginRight: '1rem', cursor: 'pointer' }}
              name="instagram"
              type="logo"
            ></box-icon>
            <box-icon
              style={{ marginRight: '1rem', cursor: 'pointer' }}
              name="youtube"
              type="logo"
            ></box-icon>
            <box-icon
              style={{ marginRight: '1rem', cursor: 'pointer' }}
              name="twitter"
              type="logo"
            ></box-icon>
          </Col>
        </Row>
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
