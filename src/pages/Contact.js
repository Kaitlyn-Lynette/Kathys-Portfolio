import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../App.css";

const Contact = () => {
  return (
    <div id="contact">
      <Container>
        <Row>
          <Col md={12} className="contact-form">
            <h5>say hello</h5>
            <h4>
            If you have any questions or want to know more, please don't hesitate to email me at tomyunderstanding@gmail.com 
            </h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
