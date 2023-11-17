// import React from 'react';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Bounce, Slide } from 'react-awesome-reveal';
import Up from './../../../assets/up.png';
import './Disposal.css';

const Disposal = () => {
  // for the btn

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollThreshold = window.innerHeight * 0.5;
    setIsVisible(window.scrollY > scrollThreshold);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <Container id="disposal-content">
      <section>
        <Row>
          <Col id="disposal-left" lg={4}>
            <Bounce>
              <h1>Packaging disposal guidelines.</h1>
            </Bounce>
          </Col>

          <Col id="disposal-right" lg={8}>
            <Slide direction="right">
              <section>
                <Row className="mb-5">
                  <Col className="disposal-col">
                    <img src="https://theordinary.com/on/demandware.static/-/Library-Sites-DeciemSharedLibrary/default/dw5a8dcf92/deciem/disposal-page/disposal-img1.svg"></img>
                  </Col>
                  <Col>
                    <h6>Before Recycling:</h6>
                    <p>
                      Empty the contents of the container. Remove cap, lid,
                      dropper, pump, and other components and rinse the
                      bottle/jar with water.
                    </p>
                  </Col>
                </Row>

                <Row className="mb-5">
                  <Col className="disposal-col">
                    <img src="https://theordinary.com/on/demandware.static/-/Library-Sites-DeciemSharedLibrary/default/dwaf036168/deciem/disposal-page/disposal-img2.svg" />
                  </Col>
                  <Col>
                    <h6>Packaging items with adhesive-based labels:</h6>
                    <p>
                      Contact your local recycling facility to ensure
                      recyclability via curbside recycling program.
                    </p>
                    <p>
                      Otherwise, dispose via our in-store recycling program.
                    </p>
                  </Col>
                </Row>

                <Row className="mb-5">
                  <Col className="disposal-col">
                    <img src="https://theordinary.com/on/demandware.static/-/Library-Sites-DeciemSharedLibrary/default/dwf78430f8/deciem/disposal-page/disposal-img3.svg" />
                  </Col>
                  <Col>
                    <h6>
                      Serum/Oil, Shampoo, Conditioner, Shower Gel, Lotion, Hand
                      Soap Bottles:
                    </h6>
                    <p>
                      #1 PETE & #2 HDPE and glass bottles are recyclable through
                      the majority of local curbside recycling programs.
                    </p>
                    <p>
                      # 5 PP bottles are usually recyclable through local
                      curbside recycling programs. Please contact your local
                      recycling facility to ensure recyclability.
                    </p>
                    <p>
                      Otherwise, dispose via our in-store recycling program.
                    </p>
                  </Col>
                </Row>

                <Row className="mb-5">
                  <Col className="disposal-col">
                    <img src="https://theordinary.com/on/demandware.static/-/Library-Sites-DeciemSharedLibrary/default/dw4c17e2cf/deciem/disposal-page/disposal-img4.svg" />
                  </Col>
                  <Col>
                    <h6>Aluminum Tubes:</h6>
                    <p>
                      Recyclable through the majority of local curbside
                      recycling programs.
                    </p>
                  </Col>
                </Row>

                <Row className="mb-5">
                  <Col className="disposal-col">
                    <img src="https://theordinary.com/on/demandware.static/-/Library-Sites-DeciemSharedLibrary/default/dw2546235a/deciem/disposal-page/disposal-img5.svg" />
                  </Col>
                  <Col>
                    <h6>Deodorant Bottles:</h6>
                    <p>Dispose of via our in-store recycling program.</p>
                  </Col>
                </Row>

                <Row className="mb-5">
                  <Col className="disposal-col">
                    <img src="https://theordinary.com/on/demandware.static/-/Library-Sites-DeciemSharedLibrary/default/dw39fe9bb3/deciem/disposal-page/disposal-img6.svg" />
                  </Col>
                  <Col>
                    <h6>Plastic Tubes:</h6>
                    <p>
                      Due to the complexity of tube recycling in different
                      jurisdictions, we suggest they are disposed via our
                      in-store recycling program.
                    </p>
                  </Col>
                </Row>

                <Row className="mb-5">
                  <Col className="disposal-col">
                    <img src="https://theordinary.com/on/demandware.static/-/Library-Sites-DeciemSharedLibrary/default/dw68a8aed2/deciem/disposal-page/disposal-img7.svg" />
                  </Col>
                  <Col>
                    <h6>All Pumps:</h6>
                    <p>Dispose of via our in-store recycling program.</p>
                  </Col>
                </Row>

                <Row className="mb-5">
                  <Col className="disposal-col">
                    <img src="https://theordinary.com/on/demandware.static/-/Library-Sites-DeciemSharedLibrary/default/dw4dffe32e/deciem/disposal-page/disposal-img8.svg" />
                  </Col>
                  <Col>
                    <h6>Jars:</h6>
                    <p>
                      #1 PETE, #2 HDPE and glass jars are recyclable through the
                      majority of local curbside recycling programs..
                    </p>
                    <p>
                      # 5 PP jars are usually recyclable through local curbside
                      recycling programs. Contact your local recycling facility
                      to ensure recyclability.
                    </p>
                    <p>
                      Otherwise, dispose via our in-store recycling program.
                    </p>
                  </Col>
                </Row>

                <Row className="mb-5">
                  <Col className="disposal-col">
                    <img src="https://theordinary.com/on/demandware.static/-/Library-Sites-DeciemSharedLibrary/default/dw3b8a5f12/deciem/disposal-page/disposal-img9.svg" />
                  </Col>
                  <Col>
                    <h6>Dropper Lids:</h6>
                    <p>Dispose of via our in-store recycling program.</p>
                  </Col>
                </Row>

                <Row className="mb-5">
                  <Col className="disposal-col">
                    <img src="https://theordinary.com/on/demandware.static/-/Library-Sites-DeciemSharedLibrary/default/dw6b1a9786/deciem/disposal-page/disposal-img10.svg" />
                  </Col>
                  <Col>
                    <h6>Plastic Flip Top Caps, Screw-on Caps & Disc Caps:</h6>
                    <p>
                      Sometimes recyclable through local curbside recycling
                      programs. Contact your local recycling facility to ensure
                      recyclability of smaller caps.
                    </p>
                    <p>
                      Otherwise, dispose via our in-store recycling program.
                    </p>
                  </Col>
                </Row>

                <Row className="mb-5">
                  <Col className="disposal-col">
                    <img src="https://theordinary.com/on/demandware.static/-/Library-Sites-DeciemSharedLibrary/default/dw624af6ad/deciem/disposal-page/disposal-img11.svg" />
                  </Col>
                  <Col>
                    <h6>Aluminum Lids:</h6>
                    <p>
                      Recyclable through the majority of local curbside
                      recycling programs. It’s best practice to remove the PET
                      liner on the inside prior to recycling.
                    </p>
                    <p>
                      Otherwise, dispose via our in-store recycling program.
                    </p>
                  </Col>
                </Row>

                <Row className="mb-5">
                  <Col className="disposal-col">
                    <img src="https://theordinary.com/on/demandware.static/-/Library-Sites-DeciemSharedLibrary/default/dw583519ca/deciem/disposal-page/disposal-img12.svg" />
                  </Col>
                  <Col>
                    <h6>Sachets:</h6>
                    <p>
                      Aluminum and paper sachets are usually recyclable through
                      the majority of local curbside recycling programs.
                    </p>
                    <p>
                      Plastic sachets are sometimes recyclable through local
                      curbside recycling programs. Contact your local recycling
                      facility to ensure recyclability.
                    </p>
                    <p>
                      Otherwise, dispose via our in-store recycling program.
                    </p>
                  </Col>
                </Row>

                <Row className="mb-5">
                  <Col className="disposal-col">
                    <img src="https://theordinary.com/on/demandware.static/-/Library-Sites-DeciemSharedLibrary/default/dwc33bb76b/deciem/disposal-page/disposal-img14.png" />
                  </Col>
                  <Col>
                    <h6>Sets:</h6>
                    <p>Follow Individual Product Packaging Guidelines.</p>
                  </Col>
                </Row>

                <Row className="mb-5">
                  <Col className="disposal-col">
                    <img src="https://theordinary.com/on/demandware.static/-/Library-Sites-DeciemSharedLibrary/default/dw06c1c1b6/deciem/disposal-page/disposal-img15.png" />
                  </Col>
                  <Col>
                    <h6>Reuse:</h6>
                    <p>Reuse:</p>
                  </Col>
                </Row>
              </section>
            </Slide>
          </Col>
        </Row>
        <div
          id="faqs-upBtn"
          style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.3s' }}
        >
          <img src={Up} onClick={scrollToTop} className="up-btn-img"></img>
        </div>
      </section>
    </Container>
  );
};

export default Disposal;
