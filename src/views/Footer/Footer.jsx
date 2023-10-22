import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
// import './Footer.css';

const Footer = () => {
  return (
    <footer className="py-3">
      <Container>
        <Row>
          <Col>
            <h5>Quick Links</h5>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/news">News</Link>
                </li>
                <li>
                  <Link to="/mmos">MMO List</Link>
                </li>
              </ul>
            </nav>
          </Col>
          <Col className="align-self-center">
            <p>Copyright &copy; 2023</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
