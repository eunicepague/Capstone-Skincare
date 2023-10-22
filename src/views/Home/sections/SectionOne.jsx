import { Component } from 'react'; // Import Component from react
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Vid1 from './../../../assets/s2-vid-1.mp4';
import './SectionOne.css';

class SectionTwo extends Component {
  render() {
    return (
      <Container>
        <Fade bottom>
          <section id="s2-container">
            <Row>
              <Col xs={12} sm={12} md={6} lg={6}>
                <video autoPlay loop muted id="s2-vid">
                  <source src={Vid1} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Col>
              <Col
                xs={12}
                sm={12}
                md={6}
                lg={6}
                className="p-0 d-flex justify-content-center"
              >
                <div id="s2-text">
                  <h1 id="s2-h1" className="mb-lg-5">
                    Built to Rebuild
                  </h1>
                  <p>
                    Say hello to the newest addition to your regimen–Soothing &
                    Barrier Support Serum, launching on October 24, 2023. A
                    multi-active, skin support serum that restores the skin
                    barrier in 2 hours.
                  </p>
                  <h5 id="s2-h5" className="mt-lg-3">
                    Learn More
                  </h5>
                </div>
              </Col>
            </Row>
          </section>
        </Fade>
      </Container>
    );
  }
}

export default SectionTwo;
