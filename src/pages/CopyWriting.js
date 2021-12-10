import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import "../App.css";

const CopyWriting = () => {
  return (
    <div id="copywriting">
      <Container>
        <Row>
          <Col
            style={{
              paddingTop: "80px",
              paddingBottom: "30px",
              textAlign: "center",
            }}
            md={12}
          >
            <h1>Copywriting </h1>
          </Col>
          <Col md={{ span: 8, offset: 2 }} style={{ textAlign: "center" }}>
            <p>
              I have created, as well as followed, the brand voice for
              businesses and helped them share their stories on their websites.
            </p>
          </Col>
        </Row>
        <Row
          style={{
            paddingTop: "30px",
            paddingBottom: "80px",
            textAlign: "center",
          }}
        >
          <Col xs={12} md={6}>
            <Card className="copywriting-card h-100">
              <a href="https://www.blendbayridge.com/" target="blank">
                <Image src="/images/copywrite_blend.jpg" fluid></Image>
              </a>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card className="copywriting-card h-100">
              <a href="https://www.blendbayridge.com/">
                <Image src="/images/copywrite_background.jpg" fluid></Image>
              </a>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CopyWriting;
