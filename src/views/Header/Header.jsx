import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import "./Header.css";
import axios from "./../../axios";
import { useState, useEffect } from "react";

const Header = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const userLogged = async () => {
    await axios
      .get("/authUser")
      .then((res) => {
        setUser(res.data.user);
      })
      .catch((err) => {
        setUser({});
      });
  };
  useEffect(() => {
    // Call userLogged when the component mounts
    userLogged();
  }, []);

  const logout = async () => {
    await axios.post("/logout");
    setUser({});
  };

  return (
    <>
      <div id="header-top">
        <h6>Free Shipping worldwide</h6>
      </div>
      <Navbar expand="lg" id="navbar-container">
        <Container>
          <Navbar.Brand as={Link} to="/">
            The Ordinary.
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
              {user.name ? (
                <>
                  <Nav.Link as={Link} to="/Account">
                    {user.name}
                  </Nav.Link>
                  <Nav.Link onClick={logout}>Logout</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/login">
                    Log in
                  </Nav.Link>
                  <Nav.Link as={Link} to="/register">
                    Register
                  </Nav.Link>
                </>
              )}

              {/* <box-icon name="cart"></box-icon> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
