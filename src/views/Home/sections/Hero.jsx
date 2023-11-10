import { Container } from 'react-bootstrap';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import HeroVid3 from './../../../assets/hero-vid-3.mp4';
import Slowvember from './../../../assets/slowvember.mp4';
import Pic1 from './../../../assets/pic-1.png';
import Pic3 from './../../../assets/pic-3.jpg';
import Pic4 from './../../../assets/pic-4.jpg';
import './Hero.css';

const Hero = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <section id="hero-container">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {/* ---------- firts carousel ----------  */}
          <Carousel.Item>
            <img
              src={Pic1}
              alt="First Carousel Image"
              style={{
                width: '100%',
                height: '100vh',
                objectFit: 'cover',
              }}
            />
            <Carousel.Caption>
              <h3>number 1</h3>
              <p>This is the first slide with an image (Pic1).</p>
            </Carousel.Caption>
          </Carousel.Item>

          {/* ---------- second carousel ----------  */}
          <Carousel.Item>
            <video
              autoPlay
              loop
              muted
              style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
            >
              <source src={Slowvember} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Carousel.Item>
          {/* ----------  third carousel ----------  */}
          <Carousel.Item>
            <div id="hero-pic4-container">
              <img src={Pic3} id="pic-3" />
            </div>
            <Carousel.Caption>
              <h3>Last slide label</h3>
            </Carousel.Caption>
          </Carousel.Item>
          {/* ----------  fourth carousel ----------  */}
          <Carousel.Item>
            <div id="hero-pic4-container">
              <img src={Pic4} id="pic-4" />
            </div>

            <Carousel.Caption>
              <h3>number 1</h3>
              <p>This is the first slide with an image (Pic1).</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
};

export default Hero;
