import React, { useState } from "react";
import { useFormspark } from "@formspark/use-formspark";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../App.css";

const FORMSPARK_FORM_ID = "3GPDUIaz";

const ContactForm = () => {
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const [message, setMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");


  const [thankYou, setThankYou] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    // console.log("Submission starting", e);

    await submit({ firstName, lastName, email, message });
    // console.log("Submitting complete", result);
    setMessage("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setThankYou(`Your message has been sent successfully.`);
    // setThankYou("");
  };

 
  return (
          <Col md={6} className="contact-formspark">
            <Form onSubmit={onSubmit}>
              <Row>
                <Col style={{ color: "green" }}>{thankYou}</Col>
              </Row>
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
              <Button
                type="submit"
                className="rwc-button"
                disabled={submitting}
              >
                Contact Me!
              </Button>
           
            </Form>
          </Col>
  );
};

export default ContactForm;
