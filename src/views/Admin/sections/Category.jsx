// import React from 'react';
import { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Modal,
  Button,
  Form,
} from "react-bootstrap";
import axios from "../../../axios";
import "./Category.css";

const Category = () => {
  const [show, setShow] = useState(false);
  const [categories, setCategories] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    setName(e.target.value);
  };
  const getCatgories = async () => {
    try {
      const response = await axios.get("/category");
      setCategories(response.data.data);
      console.log(response);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const addCategories = async () => {
    try {
      const response = await axios.post("/category", { name: name });
      handleClose()
      
      console.log(response);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    // When the component mounts, load categories
    getCatgories();
  }, []);

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
            <Table striped style={{ marginTop: "2rem " }}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((item, index) => (
                  <>
                    <tr>
                      <td>{index}</td>
                      <td>{item.name}</td>
                      <td className="text-center">
                        <Button variant="success" className="mx-2">
                          Edit
                        </Button>
                        <Button variant="danger">Delete</Button>
                      </td>
                    </tr>
                  </>
                ))}
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
            <h4 style={{ marginBottom: "2rem", fontWeight: "bold" }}>
              ADD A CATEGORY
            </h4>
            <Form>
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Control
                  placeholder="Write a Category Name"
                  style={{ height: "3rem" }}
                  name="name"
                  value={name}
                  onChange={handleInputChange}
                />
                
              </Form.Group>
            </Form><button onClick={() => addCategories()}>Submit</button>
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
