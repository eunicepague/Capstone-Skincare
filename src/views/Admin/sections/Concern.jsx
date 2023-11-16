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
import './Concern.css';

const Concern = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container fluid>
      <section id="concern-content">
        <h3>Concerns</h3>
        <div id="concern-btnContainer">
          <button id="concern-btn" onClick={handleShow}>
            Add Concern
          </button>
        </div>

        <Row>
          <Col>
            <Table striped style={{ marginTop: '2rem ' }}>
              <tbody>
                <tr>
                  <td id="concern-table">1. Concern Sample</td>
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
          <Modal.Body id="concern-modal">
            <h4 style={{ marginBottom: '2rem', fontWeight: 'bold' }}>
              ADD A CONCERN
            </h4>
            <Form>
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Control
                  placeholder="Write a Concern Name"
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

export default Concern;
