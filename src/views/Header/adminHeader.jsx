// import React from 'react';

import { useState, useEffect } from 'react';
import { Nav, Navbar, Offcanvas, Container } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import './Header.css';
import axios from './../../axios';

const adminHeader = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const userLogged = async () => {
    await axios
      .get('/authUser')
      .then((res) => {
        setUser(res.data.user);
      })
      .catch((err) => {
        setUser({});
      });
  };
  useEffect(() => {
    userLogged();
  }, []);

  const logout = async () => {
    await axios.post('/logout');
    window.localStorage.removeItem('ECCOM_TOKEN');
    setUser({});
    window.location.href = '/';
  };

  return (
    <>
      <div id="header-top">
        <h6>Free Shipping worldwide</h6>
      </div>
      <Navbar expand="lg" id="navbar-container">
        <Container>
          <Navbar.Brand as={Link} to="/admin-page">
            The Ordinary.
          </Navbar.Brand>
          <Navbar.Toggle
            onClick={handleShow}
            aria-controls="basic-navbar-nav"
          />

          {/* Conditionally render Navbar links based on the "show" state */}
          {show ? null : (
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto mx-auto"></Nav>
              <Nav className="ml-auto">
                {user.name ? (
                  <>
                    <Nav.Link
                      as={Link}
                      to="/account"
                      style={{ textTransform: 'capitalize' }}
                    >
                      Hello, {user.username}!
                    </Nav.Link>
                    <Nav.Link onClick={logout}>Logout</Nav.Link>
                  </>
                ) : (
                  <>
                    <Nav.Link as={Link} to="/admin-login">
                      Log in
                    </Nav.Link>
                    <Nav.Link as={Link} to="/admin-register">
                      Register
                    </Nav.Link>
                  </>
                )}

                {/* <box-icon name="cart"></box-icon> */}
              </Nav>
            </Navbar.Collapse>
          )}
        </Container>
        {/* Offcanvas */}
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <Offcanvas.Title>
              {user.name ? (
                <>
                  <Nav.Link
                    as={Link}
                    to="/account"
                    style={{ textTransform: 'capitalize' }}
                  >
                    Hello, {user.username}!
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/admin-login">
                    Log in
                  </Nav.Link>
                  <Nav.Link as={Link} to="/admin-register">
                    Register
                  </Nav.Link>
                </>
              )}
            </Offcanvas.Title>
            <Nav className="me-auto mx-auto">
              <Nav.Link as={Link} to="/new">
                New
              </Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              {user.name ? (
                <>
                  <Nav.Link onClick={logout}>Logout</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/admin-login">
                    Log in
                  </Nav.Link>
                  <Nav.Link as={Link} to="/admin-register">
                    Register
                  </Nav.Link>
                </>
              )}

              {/* <box-icon name="cart"></box-icon> */}
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </Navbar>
    </>
  );
};

export default adminHeader;
