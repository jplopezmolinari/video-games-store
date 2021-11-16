import React from "react";
import { Container, Row, Col } from "react-bootstrap";
function Footer() {
  return (
    <div>
      <Container
        fluid
        className="text-center bg-secondary text-white pt-3 pb-3"
      >
        <Row>
          <Col>Copyright Steam Verde 2021</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
