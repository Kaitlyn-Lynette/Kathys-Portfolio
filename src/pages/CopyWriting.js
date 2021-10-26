import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

const CopyWriting = () => {
  return (
    <div
      id="copywriting"
      style={{
        backgroundColor: "#b6ccc8",
        paddingTop: "80px",
        paddingBottom: "100px",
      }}
    >
      {/* <div id="copyTitle" style={{ paddingBottom: "50px" }}>
        <Row>
          <Col md={{ span: 2, offset: 2 }}>
            <h1>Copy Writing </h1>
          </Col>
        </Row>
      </div> */}
      <Container>
        <Row>
          <Col md={4} style={{paddingBottom: "70px" }}>
            <h1>Copy Writing </h1>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <Image src="/images/CopyWritingExample.png"></Image>
          </Col>
          <Col md={{ span: 3, offset: 3 }}>
            <h4>Blend: Coffee + CoWork</h4>
          </Col>
        </Row>
        <Row style={{ paddingTop: "80px" }}>
          <Col md={2}>
            <Image src="/images/CopyWritingExample.png"></Image>
          </Col>
          <Col md={{ span: 3, offset: 3 }}>
            <h4>Example #2</h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CopyWriting;
