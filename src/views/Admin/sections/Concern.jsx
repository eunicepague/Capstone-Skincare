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
import Swal from "sweetalert2";

const Concern = () => {
  const [show, setShow] = useState(false);
  const [concerns, setConcerns] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState("");
  const [id, setId] = useState(null);

  const handleInputChange = (e) => {
    setName(e.target.value);
  };
  const getConcerns = async () => {
    try {
      const response = await axios.get("/concerns");
      setConcerns(response.data.data);
      console.log(response);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const createOrUpdate = async () => {
    try {
      if (id) {
        const response = await axios.put(`/concerns/${id}`, { name: name });
      } else {
        const response = await axios.post("/concerns", { name: name });
      }
      handleClose();
      await getConcerns();
      console.log(response);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const delConcern = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.delete(`/concerns/${id}`);
          await getConcerns();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });

          // Assuming getCategories function is defined elsewhere
        } catch (error) {
          console.error("Error:", error);
        }
      }
    });
  };

  const addConcern = async () => {
    handleShow();
    setId(null);
    setName("");
  };

  const editConcern = async (item) => {
    setName(item.name);
    setId(item.id);
    handleShow();
  };

  useEffect(() => {
    // When the component mounts, load categories
    getConcerns();
  }, []);

  return (
    <Container fluid>
      <section id="category-content">
        <h3>Concern</h3>
        <div id="category-btnContainer">
          <button id="category-btn" onClick={() => addConcern()}>
            Add Concern
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
                {concerns.map((item, index) => (
                  <>
                    <tr>
                      <td>{index}</td>
                      <td>{item.name}</td>
                      <td className="text-center">
                        <Button
                          variant="success"
                          className="mx-2"
                          onClick={() => editConcern(item)}
                        >
                          Edit
                        </Button>
                        <Button
                          onClick={() => delConcern(item.id)}
                          variant="danger"
                        >
                          Delete
                        </Button>
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
              ADD A CONCERN
            </h4>
            <Form>
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Control
                  placeholder="Write a Concern Name"
                  style={{ height: "3rem" }}
                  name="name"
                  value={name}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Form>
            <button onClick={() => createOrUpdate()}>Submit</button>
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
