import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer: React.FC = () => (
  <footer className="bg-dark text-light py-3">
    <Container>
      <Row>
        <Col className="text-center">
          <p>&copy; 2024 Trebta</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
