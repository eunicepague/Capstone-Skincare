import { Container, Row, Col, Table } from "react-bootstrap";
// import Pic1 from "./../../assets/Ascorbyl.jpg";
import { useEffect, useState } from "react";
import axios from "./../../axios";
import "./Order.css";

const Status = () => {
  const [orders, setOrder] = useState([]);
  const [itemCount, setItemCount] = useState(0);

  const getOrder = async () => {
    try {
      const response = await axios.get("/orders");
      setOrder(response.data.data);
      setItemCount(response.data.data.length);

      console.log(response);
    } catch (error) {
      console.error("failed", error);
    }
  };

  useEffect(() => {
    getOrder();
  }, []);

  return (
    <Container>
      <section id="status-content">
        <Row className="mt-5">
          <Col>
            <h4 style={{ fontWeight: "bold" }}>ORDER</h4>
          </Col>
          <Col>{itemCount} Items</Col>
          <hr className="mb-5"></hr>
        </Row>

        {/* -------SAMPLE FIRST TABLE------- */}
        {orders.map((item) => (
          <Row className="mb-3">
            <Table striped bordered hover id="status-table" responsive="lg">
              <thead id="status-tableHead">
                <tr>
                  <th>
                    <Col>
                      <h5>QUANTITY</h5>
                      <p>{item.quantity}</p>
                    </Col>
                  </th>
                  <th>
                    <Col>
                      <h5>TOTAL</h5>
                      <p>{item.total}</p>
                    </Col>
                  </th>
                  <th>
                    <Col>
                      <h5>STATUS</h5>
                      <p>{item.status}</p>
                    </Col>
                  </th>
                  <th>
                    <Col>
                      <h5>PAYMENT TYPE</h5>
                      <p>{item.payment_type}</p>
                    </Col>
                  </th>
                  <th>
                    <Col>
                      <h5>DATE ORDERED</h5>
                      <p>{item.created_at}</p>
                    </Col>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={5} id="status-tableBody">
                    {item.order_items.map((orderItem) => (
                      <Table>
                        <thead>
                          <tr>
                            <th>
                              <Col>
                                <img
                                  src={`/products/${orderItem.product.image}`}
                                ></img>
                              </Col>
                            </th>
                            <th>
                              <Col>
                                <h6>Product Name</h6>
                                <p>{orderItem.product.name}</p>
                              </Col>
                            </th>
                            <th>
                              <Col>
                                <h6>Quantity</h6>
                                <p>{orderItem.quantity}</p>
                              </Col>
                            </th>
                            <th>
                              <Col>
                                <h6>Price</h6>
                                <p>{orderItem.product.price}</p>
                              </Col>
                            </th>
                            <th>
                              <Col>
                                <h6>Total Price</h6>
                                <p>{orderItem.total}</p>
                              </Col>
                            </th>
                          </tr>
                        </thead>
                      </Table>
                    ))}
                  </td>
                </tr>
              </tbody>
            </Table>
          </Row>
        ))}
      </section>
    </Container>
  );
};

export default Status;
