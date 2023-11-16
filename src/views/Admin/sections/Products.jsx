// import React from 'react'
import { useState } from 'react';
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import SamplePic from './../../../assets/Azelaic.jpg';
import './Products.css';

const Products = () => {
  const [lgShow, setLgShow] = useState(false);

  return (
    <Container fluid>
      <section id="adminProduct-content">
        <h3>Products</h3>
        <div id="product-btnContainer">
          <button id="product-btn" onClick={() => setLgShow(true)}>
            Add Product
          </button>
        </div>
        <Row>
          <Col>
            <div className="admin-product">
              <table id="product-table">
                <tr id="adminProduct-tableHead">
                  <th style={{ width: '22rem' }}>Product Title</th>
                  <th style={{ width: '20rem' }}>Main Description</th>
                  <th style={{ width: '10rem' }}>Target</th>
                  <th style={{ width: '10rem' }}>Suited</th>
                  <th style={{ width: '10rem' }}>Format</th>
                  <th style={{ width: '20rem' }}>Ingredients</th>
                  <th style={{ width: '20rem' }}>Description</th>
                  <th style={{ width: '7rem' }}>Quantity</th>
                  <th style={{ width: '7rem' }}>Price</th>
                  <th style={{ width: '7rem' }}>Product Category</th>
                  <th style={{ width: '7rem' }}>Product Concern</th>
                  <th style={{ width: '10rem' }}>Product Image Here</th>
                  <th style={{ width: '7rem' }}>Action</th>
                </tr>
                <tr id="adminProduct-tableBody">
                  <td>sample sample sample</td>
                  <td>sample sample sample</td>
                  <td className="text-center">Lorem ipsum dolor sit amet.</td>
                  <td className="text-center">Lorem ipsum dolor sit amet.</td>
                  <td className="text-center">Lorem ipsum dolor sit amet.</td>
                  <td>Lorem ipsum dolor sit amet.</td>
                  <td>Lorem ipsum dolor sit amet.</td>

                  <td className="text-center">Lorem ipsum dolor sit amet.</td>
                  <td className="text-center">Lorem ipsum dolor sit amet.</td>
                  <td className="text-center">Lorem ipsum dolor sit amet.</td>
                  <td className="text-center">Lorem ipsum dolor sit amet.</td>
                  <td className="text-center">
                    <img src={SamplePic}></img>
                  </td>
                  <td className="text-center">
                    <Col id="adminProduct-btn">
                      <Button variant="success" className="mx-2">
                        Edit
                      </Button>
                      <Button variant="danger">Delete</Button>
                    </Col>
                  </td>
                </tr>
              </table>
            </div>
          </Col>
        </Row>

        <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
          id="product-modal"
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <h4>Add Product</h4>
            <Form>
              {/* Product Title: */}
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalProductTitle"
              >
                <Form.Label column sm={3}>
                  Product Title:
                </Form.Label>
                <Col sm={9}>
                  <Form.Control placeholder="ProductTitle" />
                </Col>
              </Form.Group>

              {/*Main Description:  */}
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalMainDescription"
              >
                <Form.Label column sm={3}>
                  Main Description:
                </Form.Label>
                <Col sm={9}>
                  <Form.Control placeholder="MainDescription" />
                </Col>
              </Form.Group>

              {/*Target:  */}
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalTarget"
              >
                <Form.Label column sm={3}>
                  Target:
                </Form.Label>
                <Col sm={9}>
                  <Form.Control placeholder="Target" />
                </Col>
              </Form.Group>

              {/* Suited:  */}
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalSuited"
              >
                <Form.Label column sm={3}>
                  Suited:
                </Form.Label>
                <Col sm={9}>
                  <Form.Control placeholder="Suited" />
                </Col>
              </Form.Group>

              {/* Format:  */}
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalFormat"
              >
                <Form.Label column sm={3}>
                  Format:
                </Form.Label>
                <Col sm={9}>
                  <Form.Control placeholder="Format" />
                </Col>
              </Form.Group>

              {/*  Ingredients:  */}
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalIngredients"
              >
                <Form.Label column sm={3}>
                  Ingredients:
                </Form.Label>
                <Col sm={9}>
                  <Form.Control as="textarea" placeholder="Ingredients" />
                </Col>
              </Form.Group>

              {/*  Description:  */}
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalDescription"
              >
                <Form.Label column sm={3}>
                  Description:
                </Form.Label>
                <Col sm={9}>
                  <Form.Control as="textarea" placeholder="Description" />
                </Col>
              </Form.Group>

              {/* Quantity:  */}
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalQuantity"
              >
                <Form.Label column sm={3}>
                  Quantity:
                </Form.Label>
                <Col sm={9}>
                  <Form.Control placeholder="Quantity" />
                </Col>
              </Form.Group>

              {/* Price:  */}
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalPrice"
              >
                <Form.Label column sm={3}>
                  Price:
                </Form.Label>
                <Col sm={9}>
                  <Form.Control placeholder="Price" />
                </Col>
              </Form.Group>

              {/* Product Category:  */}
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalProductCategory"
              >
                <Form.Label column sm={3}>
                  Product Category:
                </Form.Label>
                <Col sm={9}>
                  <Form.Control placeholder="ProductCategory" />
                </Col>
              </Form.Group>

              {/* Product Concern:*/}
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalProductConcern"
              >
                <Form.Label column sm={3}>
                  Product Concern:
                </Form.Label>
                <Col sm={9}>
                  <Form.Control placeholder="ProductConcern" />
                </Col>
              </Form.Group>

              {/* Product Image:  */}
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalImage"
              >
                <Form.Label column sm={3}>
                  Product Image:
                </Form.Label>
                <Col sm={9}>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Control type="file" label="Choose file" />
                  </Form.Group>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 10 }}>
                  <button type="submit">Submit</button>
                </Col>
              </Form.Group>
            </Form>
          </Modal.Body>
        </Modal>
      </section>
    </Container>
  );
};

export default Products;
