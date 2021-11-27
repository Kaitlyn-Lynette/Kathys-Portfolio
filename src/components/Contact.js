import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

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
            <h4>
              <a href="mailto:contact.kathy.rojas@gmail.com">
                contact.kathy.rojas@gmail.com
              </a>
            </h4>
          </Col>
          <Col md={6}>
            <Form>
              <Row>
                <Col>
                  <Form.Control placeholder="First name" />
                </Col>
                <Col>
                  <Form.Control placeholder="Last name" />
                </Col>
              </Row>

              <Row>
                <Col style={{ paddingTop: "20px" }}>
                  <Form.Control type="email" placeholder="Enter email" />
                </Col>
              </Row>

              <Row>
                <Col style={{ paddingTop: "20px" }}>
                  <Form.Control type="text" placeholder="Subject" />
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                    style={{ paddingTop: "20px" }}
                  >
                    {/* <Form.Control placeholder="Enter your message" /> */}
                    <Form.Control
                      as="textarea"
                      placeholder="Enter your message"
                      rows={3}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Contact;
