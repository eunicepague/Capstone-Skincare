import { Container, Row, Col, Table } from 'react-bootstrap';
// import Pic1 from "./../../assets/Ascorbyl.jpg";
import { useEffect, useState } from 'react';
import axios from './../../axios';
import './Order.css';

const Status = () => {
  const [orders, setOrder] = useState([]);
  const [itemCount, setItemCount] = useState(0);

  const getOrder = async () => {
    try {
      const response = await axios.get('/orders');

      setOrder(response.data.data);
      setItemCount(response.data.data.length);

      console.log(response);
    } catch (error) {
      console.error('failed', error);
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
            <h4 style={{ fontWeight: 'bold' }}>ORDER</h4>
          </Col>
          <Col>{itemCount} Items</Col>
          <hr className="mb-5"></hr>
        </Row>

        {/* -------SAMPLE FIRST TABLE------- */}
        {orders.map((item) => (
          <Row key={item.id} className="mb-3">
            <Table striped bordered hover id="status-table" responsive="lg">
              <thead id="status-tableHead">
                <tr>
                  <th>
                    <Col>
                      <h5>Quantity</h5>
                      <p>{item.quantity}</p>
                    </Col>
                  </th>
                  <th>
                    <Col>
                      <h5>Total</h5>
                      <p>₱ {item.total}</p>
                    </Col>
                  </th>
                  <th>
                    <Col>
                      <h5>Status</h5>
                      <p>{item.status}</p>
                    </Col>
                  </th>
                  <th>
                    <Col>
                      <h5>Payment Type</h5>
                      <p>{item.payment_type}</p>
                    </Col>
                  </th>
                  <th>
                    <Col>
                      <h5>Date Ordered</h5>
                      <p>{item.created_at}</p>
                    </Col>
                  </th>
                </tr>
              </thead>
              <tbody id="table-body">
                <tr>
                  <td colSpan={5} id="status-tableBody">
                    {item.order_items.map((orderItem) => (
                      <Table key={orderItem.id}>
                        <thead>
                          <tr>
                            <th>
                              <Col className="d-flex justify-content-center">
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
                                <h6 className="d-flex justify-content-center">
                                  Quantity
                                </h6>
                                <p className="d-flex justify-content-center">
                                  {orderItem.quantity}
                                </p>
                              </Col>
                            </th>
                            <th>
                              <Col>
                                <h6 className="d-flex justify-content-center">
                                  Price
                                </h6>
                                <p className="d-flex justify-content-center">
                                  {orderItem.product.price}
                                </p>
                              </Col>
                            </th>
                            <th>
                              <Col>
                                <h6 className="d-flex justify-content-center">
                                  Total Price
                                </h6>
                                <p className="d-flex justify-content-center">
                                  {orderItem.total}
                                </p>
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
