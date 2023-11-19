// import React from 'react'
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "../../../axios";
import Swal from "sweetalert2";
import "./Products.css";

const Products = () => {
  const [lgShow, setLgShow] = useState(false);
  const [allProduct, setAllProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const [concerns, setConcerns] = useState([]);

  const [product, setProduct] = useState({
    id: null,
    name: "",
    main_description: "",
    target: "",
    suited: "",
    format: "",
    ingredients: "",
    description: "",
    price: "",
    quantity: "",
    image: "product.jpg",
    category_id: "",
    concern_id: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const getAllProducts = async () => {
    try {
      const response = await axios.get(`/products`, {
        params: { orderBy: "desc", sortBy: "created_at" },
      });

      setAllProduct(response.data.data);
      console.log(response);
    } catch (error) {
      console.error("failed", error);
    }
  };

  const createOrUpdate = async () => {
    try {
      if (product.id) {
        const response = await axios.put(`/products/${product.id}`, product);
      } else {
        const response = await axios.post(`/products`, product);
      }
      setLgShow(false);
      await getAllProducts();

      console.log(response);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const getCategory = async () => {
    try {
      const response = await axios.get(`/category`);
      setCategories(response.data.data);
      console.log(response);
    } catch (error) {
      console.error("failed", error);
    }
  };

  const getConcern = async () => {
    try {
      const response = await axios.get(`/concerns`);
      setConcerns(response.data.data);
      console.log(response);
    } catch (error) {
      console.error("failed", error);
    }
  };
  const addProduct = async () => {
    setProduct({
      id: null,
      name: "",
      main_description: "",
      target: "",
      suited: "",
      format: "",
      ingredients: "",
      description: "",
      price: "",
      quantity: "",
      image: "product.jpg",
      category_id: "",
      concern_id: "",
    });
    setLgShow(true);
  };

  const editProduct = async (item) => {
    setProduct(item);
    setLgShow(true);
  };

  const delProduct = async (id) => {
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
          const response = await axios.delete(`/products/${id}`);
          await getAllProducts();
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

  useEffect(() => {
    getCategory();
    getConcern();
    getAllProducts();
  }, []);

  return (
    <Container fluid>
      <section id="adminProduct-content">
        <h3>Products</h3>
        <div id="product-btnContainer">
          <button id="product-btn" onClick={() => addProduct()}>
            Add Product
          </button>
        </div>
        <Row>
          <Col>
            <div className="admin-product">
              <table id="product-table">
                <tbody>
                  <tr id="adminProduct-tableHead">
                    <th style={{ width: "10rem" }}>Product Image</th>
                    <th style={{ width: "10rem" }}>Product Title</th>
                    <th style={{ width: "10rem" }}>Main Description</th>
                    {/* <th style={{ width: "10rem" }}>Target</th>
                  <th style={{ width: "10rem" }}>Suited</th>
                  <th style={{ width: "10rem" }}>Format</th>
                  <th style={{ width: "20rem" }}>Ingredients</th>
                  <th style={{ width: "20rem" }}>Description</th> */}
                    <th style={{ width: "2rem" }}>Quantity</th>
                    <th style={{ width: "2rem" }}>Price</th>
                    <th style={{ width: "2rem" }}>Product Category</th>
                    <th style={{ width: "2rem" }}>Product Concern</th>
                    <th style={{ width: "1rem" }}>Action</th>
                  </tr>
                  {allProduct.map((item) => (
                    <tr key={item.id} id="adminProduct-tableBody">
                      <td className="text-center">
                        <img
                          src={`./products/${item.image}`}
                          alt={item.name}
                        ></img>
                      </td>
                      <td>{item.name}</td>
                      <td>{item.main_description}</td>
                      {/* <td className="text-center">{item.target}</td>
                    <td className="text-center">{item.suited}</td>
                    <td className="text-center">{item.format}</td>
                    <td>{item.ingredients}</td>
                    <td>{item.description}</td> */}
                      <td className="text-center">{item.quantity}</td>
                      <td className="text-center">{item.price}</td>
                      <td className="text-center">{item.category.name}</td>
                      <td className="text-center">{item.concern?.name}</td>
                      <td className="text-center">
                        <Col id="adminProduct-btn">
                          <Button
                            variant="success"
                            className="mx-2"
                            onClick={() => editProduct(item)}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="danger"
                            onClick={() => delProduct(item.id)}
                          >
                            Delete
                          </Button>
                        </Col>
                      </td>
                    </tr>
                  ))}
                </tbody>
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
                <Form.Control
                  placeholder="ProductTitle"
                  name="name"
                  value={product.name}
                  onChange={handleInputChange}
                />
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
                <Form.Control
                  placeholder="MainDescription"
                  name="main_description"
                  value={product.main_description}
                  onChange={handleInputChange}
                />
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
                <Form.Control
                  placeholder="Target"
                  name="target"
                  value={product.target}
                  onChange={handleInputChange}
                />
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
                <Form.Control
                  placeholder="Suited"
                  name="suited"
                  value={product.suited}
                  onChange={handleInputChange}
                />
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
                <Form.Control
                  placeholder="Format"
                  name="format"
                  value={product.format}
                  onChange={handleInputChange}
                />
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
                <Form.Control
                  as="textarea"
                  placeholder="Ingredients"
                  name="ingredients"
                  value={product.ingredients}
                  onChange={handleInputChange}
                />
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
                <Form.Control
                  as="textarea"
                  placeholder="Description"
                  name="description"
                  value={product.discription}
                  onChange={handleInputChange}
                />
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
                <Form.Control
                  placeholder="Quantity"
                  name="quantity"
                  value={product.quantity}
                  onChange={handleInputChange}
                />
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
                <Form.Control
                  placeholder="Price"
                  name="price"
                  value={product.price}
                  onChange={handleInputChange}
                />
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
                <Form.Select
                  aria-label="Default select example"
                  name="category_id"
                  onChange={handleInputChange}
                >
                  <option>Select Category</option>
                  {categories.map((item) => (
                    <option
                      key={item.id}
                      selected={product.category_id == item.id}
                      value={item.id}
                    >
                      {item.name}
                    </option>
                  ))}
                </Form.Select>
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
                <Form.Select
                  aria-label="Default select example"
                  name="concern_id"
                  onChange={handleInputChange}
                >
                  <option>Select Concern</option>
                  {concerns.map((item) => (
                    <option
                      key={item.id}
                      selected={product.concern_id == item.id}
                      value={item.id}
                    >
                      {item.name}
                    </option>
                  ))}
                </Form.Select>
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
                <button onClick={() => createOrUpdate()} id="product-submitBtn">
                  Submit
                </button>
              </Col>
            </Form.Group>
          </Modal.Body>
        </Modal>
      </section>
    </Container>
  );
};

export default Products;
