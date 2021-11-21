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
          <Col md={12} style={{ textAlign: "center", paddingBottom: "40px" }}>
            <h1>Copy Writing </h1>
          </Col>
          <Col md={12} style={{ textAlign: "center", paddingBottom: "40px"}}>
            <p>
              I have created and followed the brand voice for local businesses and
              helped share their stories on their websites. Here are their
              websites.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={{ span: 4, offset: 3 }}>
            <Image src="/images/copy_blend.png" fluid></Image>
          </Col>
          <Col xs={12} md={3} id="copy-project">
            <h5><a href="https://www.blendbayridge.com/">Blend: Coffee + CoWork</a></h5>
          </Col>
        </Row>
        <Row style={{ paddingTop: "80px" }}>
          <Col md={{ span: 4, offset: 3 }}>
          <Image src="/images/copy_alpha.png" fluid></Image>
          </Col>
          <Col md={3} id="copy-project">
            <h5><a href="https://www.instagram.com/alphabetcitycandleco/">Alphabet City Candle Co</a></h5>
            <p>Site In Progress</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CopyWriting;
