// import React from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Accordion,
  Dropdown,
} from 'react-bootstrap';
import { useState } from 'react';
import Cart from './../../assets/cart-icon.png';
import Pic1 from './../../assets/Toner.jpg';
import yellowStar from './../../assets/yellowStar.png';
import transStar from './../../assets/transStar.png';

import './Category.css';

const Category = () => {
  const [selectedItem, setSelectedItem] = useState('Sort Products');

  const handleItemClick = (itemText) => {
    setSelectedItem(itemText);
  };
  return (
    <Container id="category-container">
      <section id="category-content">
        <Row>
          <Col id="category-left" className="d-none d-lg-flex" lg={3}>
            <h1 style={{ marginBottom: '3rem' }}>Filter by:</h1>

            <Accordion defaultActiveKey="0">
              {/* ------RATING------ */}
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <h6>Rating</h6>
                </Accordion.Header>
                <Accordion.Body>
                  <Form id="category-rating">
                    <div key={`default-fiveStar`} className="mb-3">
                      <Form.Check
                        type="radio"
                        name="rating"
                        id={`default-fiveStar`}
                        label={
                          <div>
                            <img src={yellowStar} />
                            <img src={yellowStar} />
                            <img src={yellowStar} />
                            <img src={yellowStar} />
                            <img src={yellowStar} /> 5 stars
                          </div>
                        }
                      />
                    </div>

                    <div key={`default-fourStar`} className="mb-3">
                      <Form.Check
                        type="radio"
                        name="rating"
                        id={`default-fourStar`}
                        label={
                          <div>
                            <img src={yellowStar} />
                            <img src={yellowStar} />
                            <img src={yellowStar} />
                            <img src={yellowStar} />
                            <img src={transStar} /> 4 stars
                          </div>
                        }
                      />
                    </div>
                    <div key={`default-threeStar`} className="mb-3">
                      <Form.Check
                        type="radio"
                        name="rating"
                        id={`default-threeStar`}
                        label={
                          <div>
                            <img src={yellowStar} />
                            <img src={yellowStar} />
                            <img src={yellowStar} />
                            <img src={transStar} />
                            <img src={transStar} /> 3 stars
                          </div>
                        }
                      />
                    </div>
                    <div key={`default-twoStar`} className="mb-3">
                      <Form.Check
                        type="radio"
                        name="rating"
                        id={`default-twoStar`}
                        label={
                          <div>
                            <img src={yellowStar} />
                            <img src={yellowStar} />
                            <img src={transStar} />
                            <img src={transStar} />
                            <img src={transStar} /> 2 stars
                          </div>
                        }
                      />
                    </div>
                    <div key={`default-oneStar`} className="mb-3">
                      <Form.Check
                        type="radio"
                        name="rating"
                        id={`default-oneStar`}
                        label={
                          <div>
                            <img src={yellowStar} />
                            <img src={transStar} />
                            <img src={transStar} />
                            <img src={transStar} />
                            <img src={transStar} /> 1 stars
                          </div>
                        }
                      />
                    </div>
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
              {/* ------PRODUCT TYPE------ */}
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <h6>Product Type</h6>
                </Accordion.Header>
                <Accordion.Body>
                  <Form>
                    {['checkbox'].map((type) => (
                      <div key={`default-exfoliators`} className="mb-3">
                        <Form.Check
                          type={type}
                          id={`default-exfoliators`}
                          label={`Exfoliators `}
                        />
                      </div>
                    ))}
                    {['checkbox'].map((type) => (
                      <div key={`default-eyeSerum`} className="mb-3">
                        <Form.Check
                          type={type}
                          id={`default-eyeSerum`}
                          label={`Eye Serums `}
                        />
                      </div>
                    ))}
                    {['checkbox'].map((type) => (
                      <div key={`default-faceMasque`} className="mb-3">
                        <Form.Check
                          type={type}
                          id={`default-faceMasque`}
                          label={`Face Masques`}
                        />
                      </div>
                    ))}
                    {['checkbox'].map((type) => (
                      <div key={`default-faceOil`} className="mb-3">
                        <Form.Check
                          type={type}
                          id={`default-faceOil`}
                          label={`Face Oils`}
                        />
                      </div>
                    ))}
                    {['checkbox'].map((type) => (
                      <div key={`default-faceCleanser`} className="mb-3">
                        <Form.Check
                          type={type}
                          id={`default-faceCleanser`}
                          label={`Face Cleansers`}
                        />
                      </div>
                    ))}
                    {['checkbox'].map((type) => (
                      <div key={`default-moisturizer`} className="mb-3">
                        <Form.Check
                          type={type}
                          id={`default-moisturizer`}
                          label={`Moisturizers`}
                        />
                      </div>
                    ))}
                    {['checkbox'].map((type) => (
                      <div key={`default-primer`} className="mb-3">
                        <Form.Check
                          type={type}
                          id={`default-primer`}
                          label={`Primers`}
                        />
                      </div>
                    ))}
                    {['checkbox'].map((type) => (
                      <div key={`default-serum`} className="mb-3">
                        <Form.Check
                          type={type}
                          id={`default-serum`}
                          label={`Serums`}
                        />
                      </div>
                    ))}
                    {['checkbox'].map((type) => (
                      <div key={`default-set`} className="mb-3">
                        <Form.Check
                          type={type}
                          id={`default-set`}
                          label={`Sets`}
                        />
                      </div>
                    ))}
                    {['checkbox'].map((type) => (
                      <div key={`default-sunCare`} className="mb-3">
                        <Form.Check
                          type={type}
                          id={`default-sunCare`}
                          label={`Sun Care`}
                        />
                      </div>
                    ))}
                    {['checkbox'].map((type) => (
                      <div key={`default-toner`} className="mb-3">
                        <Form.Check
                          type={type}
                          id={`default-toner`}
                          label={`Toner`}
                        />
                      </div>
                    ))}
                    {['checkbox'].map((type) => (
                      <div key={`default-tool`} className="mb-3">
                        <Form.Check
                          type={type}
                          id={`default-tool`}
                          label={`Tools`}
                        />
                      </div>
                    ))}
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
              {/* ------CONCERN------ */}
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <h6>Concern</h6>
                </Accordion.Header>
                <Accordion.Body>
                  <Form>
                    {['checkbox'].map((checkbox) => (
                      <div key={`default-ageing`} className="mb-3">
                        <Form.Check
                          type={checkbox}
                          id={`default-ageing`}
                          label={`Signs of Ageing `}
                        />
                      </div>
                    ))}
                    {['checkbox'].map((checkbox) => (
                      <div key={`default-dullness`} className="mb-3">
                        <Form.Check
                          type={checkbox}
                          id={`default-dullness`}
                          label={`Dullness `}
                        />
                      </div>
                    ))}
                    {['checkbox'].map((checkbox) => (
                      <div key={`default-hyperpigmintation`} className="mb-3">
                        <Form.Check
                          type={checkbox}
                          id={`default-hyperpigmintation`}
                          label={`Hyperpigmintation`}
                        />
                      </div>
                    ))}
                    {['checkbox'].map((checkbox) => (
                      <div key={`default-unevenSkinTone`} className="mb-3">
                        <Form.Check
                          type={checkbox}
                          id={`default-unevenSkinTone`}
                          label={`Uneven Skin Tone`}
                        />
                      </div>
                    ))}
                    {['checkbox'].map((checkbox) => (
                      <div key={`default-dryness`} className="mb-3">
                        <Form.Check
                          type={checkbox}
                          id={`default-dryness`}
                          label={`Dryness`}
                        />
                      </div>
                    ))}
                    {['checkbox'].map((checkbox) => (
                      <div key={`default-crowsFeet`} className="mb-3">
                        <Form.Check
                          type={checkbox}
                          id={`default-crowsFeet`}
                          label={`Crows feet`}
                        />
                      </div>
                    ))}
                    {['checkbox'].map((checkbox) => (
                      <div key={`default-visibleShine`} className="mb-3">
                        <Form.Check
                          type={checkbox}
                          id={`default-visibleShine`}
                          label={`Visible shine`}
                        />
                      </div>
                    ))}
                    {['checkbox'].map((checkbox) => (
                      <div key={`default-darkCircle`} className="mb-3">
                        <Form.Check
                          type={checkbox}
                          id={`default-darkCircle`}
                          label={`Dark circles`}
                        />
                      </div>
                    ))}
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
              {/* ------SKIN TYPE------ */}
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <h6>Skin Type</h6>
                </Accordion.Header>
                <Accordion.Body>
                  <Form>
                    {['checkbox'].map((checkbox) => (
                      <div key={`default-allType`} className="mb-3">
                        <Form.Check
                          type={checkbox}
                          id={`default-allType`}
                          label={`All Skin Types `}
                        />
                      </div>
                    ))}
                    {['checkbox'].map((checkbox) => (
                      <div key={`default-acneProne`} className="mb-3">
                        <Form.Check
                          type={checkbox}
                          id={`default-acneProne`}
                          label={`Acne-Prone Skin `}
                        />
                      </div>
                    ))}
                    {['checkbox'].map((checkbox) => (
                      <div key={`default-drySkin`} className="mb-3">
                        <Form.Check
                          type={checkbox}
                          id={`default-drySkin`}
                          label={`Dry Skin`}
                        />
                      </div>
                    ))}
                    {['checkbox'].map((checkbox) => (
                      <div key={`default-oilySkin`} className="mb-3">
                        <Form.Check
                          type={checkbox}
                          id={`default-oilySkin`}
                          label={`Oily Skin `}
                        />
                      </div>
                    ))}
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
              {/* ------FORMAT------ */}
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <h6>Format</h6>
                </Accordion.Header>
                <Accordion.Body>
                  <Form>
                    {['checkbox'].map((checkbox) => (
                      <div key={`default-anhydrousSerum`} className="mb-3">
                        <Form.Check
                          type={checkbox}
                          id={`default-anhydrousSerum`}
                          label={`Anhydrous Serum `}
                        />
                      </div>
                    ))}
                    {['checkbox'].map((checkbox) => (
                      <div key={`default-balm`} className="mb-3">
                        <Form.Check
                          type={checkbox}
                          id={`default-balm`}
                          label={`Balm `}
                        />
                      </div>
                    ))}
                    {['checkbox'].map((checkbox) => (
                      <div key={`default-emulsion`} className="mb-3">
                        <Form.Check
                          type={checkbox}
                          id={`default-emulsion`}
                          label={`Emulsion`}
                        />
                      </div>
                    ))}
                    {['checkbox'].map((checkbox) => (
                      <div key={`default-masque`} className="mb-3">
                        <Form.Check
                          type={checkbox}
                          id={`default-masque`}
                          label={`Masque`}
                        />
                      </div>
                    ))}
                    {['checkbox'].map((checkbox) => (
                      <div key={`default-oil`} className="mb-3">
                        <Form.Check
                          type={checkbox}
                          id={`default-oil`}
                          label={`Oil`}
                        />
                      </div>
                    ))}
                    {['checkbox'].map((checkbox) => (
                      <div key={`default-powder`} className="mb-3">
                        <Form.Check
                          type={checkbox}
                          id={`default-powder`}
                          label={`Powder`}
                        />
                      </div>
                    ))}
                    {['checkbox'].map((checkbox) => (
                      <div key={`default-suspesion`} className="mb-3">
                        <Form.Check
                          type={checkbox}
                          id={`default-suspesion`}
                          label={`Suspesion`}
                        />
                      </div>
                    ))}
                    {['checkbox'].map((checkbox) => (
                      <div key={`default-waterbasedSerum`} className="mb-3">
                        <Form.Check
                          type={checkbox}
                          id={`default-waterbasedSerum`}
                          label={`Water-Based Serum`}
                        />
                      </div>
                    ))}
                    {['checkbox'].map((checkbox) => (
                      <div key={`default-waterbasedGel`} className="mb-3">
                        <Form.Check
                          type={checkbox}
                          id={`default-waterbasedGel`}
                          label={`Water-Based Gel`}
                        />
                      </div>
                    ))}
                    {['checkbox'].map((checkbox) => (
                      <div key={`default-waterbasedToner`} className="mb-3">
                        <Form.Check
                          type={checkbox}
                          id={`default-waterbasedToner`}
                          label={`Water-Based Toner`}
                        />
                      </div>
                    ))}
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col id="category-right" lg={9}>
            <Row>
              <div id="category-right-heading">
                <h1>The Ordinary Products</h1>
              </div>
              <div id="category-right-dropdown">
                <p className="mb-0 d-flex align-items-center d-none d-lg-flex">
                  Showing 50 of 50
                </p>
                <Dropdown className="d-inline" autoClose="inside">
                  <Dropdown.Toggle id="dropdown-autoclose-inside">
                    {selectedItem}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      href="#"
                      onClick={() => handleItemClick('Most Relevant')}
                    >
                      Sort: Most Relevant
                    </Dropdown.Item>
                    <Dropdown.Divider />

                    <Dropdown.Item
                      href="#"
                      onClick={() => handleItemClick('Price low to high')}
                    >
                      Price low to high
                    </Dropdown.Item>
                    <Dropdown.Divider />

                    <Dropdown.Item
                      href="#"
                      onClick={() => handleItemClick('Price high to low')}
                    >
                      Price high to low
                    </Dropdown.Item>
                    <Dropdown.Divider />

                    <Dropdown.Item
                      href="#"
                      onClick={() => handleItemClick('Top Rated')}
                    >
                      Top Rated
                    </Dropdown.Item>
                    <Dropdown.Divider />

                    <Dropdown.Item
                      href="#"
                      onClick={() => handleItemClick('Best Seller')}
                    >
                      Best Seller
                    </Dropdown.Item>
                    <Dropdown.Divider />

                    <Dropdown.Item
                      href="#"
                      onClick={() => handleItemClick('Newest')}
                    >
                      Newest
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              {Array.from({ length: 10 }, (_, index) => (
                <Col key={index} xs={6} md={4} className="mb-4">
                  <Card id="category-right-card">
                    <Card.Img variant="top" src={Pic1} />
                    <Card.Body>
                      <h5>Title goes here</h5>
                      <Card.Text>
                        <div id="category-stars">
                          <img src={yellowStar}></img>
                          <img src={yellowStar}></img>
                          <img src={yellowStar}></img>
                          <img src={yellowStar}></img>
                          <img src={transStar}></img>
                          <span>
                            {'('}1000+{')'}
                          </span>
                        </div>

                        <div className="mt-5">
                          <h6>Price goes here</h6>
                          <hr></hr>
                          <Col>
                            <h6 style={{ margin: '0' }}>Target</h6>
                            <p>Target data goes here</p>
                          </Col>
                          <Col>
                            <h6 style={{ margin: '0' }}>Suited to</h6>
                            <p>Skin type data goes here</p>
                          </Col>
                        </div>
                      </Card.Text>
                      <div>
                        <button>
                          <img
                            src={Cart}
                            style={{ width: '20px', marginRight: '0.5rem' }}
                          ></img>
                          ADD TO CART
                        </button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Category;
