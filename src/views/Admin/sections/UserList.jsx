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
import "./UserList.css";
import Swal from "sweetalert2";

const Category = () => {
  const [show, setShow] = useState(false);
  const [users, setUsers] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState("");
  const [id, setId] = useState(null);

  const handleInputChange = (e) => {
    setName(e.target.value);
  };
  const getUsers = async () => {
    try {
      const response = await axios.get("/users");
      setUsers(response.data.data);
      console.log(response);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const createOrUpdate = async () => {
    try {
      if (id) {
        const response = await axios.put(`/category/${id}`, { name: name });
      } else {
        const response = await axios.post("/category", { name: name });
      }
      handleClose();
      await getCategories();
      console.log(response);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const delCategory = async (id) => {
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
          const response = await axios.delete(`/category/${id}`);
          await getCategories();
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

  const addCategory = async () => {
    handleShow();
    setId(null);
    setName("");
  };

  const editCategory = async (item) => {
    setName(item.name);
    setId(item.id);
    handleShow();
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Container fluid>
      <section id="category-content">
        <h3>User List</h3>
        {/* <div id="category-btnContainer">
          <button id="category-btn" onClick={() => addCategory()}>
            Add Category
          </button>
        </div> */}

        <Row>
          <Col>
            <Table striped style={{ marginTop: "2rem " }}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  {/* <th className="text-center">Action</th> */}
                </tr>
              </thead>
              <tbody>
                {users.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index}</td>
                      <td>{item.name}</td>
                      {/* <td className="text-center">
                        <Button
                          variant="success"
                          className="mx-2"
                          onClick={() => editCategory(item)}
                        >
                          Edit
                        </Button>
                        <Button
                          onClick={() => delCategory(item.id)}
                          variant="danger"
                        >
                          Delete
                        </Button>
                      </td> */}
                    </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>

        {/* <Modal
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
            </Form>
            <button onClick={() => createOrUpdate()}>Submit</button>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal> */}
      </section>
    </Container>
  );
};

export default Category;
