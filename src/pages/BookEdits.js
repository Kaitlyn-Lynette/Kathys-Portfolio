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
        {/* <Row>
          <Col style={{ paddingTop: "80px", paddingBottom: "30px", textAlign: "center"}} md={12}>
            <h1>Book Edits & CopyWriting</h1>
          </Col>
          <Col md={{span: 8, offset: 2}} style={{textAlign: "center"}}>
            <p>
              I have worked one-on-one with authors copyediting and proofreading
              their manuscripts in theology, memoir, and poetry. Here are their
              published works.
            </p>
          </Col>
        </Row> */}
        <Row style={{ paddingTop: "80px"}}>
          <Col md={6} >
            <h3>Edits & Proofs:</h3>
          </Col>
          <Col md={6}>
            <p>
            I’ve been in on some pretty stellar editing and proofreading manuscripts and copy for some of my network’s most ambitious authors. I helped them get their stories and ideas across and made sure they sounded good doing it. You can find those finished works here, here, here….and here.
            </p>
          </Col>
        </Row>
        <Row style={{paddingTop: "80px", paddingBottom: "80px"}}>
          <Col md={6}>
            <h3>Copywriting</h3>
          </Col>
          <Col md={6}>
            <p>It’s one thing to hustle, it’s another to make sure you’re staying consistent with values, voice, and brand identity. Curating copy is a passion of mine and my favorite projects I’ve worked on has been Blend Coffee + Cowork and ABC Candles. All owned and operated by native New Yorkers.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BookEdits;
