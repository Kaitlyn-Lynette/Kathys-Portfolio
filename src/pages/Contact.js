import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ContactForm from "../components/ContactForm";
import "../App.css";

const Contact = () => {
  return (
    <div id="contact">
      <Container>
        <Row>
          <Col md={6} className="contact-form">
            <h5>say hello</h5>
            <h4>
              If you have any questions or want to know more, please don't
              hesitate to get in contact with me
            </h4>
          </Col>
          <Col md={6}>
          <ContactForm></ContactForm>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
