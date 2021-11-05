import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

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
        <Row style={{ paddingTop: "20px", textAlign: "center" }}>
          <Col md={4}>
            <Card className="svs h-100">
              <Card.Title>
                <h3>Write</h3>
              </Card.Title>
              <Card.Text>
                <p>website copy, social media, business plan</p>
              </Card.Text>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="svs h-100">
              <Card.Title>
                <h3>Edit</h3>
              </Card.Title>
              <Card.Text>
                <p>
                  book, thesis paper, passionate project, blog, social media
                </p>
              </Card.Text>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="svs h-100">
            <Card.Title>
            <h3>Speak</h3>
            </Card.Title>
            <Card.Text>
            <p>about topics related to x, y, z </p>
            </Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
