import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../App.css";

const BookEdits = () => {
  return (
    <div id="bookedits">
      <Container>
        {/* <Row>
          <Col className="port-pagetitle" md={12}>
            <h1>Past Projects</h1>
          </Col>
        </Row> */}
        <Row>
          <Col className="port-subtitle" md={6}>
            <h3>Edits & Proofs:</h3>
          </Col>
          <Col md={6} sm={8} style={{ textAlign: "justify" }}>
            <p>
              I’ve been in on some pretty stellar editing and proofreading
              manuscripts and copy for some of my network’s most ambitious
              authors. I helped them get their stories and ideas across and made
              sure they sounded good doing it. I especially would like to
              highlight my work with C Lenoir Publishing.
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={{ span: 6, offset: 6 }} className="edits-proofs">
            <ul>
              <li>
                <a href="https://feliciakirksey.com/">
                  {" "}
                  From Darkness To Destiny
                </a>{" "}
              </li>
              <li>
                <a href="https://www.amazon.com/morning-Jazzmine-Bustamante/dp/1737483815/ref=sr_1_2?keywords=jazzmine+bustamante&qid=1638636055&sr=8-2">
                  In the Morning.
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        <Row style={{ paddingTop: "60px", paddingBottom: "80px" }}>
          <Col className="port-subtitle" md={6}>
            <h3>Copywriting</h3>
          </Col>
          <Col md={6} style={{ textAlign: "justify" }}>
            <p>
              It’s one thing to hustle, it’s another to make sure you’re staying
              consistent with values, voice, and brand identity. Curating copy
              is a passion of mine and my favorite projects I’ve worked on has
              been{" "}
              <a href="https://www.blendbayridge.com/">
                Blend Coffee + Cowork{" "}
              </a>
              and ABC Candles. All owned and operated by native New Yorkers.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BookEdits;
