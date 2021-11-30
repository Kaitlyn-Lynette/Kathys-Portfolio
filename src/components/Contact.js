import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useFormspark } from "@formspark/use-formspark";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


const FORMSPARK_FORM_ID = "3GPDUIaz";

const Contact = () => {
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const [message, setMessage] = useState("");
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")


  const onSubmit = async (e) => {
    e.preventDefault();
    await submit({ firstName, lastName, email, message });
    console.log("submitted!")
    setMessage("");
    setFirstName("");
    setLastName("");
    setEmail("");
  };

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
        <Form onSubmit={onSubmit}>
          <Row>
            <Col>
              <Form.Control 
              placeholder="First name"
              value={firstName} 
              id="firstname" 
              name="firstname"
              onChange={(e) => setFirstName(e.target.value)}
              />
            </Col>
            <Col>
              <Form.Control 
              placeholder="Last name"
              value={lastName}
              id="lastname" 
              name="lastname"
              onChange={(e) => setLastName(e.target.value)}
              />
            </Col>
          </Row>

          <Row>
            <Col style={{ paddingTop: "20px" }}>
              <Form.Control 
              type="email" 
              placeholder="Enter email" 
              id="email" 
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
                style={{ paddingTop: "20px" }}
              >
                <Form.Control
                  as="textarea"
                  placeholder="Enter your message"
                  rows={3}
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
        <Button type="submit" className="rwc-button" disabled={submitting}>
        Contact Me!
        </Button>
        </Form>
      </Col>
    </Row>
  </Container>
</div>
  )
}

export default Contact

