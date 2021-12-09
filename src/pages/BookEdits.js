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
          <Col style={{ paddingTop: "80px", paddingBottom: "30px", textAlign: "center"}} md={12}>
            <h1>Book Edits</h1>
          </Col>
          <Col md={{span: 8, offset: 2}} style={{textAlign: "center"}}>
            <p>
              I have worked one-on-one with authors copyediting and proofreading
              their manuscripts in theology, memoir, and poetry. Here are their
              published works.
            </p>
          </Col>
        </Row>
        <Row style={{ paddingTop: "80px"}}>
          <Col md={4} >
            <h3>Contributed Development, Editing, Proofreading, Marketing:</h3>
          </Col>
          <Col md={4} style={{textAlign: "center"}}>
            <ul>
            <h4>The Jesus Principles</h4>
            <h4>The Poisonous Power</h4>
            <h4>The Divided Gospel</h4>
            </ul>
          </Col>
          <Col md={4} style={{paddingTop: "30px", textAlign: "center"}}>
           <h4>Joseph Mattera</h4>
          </Col>
        </Row>
        <Row style={{paddingTop: "80px", paddingBottom: "80px"}}>
          <Col md={4}>
            <h3>Proofread and Copy Edited:</h3>
          </Col>
          <Col md={4} style={{textAlign: "center"}}>
            <ul>
            <h4>From Darkness To Destiny</h4>
            <h4>In the Morning</h4>
            </ul>
          </Col>
          <Col md={4} style={{textAlign: "center"}}>
            <ul>
            <h4>Felicia Kirksey</h4>
            <h4>Jazzmine Bustamante</h4>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BookEdits;
