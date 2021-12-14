import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

const BlogWriting = () => {
  return (
    <div id="blogwriting">
      <Container>
        <Row>
          <Col className="port-pagetitle" md={12}>
            <h1> Blog Writing</h1>
          </Col>
        </Row>
        <Row className="blog-photo-grid">

          <Col xs={6} md={4}>
            <Image
              className="blog-photo"
              src="/images/services_creativity_resize.jpg"
            ></Image>
          </Col>
          <Col className="photo-col" xs={6} md={4}>
            <Image
              className="blog-photo"
              src="/images/services_creativity_resize.jpg"
            ></Image>
          </Col>
          <Col xs={6} md={4}>
            <Image
              className="blog-photo"
              src="/images/services_creativity_resize.jpg"
            ></Image>
          </Col>
          <Col className="photo-col" xs={6} md={4}>
            <Image
              className="blog-photo"
              src="/images/services_creativity_resize.jpg"
            ></Image>
          </Col>
          <Col xs={6} md={4}>
            <Image
              className="blog-photo"
              src="/images/services_creativity_resize.jpg"
            ></Image>
          </Col>
          <Col className="photo-col" xs={6} md={4}>
            <Image
              className="blog-photo"
              src="/images/services_creativity_resize.jpg"
            ></Image>
          </Col>
  

        </Row>
      </Container>
    </div>
  );
};

export default BlogWriting;
