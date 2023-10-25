import { Container, Card } from "react-bootstrap";
import { useRef } from "react";
import Ageing from "./../../../assets/ageing.jpg";
import Dullness from "./../../../assets/dullness.jpg";
import Hyperpigmintation from "./../../../assets/hyperpigmintation.jpg";
import Uneven from "./../../../assets/uneven.jpg";
import Dryness from "./../../../assets/dryness.jpg";
import Crowsfeet from "./../../../assets/crowsfeet.jpg";
import Visiblelines from "./../../../assets/visiblelines.jpg";
import Darkcircles from "./../../../assets/darkcircles.jpg";
import "./Sec1.css";
import axios from "axios";

const Sec1 = () => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    const container = containerRef.current;
    if (container) {
      const targetScrollLeft = container.scrollLeft - 500; // Adjust the scrolling amount as needed
      container.scrollTo({
        left: targetScrollLeft,
        behavior: "smooth",
      });
    }
  };
  const scrollRight = () => {
    const container = containerRef.current;
    if (container) {
      const targetScrollLeft = container.scrollLeft + 500;
      container.scrollTo({
        left: targetScrollLeft,
        behavior: "smooth",
      });
    }
  };
  return (
    <Container id="sec1-box">
      <button onClick={scrollLeft}>Left</button>
      <div
        id="sec1-container"
        className="scrollable-container"
        ref={containerRef}
      >
        <div className="scrollable-content d-flex">
          {generateCards(Ageing, "Signs of Ageing", 1)}
          {generateCards(Dullness, "Dullness", 1)}
          {generateCards(Hyperpigmintation, "Hyperpigmintation", 1)}
          {generateCards(Uneven, "Uneven Skin Tone", 1)}
          {generateCards(Dryness, "Dryness", 1)}
          {generateCards(Crowsfeet, "Crows feet", 1)}
          {generateCards(Visiblelines, "Visible shine", 1)}
          {generateCards(Darkcircles, "Dark circles", 1)}
        </div>
      </div>
      <button onClick={scrollRight}>Right</button>
    </Container>
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
          <Card.Text style={{ textAlign: "center" }}>{title}</Card.Text>
        </Card.Body>
      </Card>
    );
  }

  return cards;
}

export default Sec1;
