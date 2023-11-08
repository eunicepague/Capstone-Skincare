import { Container, Card } from 'react-bootstrap';
import './Sec1.css';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

const Sec1 = () => {
  const containerRef = useRef(null);
  const [concerns, setConcerns] = useState([]);

  const getConcerns = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/concerns');
      setConcerns(response.data.data);
      console.log(response);
    } catch (error) {
      console.error('Login failed', error);
    }
  };
  useEffect(() => {
    // When the component mounts, load categories
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
            {concerns.map((item) =>
              generateCards(
                `/src/assets/concerns/${item.name}.jpg`,
                item.name,
                1
              )
            )}
          </div>
        </div>
        <button id="sec1-right-button" onClick={scrollRight}>
          <box-icon name="right-arrow">Left</box-icon>
        </button>
      </Container>
      <div className="d-flex justify-content-center">
        <button id="s1-shop-button">Shop all</button>
      </div>
    </>
  );
};

// Function to generate card elements
function generateCards(imageSrc, title, count) {
  const cards = [];

  for (let i = 1; i <= count; i++) {
    cards.push(
      <Card key={i} id="sec1-card" className="mx-2">
        <Card.Img variant="top" id="sec1-card-img" src={imageSrc} />
        <Card.Body id="sec1-card-body">
          <Card.Text style={{ textAlign: 'center' }}>{title}</Card.Text>
        </Card.Body>
      </Card>
    );
  }

  return cards;
}

export default Sec1;
