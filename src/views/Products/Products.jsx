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
import swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import Cart from './../../assets/cart-icon.png';
import Pic1 from './../../assets/Toner.jpg';
import yellowStar from './../../assets/yellowStar.png';
import transStar from './../../assets/transStar.png';
import axios from './../../axios';
import './Products.css';
import { useLocation } from 'react-router';
import { useNavigate, Link } from 'react-router-dom';

const Category = () => {
  const [selectedItem, setSelectedItem] = useState('Sort Products');
  const [products, setProducts] = useState([]);
  const [category_id, setCategoryId] = useState([]);
  const [concern_id, setConcernId] = useState([]);
  const [orderBy, setOrderBy] = useState('desc');
  const [sortBy, setSortBy] = useState('id');
  const location = useLocation();
  const [statusLoad, setStatusLoad] = useState(false);
  const navigate = useNavigate();

  const handleItemClick = (itemText) => {
    if (itemText === 'relevant') {
      setSortBy('id');
      setOrderBy('asc');
    } else if (itemText === 'high price') {
      setSortBy('price');
      setOrderBy('desc');
    } else if (itemText === 'low price') {
      setSortBy('price');
      setOrderBy('asc');
    } else if (itemText === 'Newest') {
      setSortBy('created_at');
      setOrderBy('desc');
    }

    setSelectedItem(itemText);
  };

  const getProducts = async () => {
    const delay = 1000; // 2 seconds (in milliseconds)
    // alert(1);
    const timer = setTimeout(() => {
      const queryParams = new URLSearchParams(location.search);
      const concern = queryParams.get('concern');
      const category = queryParams.get('category');
      if (statusLoad == false) {
        setConcernId([concern]);
        setCategoryId([category]);
        setStatusLoad(true);
      }
    }, delay);

    try {
      const response = await axios.get('http://localhost:8000/api/products', {
        params: { category_id, concern_id, orderBy, sortBy },
      });
      setProducts(response.data.data);
      console.log(response);
    } catch (error) {
      console.error('failed', error);
    }
    clearTimeout(timer);
  };

  useEffect(() => {
    getConcerns();
    getCategories();
    getProducts();
  }, [concern_id, category_id, orderBy, sortBy, statusLoad]);

  // useEffect(() => {
  //   setConcernId([concern_id]); // Use the functional form of setConcernId
  // }, [concern_id]);

  const addToCart = async (product) => {
    try {
      let quantity = 1;
      let product_id = product;
      const response = await axios.post(`http://localhost:8000/api/carts`, {
        quantity,
        product_id,
      });
      swal.fire({
        position: 'top-end',
        icon: 'success',
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error('failed', error);
    }
  };

  const [categories, setCategories] = useState([]);
  const [concerns, setConcerns] = useState([]);

  const getCategories = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/category');
      setCategories(response.data.data);

      console.log(response);
    } catch (error) {
      console.error('failed', error);
    }
  };

  const getConcerns = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/concerns');
      setConcerns(response.data.data);

      console.log(response);
    } catch (error) {
      console.error('failed', error);
    }
  };

  const filterByCategory = async (id) => {
    if (category_id.includes(id)) {
      // If it's in the array, remove it
      setCategoryId((category_id) => category_id.filter((item) => item !== id));
    } else {
      // If it's not in the array, add it
      setCategoryId((category_id) => [...category_id, id]);
    }
  };

  const filterByConcerns = async (id) => {
    if (concern_id.includes(id)) {
      // If it's in the array, remove it
      setConcernId((concern_id) => concern_id.filter((item) => item !== id));
    } else {
      // If it's not in the array, add it
      setConcernId((concern_id) => [...concern_id, id]);
    }
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
                    {categories.map((item) =>
                      ['checkbox'].map((type) => (
                        <div key={item.id} className="mb-3">
                          <Form.Check
                            type={type}
                            id={`default-eyeSerum`}
                            label={item.name}
                            onClick={() => filterByCategory(item.id)}
                          />
                        </div>
                      ))
                    )}
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
                    {concerns.map((item) =>
                      ['checkbox'].map((checkbox) => (
                        <div key={item.id} className="mb-3">
                          <Form.Check
                            type={checkbox}
                            id={`default-ageing`}
                            label={item.name}
                            onClick={() => filterByConcerns(item.id)}
                          />
                        </div>
                      ))
                    )}
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
              {/* ------SKIN TYPE------ */}
              {/* <Accordion.Item eventKey="3">
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
              </Accordion.Item> */}
              {/* ------FORMAT------  */}
              {/* <Accordion.Item eventKey="4">
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
              </Accordion.Item> */}
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
                      onClick={() => handleItemClick('relevant')}
                    >
                      Sort: Most Relevant
                    </Dropdown.Item>
                    <Dropdown.Divider />

                    <Dropdown.Item
                      href="#"
                      onClick={() => handleItemClick('low price')}
                    >
                      Price low to high
                    </Dropdown.Item>
                    <Dropdown.Divider />

                    <Dropdown.Item
                      href="#"
                      onClick={() => handleItemClick('high price')}
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

                    {/* <Dropdown.Item
                      href="#"
                      onClick={() => handleItemClick('Best Seller')}
                    >
                      Best Seller
                    </Dropdown.Item>
                    <Dropdown.Divider /> */}

                    <Dropdown.Item
                      href="#"
                      onClick={() => handleItemClick('Newest')}
                    >
                      Newest
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              {products.map((product) => (
                <Col
                  onClick={() => navigate(`/products/${product.id}`)}
                  key={product}
                  xs={6}
                  md={4}
                  className="mb-4"
                >
                  <Card id="category-right-card">
                    <Card.Img
                      variant="top"
                      src={`/src/assets/${product.image}`}
                      alt={product.name}
                    />
                    <Card.Body>
                      <h5>{product.name}</h5>
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
                          <h6>{product.price}</h6>
                          <hr></hr>
                          <Col>
                            <h6 style={{ margin: '0' }}>Target</h6>
                            <p>{product.target}</p>
                          </Col>
                          <Col>
                            <h6 style={{ margin: '0' }}>Suited to</h6>
                            <p>{product.suited}</p>
                          </Col>
                        </div>
                      </Card.Text>
                      <div>
                        <button onClick={() => addToCart(product.id)}>
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
