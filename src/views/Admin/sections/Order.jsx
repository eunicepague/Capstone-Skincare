// import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "../../../axios";
import { useEffect, useState } from "react";
import "./Order.css";

const Order = () => {
  const [allOrder, setAllOrder] = useState([]);

  const getallOrder = async () => {
    try {
      const response = await axios.get("/all_orders");
      setAllOrder(response.data.data);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getallOrder();
  }, []);

  return (
    <Container fluid>
      <section id="adminOrder-content">
        <Row>
          <h3>Orders</h3>
          <Col>
            <div className="admin-Order">
              <table id="order-table">
                <tr id="adminOrder-tableHead">
                  <th>Order Id</th>
                  <th style={{ width: "10rem" }}>Date</th>
                  <th style={{ width: "20rem" }}>Client Name</th>
                  <th style={{ width: "20rem" }}>Product List</th>
                  <th style={{ width: "10rem" }}>Product Cost</th>
                  <th style={{ width: "10rem" }}>Status</th>
                  <th style={{ width: "10rem" }}>Action</th>
                </tr>
                {allOrder.map((item) => (
                  <tr id="adminOrdertableBody">
                    <td>{item.id}</td>
                    <td>{item.created_at}</td>
                    <td>
                      {item.first_name} {item.last_name}
                    </td>
                    <td>
                      {item.order_items.map((order) => (
                        <>
                          <p>{order.product.name}</p>
                        </>
                      ))}
                    </td>
                    <td>{item.total}</td>
                    <td>{item.status}</td>
                    <td>
                      <Button variant="primary"></Button>{" "}
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Order;
