import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const FeaturedWork = () => {
  return (
    <div id="featuredwork">
      <Container>
        <Row>
          <Col>
            <div>
              <h1>Katherine Perez</h1>
            </div>
            <div id="contents">
              <p>About</p>
              <p>Services</p>
              <p>Contact</p>
            </div>
          </Col>
          <Col>
            <div id="image">Card</div>
            <div id="letter">
              <h2>Note to Reader:</h2>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FeaturedWork;
