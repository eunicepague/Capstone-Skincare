// import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import axios from '../../../axios';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import './Order.css';

const Order = () => {
  const [allOrder, setAllOrder] = useState([]);
  const [status, setStatus] = useState('');
  const [btnColor, setBtnColor] = useState('');

  const getallOrder = async () => {
    try {
      const response = await axios.get('/all_orders');
      setAllOrder(response.data.data);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const submitStatus = async (status, id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, update it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.put(`/orders/${id}`, { status: status });
          await getallOrder();
          Swal.fire({
            title: status,
            text: 'Order status has been updated!',
            icon: 'success',
          });
        } catch (error) {
          console.error('Error:', error);
        }
      }
    });
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
                  <th style={{ width: '10rem' }}>Date</th>
                  <th style={{ width: '20rem' }}>Client Name</th>
                  <th style={{ width: '20rem' }}>Product List</th>
                  <th style={{ width: '10rem' }}>Product Cost</th>
                  <th style={{ width: '10rem' }}>Status</th>
                  <th style={{ width: '10rem' }}>Action</th>
                </tr>
                {allOrder.map((item) => (
                  <tr key={item.id} id="adminOrdertableBody">
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
                    <td id="adminOrder-action">
                      {item.status === 'Pending' && (
                        <Button
                          onClick={() => submitStatus('For Packaging', item.id)}
                          size="sm"
                          variant="primary"
                        >
                          For Packaging
                        </Button>
                      )}

                      {item.status === 'For Packaging' && (
                        <Button
                          size="sm"
                          onClick={() =>
                            submitStatus('Out for Delivery', item.id)
                          }
                          variant="warning"
                        >
                          Out for Delivery
                        </Button>
                      )}

                      {item.status === 'Out for Delivery' && (
                        <Button
                          size="sm"
                          onClick={() => submitStatus('Delivered', item.id)}
                          variant="info"
                        >
                          Deliver
                        </Button>
                      )}
                      {item.status === 'Delivered' && (
                        <Button disabled size="sm" variant="success">
                          Delivered
                        </Button>
                      )}
                      {item.status === 'Cancelled' && (
                        <Button disabled size="sm" variant="danger">
                          Cancelled
                        </Button>
                      )}
                      {(item.status === 'Pending' ||
                        item.status === 'For Packaging') && (
                        <Button
                          size="sm"
                          onClick={() => submitStatus('Cancelled', item.id)}
                          variant="danger"
                        >
                          Cancel
                        </Button>
                      )}
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
