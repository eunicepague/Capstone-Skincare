// import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import SamplePic from './../../../assets/Azelaic.jpg';
import './Products.css';

const Products = () => {
  return (
    <Container fluid>
      <section id="adminProduct-content">
        <Row>
          <h3>Products</h3>
          <Col>
            <div className="admin-product">
              <table id="product-table">
                <tr id="adminProduct-tableHead">
                  <th>Product Title</th>
                  <th>Main Description</th>
                  <th>Target</th>
                  <th>Suited</th>
                  <th>Format</th>
                  <th>Ingredients</th>
                  <th>Description</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Product Category</th>
                  <th>Product Concern</th>
                  <th>Product Image Here</th>
                  <th>Action</th>
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
      </section>
    </Container>
  );
};

export default Products;
