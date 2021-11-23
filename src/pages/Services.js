import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import "../App.css"

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
          <h4
            style={{
              fontSize: "18px",
              lineHeight: "25px",
              paddingBottom: "20px",
            }}
          >
            Contact me if you're looking for a writer to ...{" "}
          </h4>
        </Row>
        <Row style={{ paddingTop: "20px", textAlign:"center"}}>
          <Col md={4}>
            <Card className="svs_list h-100">
              <Card.Img src="/images/services_creativity_resize.jpg" />
              <Card.Body>
                <Card.Title>
                  <h3>Write</h3>
                </Card.Title>
                <Card.Text>
                  <ul>
                    <li>Blog Writing</li>
                    <li>Fiction Writing</li>
                    <li>Memoir Writing</li>
                    <li>Copy Writing</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card  className="svs_list h-100">
              <Card.Img src="/images/services_edit_resize2.jpg" style={{height: "277px"}}  />
              <Card.Body>
                <Card.Title>
                  <h3>Proofreading & Editing</h3>
                </Card.Title>
                <Card.Text>
                  <ul>
                    <li>Memoirs</li>
                    <li>Essays</li>
                    <li>Poetry</li>
                    <li>Wesbite Copy</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="svs_list h-100">
              <Card.Img src="/images/services_speak_resize.jpg"/>
              <Card.Body>
                <Card.Title>
                  <h3>Speak</h3>
                </Card.Title>
                <Card.Text>
                <ul>
                    <li>Womenhood</li>
                    <li>Spirituality</li>
                    <li>Marriage</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
