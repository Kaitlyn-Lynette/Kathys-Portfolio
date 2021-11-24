import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import "../App.css";

const CopyWriting = () => {
  return (
    <div
      id="copywriting"   
    >
      <Container>
        <Row>
          <Col style={{ paddingTop: "80px", paddingBottom: "30px", textAlign: "center"}} md={12}>
            <h1>Copywriting </h1>
          </Col>
          <Col md={{span: 6, offset: 3}} style={{ textAlign: "center", paddingBottom: "40px" }}>
            <p>
              I have created, as well as followed, the brand voice for
              businesses and helped them share their stories on their websites.
            </p>
          </Col>
        </Row>
        <Row style={{ paddingTop: "30px", paddingBottom: "80px", textAlign: "center"}}>
          <Col xs={12} md={4}>
            <Image src="/images/dummy_pic.jpeg" fluid></Image>
          </Col>
          <Col xs={12} md={4}>
            <Image src="/images/dummy_pic.jpeg" fluid></Image>
          </Col>
          
          <Col xs={12} md={4}>
            <Image src="/images/dummy_pic.jpeg" fluid></Image>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CopyWriting;
