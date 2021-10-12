import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Services = () => {
  return (
    <div id="services">
      <Container>
        <Row>
          <h5
            style={{
              fontSize: "14px",
              letterSpacing: "0.5px",
            }}
          >
            Professional Services
          </h5>
          <h4 style={{ fontSize: "18px", lineHeight: "25px", paddingBottom: "20px" }}>
            Contact me if you're looking for a writer to ...{" "}
          </h4>
          </Row>
          <Row style={{paddingTop: "20px", textAlign: "center"}}>
          <Col md={4}>
            <h3>Write</h3>
            <p>website copy, social media, business plan</p>
          </Col>
          <Col md={4}>
            <h3>Edit</h3>
            <p>book, thesis paper, passionate project, blog, social media</p>
          </Col>
          <Col md={4}>
            <h3>Speak</h3>
            <p>about topics related to x, y, z </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
