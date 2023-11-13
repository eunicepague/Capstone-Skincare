import { Container, Row, Col } from 'react-bootstrap';
import './Account.css';
import { useEffect, useState } from 'react';
import axios from './../../axios';
import { Link } from 'react-router-dom';

const Account = () => {
  const [user, setUser] = useState({});

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
    // Call userLogged when the component mounts
    userLogged();
  }, []);

  return (
    <Container id="account-container">
      <section id="account-content">
        <Row>
          <Col sm={12} md={6} lg={6} id="account-left">
            <h1>Hello,</h1>
            <h1 style={{ textTransform: 'uppercase' }}>
              {user.username} :-{')'}
            </h1>
            <p className="mt-5">PROFILE</p>
            <Link
              style={{ textDecoration: 'none', color: 'black' }}
              as={Link}
              to="/status"
            >
              <p>ORDERS</p>
            </Link>
          </Col>

          <Col sm={12} md={6} lg={6} id="account-right">
            <hr className="w-100"></hr>
            <h5 className="mb-5">PROFILE</h5>
            <Row>
              <Col xs={10} sm={10} md={10} lg={10} id="account-right-data">
                <p style={{ textTransform: 'uppercase' }}>{user.name}</p>

                <p>{user.email}</p>

                <p>{user.address}</p>

                <p>{user.phone}</p>
              </Col>
              <Col xs={2} sm={2} md={2} lg={2} id="account-edit">
                <p>edit</p>
                <p>edit</p>
                <p>edit</p>
                <p>edit</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Account;

{
  /*  */
}
