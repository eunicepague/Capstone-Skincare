import { Container, Row, Col, Table } from 'react-bootstrap';
import Pic1 from './../../assets/Ascorbyl.jpg';
import './Status.css';

const Status = () => {
  return (
    <Container>
      <section id="status-content">
        <Row className="mt-5">
          <Col>
            <h4 style={{ fontWeight: 'bold' }}>ORDER</h4>
          </Col>
          <Col>Number of items goes here</Col>
          <hr className="mb-5"></hr>
        </Row>

        {/* -------SAMPLE FIRST TABLE------- */}
        <Row className="mb-3">
          <Table striped bordered hover id="status-table" responsive="lg">
            <thead id="status-tableHead">
              <tr>
                <th>
                  <Col>
                    <h5>QUANTITY</h5>
                    <p>quantity number goes here</p>
                  </Col>
                </th>
                <th>
                  <Col>
                    <h5>TOTAL</h5>
                    <p>total number goes here</p>
                  </Col>
                </th>
                <th>
                  <Col>
                    <h5>STATUS</h5>
                    <p>status goes here</p>
                  </Col>
                </th>
                <th>
                  <Col>
                    <h5>PAYMENT TYPE</h5>
                    <p>payment type goes here</p>
                  </Col>
                </th>
                <th>
                  <Col>
                    <h5>DATE ORDERED</h5>
                    <p>date ordered goes here</p>
                  </Col>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={5} id="status-tableBody">
                  <Table>
                    <thead>
                      <tr>
                        <th>
                          <Col>
                            <img src={Pic1}></img>
                          </Col>
                        </th>
                        <th>
                          <Col>
                            <h6>Product Name</h6>
                            <p>Product Name goes here</p>
                          </Col>
                        </th>
                        <th>
                          <Col>
                            <h6>Quantity</h6>
                            <p>Quantity number goes here</p>
                          </Col>
                        </th>
                        <th>
                          <Col>
                            <h6>Price</h6>
                            <p>Price goes here</p>
                          </Col>
                        </th>
                        <th>
                          <Col>
                            <h6>Total Price</h6>
                            <p>Total Price goes here</p>
                          </Col>
                        </th>
                      </tr>
                    </thead>
                  </Table>
                </td>
              </tr>
            </tbody>
          </Table>
        </Row>

        {/* -------SAMPLE SECOND TABLE------- */}
        <Row className="mb-3">
          <Table striped bordered hover id="status-table" responsive="lg">
            <thead id="status-tableHead">
              <tr>
                <th>
                  <Col>
                    <h5>QUANTITY</h5>
                    <p>quantity number goes here</p>
                  </Col>
                </th>
                <th>
                  <Col>
                    <h5>TOTAL</h5>
                    <p>total number goes here</p>
                  </Col>
                </th>
                <th>
                  <Col>
                    <h5>STATUS</h5>
                    <p>status goes here</p>
                  </Col>
                </th>
                <th>
                  <Col>
                    <h5>PAYMENT TYPE</h5>
                    <p>payment type goes here</p>
                  </Col>
                </th>
                <th>
                  <Col>
                    <h5>DATE ORDERED</h5>
                    <p>date ordered goes here</p>
                  </Col>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={5} id="status-tableBody">
                  <Table>
                    <thead>
                      <tr>
                        <th>
                          <Col>
                            <img src={Pic1}></img>
                          </Col>
                        </th>
                        <th>
                          <Col>
                            <h6>Product Name</h6>
                            <p>Product Name goes here</p>
                          </Col>
                        </th>
                        <th>
                          <Col>
                            <h6>Quantity</h6>
                            <p>Quantity number goes here</p>
                          </Col>
                        </th>
                        <th>
                          <Col>
                            <h6>Price</h6>
                            <p>Price goes here</p>
                          </Col>
                        </th>
                        <th>
                          <Col>
                            <h6>Total Price</h6>
                            <p>Total Price goes here</p>
                          </Col>
                        </th>
                      </tr>
                    </thead>
                  </Table>
                </td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </section>
    </Container>
  );
};

export default Status;
