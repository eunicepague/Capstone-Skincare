// import React from 'react';
import { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Table,
  Modal,
  Button,
  Form,
} from 'react-bootstrap';
import './Category.css';

const Category = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container fluid>
      <section id="category-content">
        <h3>Category</h3>
        <div id="category-btnContainer">
          <button id="category-btn" onClick={handleShow}>
            Add Category
          </button>
        </div>

        <Row>
          <Col>
            <Table striped id="category-table">
              <tbody>
                <tr>
                  <td>1. Sample</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>

        <Modal
          centered
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Body id="category-modal">
            <h4 style={{ marginBottom: '2rem' }}>ADD A CATEGORY</h4>
            <Form>
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Control
                  placeholder="Write a Category Name"
                  style={{ height: '3rem' }}
                />
                <button>Submit</button>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </section>
    </Container>
  );
};

export default Category;
