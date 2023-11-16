import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import exampleOne from './../../../assets/ex1.png';
import exampleTwo from './../../../assets/ex2.png';
import exampleThree from './../../../assets/ex3.png';
import { motion } from 'framer-motion';
import './Newhero.css';

const Newhero = () => {
  const images = [exampleOne, exampleTwo, exampleThree];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCircleClick = (index) => {
    setActiveIndex(index);
  };

  const slideVariants = {
    hidden: { opacity: 0, x: '20%' },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <Container id="newhero-container">
      <section id="newhero-content">
        <Row>
          <Col sm={12} md={6} lg={6} id="newhero-left">
            <div className="mx-5">
              <h6 style={{ whiteSpace: 'pre-line' }}>
                Clinical formulations{'\n'}with integrity
              </h6>
              <h1 id="newhero-h1">The Ordinary.</h1>
            </div>
          </Col>
          <Col sm={12} md={6} lg={6} id="newhero-right">
            <motion.div
              key={activeIndex} // Add key attribute
              className="mx-5"
              initial="hidden"
              animate="visible"
              variants={slideVariants}
            >
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`slide-${index}`}
                  className={`carousel-image ${
                    index === activeIndex ? 'active' : ''
                  }`}
                />
              ))}
            </motion.div>
          </Col>
          <div className="carousel-circles">
            {images.map((_, index) => (
              <div
                key={index}
                className={`circle ${index === activeIndex ? 'active' : ''}`}
                onClick={() => handleCircleClick(index)}
              />
            ))}
          </div>
        </Row>
      </section>
    </Container>
  );
};

export default Newhero;
