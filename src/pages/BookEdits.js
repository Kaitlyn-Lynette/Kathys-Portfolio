import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import "../App.css";

const BookEdits = () => {
  return (
    <div id="bookedits">
      <Container>
        <Row>
          <Col style={{ paddingTop: "80px", paddingBottom: "30px" }} md={3}>
            <h1>Book Edits</h1>
          </Col>
          <Col md={12}>
            <p>
              I have worked one-on-one with authors copyediting and proofreading
              their manuscripts in theology, memoir, and poetry. Here are their
              published works.
            </p>
          </Col>
        </Row>
        <Row style={{ paddingTop: "30px", paddingBottom: "80px" }}>
          <Col xs={6} md={3}>
            <Image src="/images/DividedGospel211x345.png" fluid></Image>
            <p>2017</p>
          </Col>
          <Col xs={6} md={3}>
            <Image src="/images/JesusPrinciple211x345.png" fluid></Image>
            <p>2018</p>
          </Col>
          <Col xs={6} md={3}>
            <Image src="/images/PoisonousPower211x345.png" fluid></Image>
            <p>2020</p>
          </Col>
          <Col xs={6} md={3}>
            <Image src="/images/DarknesstoDestiny211x345.png" fluid></Image>
            <p>2020</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BookEdits;
