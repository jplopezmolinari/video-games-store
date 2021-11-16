import React from "react";
import { useSelector } from "react-redux";
import { Accordion, Table, Row, Col } from "react-bootstrap";

export default function () {
  const orders = useSelector((state) => state.users.allOrders);

  return (
    <div>
        <Row className='mt-3 mb-3'>
            <Col></Col>
            <Col xs={8}>
      {orders?.map(({ id, date, status, price, videogames }) => (
        <Accordion defaultActiveKey="" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Nº Order: {id}</Accordion.Header>
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
                    <td>{videogames.join(', ')}</td>
                  </tr>
                </tbody>
              </Table>
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
