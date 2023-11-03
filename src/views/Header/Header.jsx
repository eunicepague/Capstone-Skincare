import { useState } from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div id="header-top">
        <h6>Free Shipping worldwide</h6>
      </div>
      <Navbar expand="lg" id="navbar-container">
        <Navbar.Brand as={Link} to="/">
          The Ordinary.
        </Navbar.Brand>
        <Navbar.Toggle onClick={handleShow} aria-controls="basic-navbar-nav" />

        {/* Conditionally render Navbar links based on the "show" state */}
        {show ? null : (
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto mx-auto">
              <Nav.Link as={Link} to="/new">
                New
              </Nav.Link>
              <Nav.Link as={Link} to="/bestsellers">
                Best Sellers
              </Nav.Link>
              <Nav.Link as={Link} to="/Account">
                Skin Care
              </Nav.Link>
              <Nav.Link as={Link} to="/cart">
                Cart
              </Nav.Link>
              <Nav.Link as={Link} to="/order">
                Order
              </Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/login">
                Log in
              </Nav.Link>
              <Nav.Link as={Link} to="/register">
                Register
              </Nav.Link>
              <box-icon name="cart"></box-icon>
            </Nav>
          </Navbar.Collapse>
        )}

        {/* Offcanvas */}
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="me-auto mx-auto">
              <Nav.Link as={Link} to="/new">
                New
              </Nav.Link>
              <Nav.Link as={Link} to="/bestsellers">
                Best Sellers
              </Nav.Link>
              <Nav.Link as={Link} to="/Account">
                Skin Care
              </Nav.Link>
              <Nav.Link as={Link} to="/cart">
                Cart
              </Nav.Link>
              <Nav.Link as={Link} to="/order">
                Order
              </Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/login">
                Log in
              </Nav.Link>
              <Nav.Link as={Link} to="/register">
                Register
              </Nav.Link>
              <box-icon name="cart"></box-icon>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </Navbar>
    </>
  );
};

export default Header;
