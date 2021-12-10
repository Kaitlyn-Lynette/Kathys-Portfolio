import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

const BlogWriting = () => {
  return (
    <div id="blogwriting">
      <Container fluid> 
      <Row>
          <Col style={{ paddingTop: "80px", paddingBottom: "30px", textAlign: "center"}} md={12}>
            <h1> Blog Writing</h1>
          </Col>
        </Row>
        <Row
          style={{
            paddingTop: "80px",
            paddingBottom: "30px",
            paddingLeft: "4%"
          }}
        >
          <Col md={4}> 
            <Image src="/images/services_creativity_resize.jpg" style={{width: "700px", height: "500px"}}></Image>
          </Col>
          <Col md={4}>
            <Image src="/images/services_creativity_resize.jpg" style={{width: "700px", height: "500px"}}></Image>
          </Col>
          <Col md={4}>
            <Image src="/images/services_creativity_resize.jpg" style={{width: "700px", height: "500px"}}></Image>
          </Col>
        </Row>
        <Row
          style={{
            paddingTop: "30px",
            paddingBottom: "80px",
            paddingLeft: "4%"
          }}
        >
          <Col md={4} > 
            <Image src="/images/services_creativity_resize.jpg" style={{width: "700px", height: "500px"}}></Image>
          </Col>
          <Col md={4}>
            <Image src="/images/services_creativity_resize.jpg" style={{width: "700px", height: "500px"}}></Image>
          </Col>
          <Col md={4}>
            <Image src="/images/services_creativity_resize.jpg" style={{width: "700px", height: "500px"}}></Image>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BlogWriting;
