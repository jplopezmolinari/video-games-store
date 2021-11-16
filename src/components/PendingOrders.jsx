import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Accordion, Table, Row, Col, Button, Alert } from "react-bootstrap";
import {
  confirmOrder,
  getPendingOrders,
  rejectOrder,
} from "../store/ordersReducer";

export default function () {
  const pendingOrders = useSelector((state) => state.orders.pendingOrders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPendingOrders());
  }, [pendingOrders]);

  const handleConfirm = (orderId) => {
    dispatch(confirmOrder(orderId));
  };

  const handleReject = (orderId) => {
    dispatch(rejectOrder(orderId));
  };

  return (
    <div>
      <Row className="mt-3 mb-3">
        <Col></Col>
        <Col xs={8}>
          {pendingOrders.length === 0 ? (
            <Alert style={{ margin: 15 }} variant="success">
              There is any pending order! Keep waiting!
            </Alert>
          ) : null}
          {pendingOrders?.map(({ id, date, status, price, videogames }) => (
            <Accordion defaultActiveKey="" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Pending Order ID: #{id}</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover>
                    <thead>
                      <h5>Order Details</h5>
                      <tr>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Price</th>
                        <th>Products</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{date}</td>
                        <td>{status}</td>
                        <td>{`US $${price}`}</td>
                        <td>{videogames.join(", ")}</td>
                      </tr>
                    </tbody>
                  </Table>
                  <Button
                    variant="success"
                    onClick={() => handleConfirm(id)}
                    style={{ marginRight: 10 }}
                  >
                    Confirm Order
                  </Button>
                  <Button variant="danger" onClick={() => handleReject(id)}>
                    Reject Order
                  </Button>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          ))}
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
}
