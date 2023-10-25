import { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  InputGroup,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';
import Logo from './../../../assets/logo.png';
import './Register.css';

const Register = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container id="register-mainbox">
      <Row>
        <Col lg={6} id="register-left-side">
          <h5
            style={{ fontWeight: ' bold' }}
            id="register-h5"
            className="mx-5 mb-4"
          >
            CREATE AN ACCOUNT
          </h5>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            {/* USERNAME -------------- */}
            <Form.Group
              as={Col}
              md="10"
              className="mx-auto mb-3"
              controlId="validationCustomUsername"
            >
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <OverlayTrigger
                  placement="right"
                  overlay={
                    <Tooltip id="tooltip-username">
                      Username must be at least 1 uppercase and 1 lowercase
                    </Tooltip>
                  }
                >
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    required
                    pattern="^(?=.*[A-Z])(?=.*[a-z]).*$"
                  />
                </OverlayTrigger>
              </InputGroup>
            </Form.Group>

            {/* FIRST NAME -------------- */}
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
                    Please enter a valid first name.
                  </Tooltip>
                }
              >
                <Form.Control
                  type="text"
                  placeholder="First name"
                  required
                  pattern="^[A-Za-z]+$"
                />
              </OverlayTrigger>
            </Form.Group>

            {/* LAST NAME -------------- */}
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
                    Please enter a valid last name.
                  </Tooltip>
                }
              >
                <Form.Control
                  type="text"
                  placeholder="Last name"
                  required
                  pattern="^[A-Za-z]+$" // Pattern for alphabetic characters only
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
                  minLength="8"
                  pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*$"
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
            <Button type="submit" className="ms-5 mb-3 " id="register-button">
              JOIN NOW
            </Button>
            <p id="register-p" className="ms-5 mb-3">
              By clicking “Join Now” you agree to the{' '}
              <span id="register-link-color">Privacy Policy</span> and
              <span id="register-link-color">Terms of Use.</span>
            </p>
            <p id="register-p" className="ms-5 mb-3">
              Already have an account?
              <span
                style={{ textDecoration: 'underline', cursor: 'pointer' }}
                id="register-link-color"
              >
                Sign in
              </span>
            </p>
          </Form>
        </Col>

        <Col lg={6} id="register-right-side">
          <img src={Logo}></img>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
