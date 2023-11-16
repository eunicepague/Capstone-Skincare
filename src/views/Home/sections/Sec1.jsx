import { Container, Card } from 'react-bootstrap';
import './Sec1.css';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Sec1 = () => {
  const containerRef = useRef(null);
  const [concerns, setConcerns] = useState([]);
  const navigate = useNavigate();

  const getConcerns = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/concerns');
      setConcerns(response.data.data);
      console.log(response);
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const filterByConcern = async (id) => {
    navigate(`/products?concern=${id}`);
  };
  useEffect(() => {
    // When the component mounts, load concerns
    getConcerns();
  }, []);

  const scrollLeft = () => {
    const container = containerRef.current;
    if (container) {
      const targetScrollLeft = container.scrollLeft - 500; // Adjust the scrolling amount as needed
      container.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth',
      });
    }
  };
  const scrollRight = () => {
    const container = containerRef.current;
    if (container) {
      const targetScrollLeft = container.scrollLeft + 500;
      container.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <Container id="sec1-box">
        <button id="sec1-left-button" onClick={scrollLeft}>
          <box-icon name="left-arrow" style={{ width: '2rem' }}>
            Left
          </box-icon>
        </button>

        <div
          id="sec1-container"
          className="scrollable-container"
          ref={containerRef}
        >
          <div className="scrollable-content d-flex">
            {concerns.map((item) => (
              <Card key={item.id} id="sec1-card" className="mx-2">
                <Card.Img
                  onClick={() => filterByConcern(item.id)}
                  variant="top"
                  id="sec1-card-img"
                  src={`/src/assets/concerns/${item.name}.jpg`}
                />
                <Card.Body id="sec1-card-body">
                  <Card.Text style={{ textAlign: 'center' }}>
                    {item.name}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>

        <button id="sec1-right-button" onClick={scrollRight}>
          <box-icon name="right-arrow">Left</box-icon>
        </button>
      </Container>
      <div className="d-flex justify-content-center">
        <Link as={Link} to="/products" style={{ textDecoration: 'none' }}>
          <button id="s1-shop-button" onClick={scrollToTop}>
            Shop all
          </button>
        </Link>
      </div>
    </>
  );
};

// Function to generate card elements

export default Sec1;
