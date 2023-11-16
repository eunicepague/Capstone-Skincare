import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  // InputGroup,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import Logo from "./../../../assets/logo.png";
import "./Register.css";
import axios from "axios";

const Register = () => {
  const [validated, setValidated] = useState(false);
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirm] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }
    // setValidated(true);
    try {
      const response = await axios.post("/register", {
        username,
        name,
        email,
        password,
        password_confirmation,
        phone,
        address,
      });
      navigate("/login");
    } catch (error) {
      // Handle authentication error (e.g., show an error message to the user).
      console.error("Login failed", error);
    }
  };

  return (
    <Container id="register-mainbox">
      <Row>
        <Col lg={6} id="register-left-side">
          <h5
            style={{ fontWeight: " bold" }}
            id="register-h5"
            className="mx-5 mb-4"
          >
            CREATE AN ACCOUNT
          </h5>
          <Form noValidate validated={validated}>
            {/* USERNAME -------------- */}
            <Form.Group
              as={Col}
              md="10"
              className="mx-auto mb-3 mt-2"
              controlId="validationCustom01"
            >
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip id="tooltip-username">
                    Please enter a Username.
                  </Tooltip>
                }
              >
                <Form.Control
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </OverlayTrigger>
            </Form.Group>
            {/* FULL NAME -------------- */}
            <Form.Group
              as={Col}
              md="10"
              className="mx-auto mb-3 mt-2"
              controlId="validationCustom01"
            >
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip id="tooltip-username">
                    Please enter a valid Fullname.
                  </Tooltip>
                }
              >
                <Form.Control
                  type="text"
                  placeholder="Fullname"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </OverlayTrigger>
            </Form.Group>
            {/* EMAIL ADDRESS -------------- */}
            <Form.Group
              as={Col}
              md="10"
              className="mx-auto mb-3 mt-2"
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
                  type="email"
                  placeholder="Email"
                  aria-describedby="inputGroupPrepend"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </OverlayTrigger>
            </Form.Group>

            {/* Phone  -------------- */}
            <Form.Group
              as={Col}
              md="10"
              className="mx-auto mb-3 mt-2"
              controlId="validationCustom02"
            >
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip id="tooltip-username">
                    Please enter a valid phone.
                  </Tooltip>
                }
              >
                <Form.Control
                  type="text"
                  placeholder="Phone Number"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </OverlayTrigger>
            </Form.Group>

            {/* Address  -------------- */}
            <Form.Group
              as={Col}
              md="10"
              className="mx-auto mb-3 mt-2"
              controlId="validationCustom02"
            >
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip id="tooltip-username">
                    Please enter a valid Address.
                  </Tooltip>
                }
              >
                <Form.Control
                  type="text"
                  placeholder="Address"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </OverlayTrigger>
            </Form.Group>

            {/* PASSWORD -------------- */}
            <Form.Group
              as={Col}
              md="10"
              className="mx-auto mb-3 mt-2"
              controlId="validationCustomPassword"
            >
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip id="tooltip-username">
                    Password must be at least 8 characters long, 1 uppercase, 1
                    lowercase and 1 digit.
                  </Tooltip>
                }
              >
                <Form.Control
                  type="password"
                  placeholder="Password"
                  aria-describedby="inputGroupPrepend"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </OverlayTrigger>
            </Form.Group>

            {/* PASSWORD CONFIRMATION -------------- */}
            <Form.Group
              as={Col}
              md="10"
              className="mx-auto mb-3 mt-2"
              controlId="validationCustomPassword"
            >
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip id="tooltip-username">Confirm Password</Tooltip>
                }
              >
                <Form.Control
                  type="password"
                  placeholder="Password Confirmation"
                  aria-describedby="inputGroupPrepend"
                  required
                  value={password_confirmation}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                />
              </OverlayTrigger>
            </Form.Group>

            <Form.Group as={Col} md="10" className="mx-auto mb-3 mt-2">
              <Form.Check
                required
                id="regiser-feedback"
                label="Agree to terms and conditions"
                feedbackType="invalid"
              />
              <p id="register-p">
                *By checking the above box you are agreeing to receive email
                communications from DECIEM Inc., it affiliates, brands (The
                Ordinary and NIOD) and/or marketing partners. This can be
                changed at any time. Please refer to our Privacy Policy and
                Terms of Use for more details or Contact Us .
              </p>
            </Form.Group>

            {/* button */}
            <Button
              onClick={handleRegister}
              className="ms-5 mb-3 "
              id="register-button"
            >
              JOIN NOW
            </Button>
            <p id="register-p" className="ms-5 mb-3">
              By clicking “Join Now” you agree to the{" "}
              <span id="register-link-color">Privacy Policy</span> and
              <span id="register-link-color">Terms of Use.</span>
            </p>
            <p id="register-p" className="ms-5 mb-3">
              Already have an account?
              <Link to="/login">
                <span
                  style={{ textDecoration: "underline", cursor: "pointer" }}
                  id="register-link-color"
                >
                  Sign in
                </span>
              </Link>
            </p>
          </Form>
        </Col>

        <Col lg={6} id="register-right-side">
          <img
            src={Logo}
            className="d-none d-lg-block"
            alt="Your Image Alt Text"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
