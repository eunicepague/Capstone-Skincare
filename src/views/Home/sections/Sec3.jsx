import { Container, Card } from 'react-bootstrap';
import { useRef } from 'react';
import Moisturizer from './../../../assets/moisturizer.jpg';
import Exfoliants from './../../../assets/exfoliants.jpg';
import EyeSerums from './../../../assets/eyeserum.jpg';
import Cleansers from './../../../assets/cleansers.jpg';
import VitaminC from './../../../assets/vitaminc.jpg';
import Peptides from './../../../assets/peptides.jpg';
import Retinoids from './../../../assets/retinoids.jpg';
import Hydrators from './../../../assets/hydrators.jpg';
import './Sec3.css';

const Sec3 = () => {
  const containerRef = useRef(null);

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
      <h1 id="sec3-greetings">SHOP BY CATEGORY</h1>
      <Container id="sec3-box">
        <button onClick={scrollLeft}>Left</button>
        <div
          id="sec3-container"
          className="scrollable-container"
          ref={containerRef}
        >
          <div className="scrollable-content d-flex">
            {generateCards(Moisturizer, 'Moisturisers', 1)}
            {generateCards(Exfoliants, 'Exfoliants', 1)}
            {generateCards(EyeSerums, 'Eye Serums', 1)}
            {generateCards(Hydrators, 'Hydrators & Oils', 1)}
            {generateCards(Peptides, 'Peptides', 1)}
            {generateCards(VitaminC, 'Vitamin C', 1)}
            {generateCards(Retinoids, 'Retinoids', 1)}
            {generateCards(Cleansers, 'Cleansers', 1)}
          </div>
        </div>
        <button onClick={scrollRight}>Right</button>
      </Container>
    </>
  );
};

// Function to generate card elements
function generateCards(imageSrc, title, count) {
  const cards = [];

  for (let i = 1; i <= count; i++) {
    cards.push(
      <Card key={i} id="sec3-card" className="mx-2">
        <Card.Img variant="top" id="sec3-card-img" src={imageSrc} />
        <Card.Body id="sec3-card-body">
          <Card.Text style={{ textAlign: 'center' }}>{title}</Card.Text>
        </Card.Body>
      </Card>
    );
  }

  return cards;
}

export default Sec3;
