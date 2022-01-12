import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../App.css";

const Portfolio = () => {
  return (
    <div id="bookedits">
      <Container>
        <Row>
          <Col className="port-subtitle" md={4}>
            <h3>Edits & Proofs:</h3>
          </Col>
          <Col
            md={6}
            sm={8}
            className="edits-proofs"
            style={{ textAlign: "justify" }}
          >
            <p>
              I’ve been in on some pretty stellar editing and proofreading
              manuscripts and copy for some of my network’s most ambitious
              authors. I helped them get their stories and ideas across and made
              sure they sounded good doing it. I especially would like to
              highlight my work with C Lenoir Publishing.
            </p>

            <ul className="fa-ul">
              <li>
                <FontAwesomeIcon
                  icon={["fas", "book-open"]}
                  size="sm"
                  pull="right"
                  listItem
                />
                <a href="https://feliciakirksey.com/">
                  From Darkness To Destiny
                </a>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={["fas", "book-open"]}
                  size="sm"
                  pull="right"
                  listItem
                />
                <a href="https://www.amazon.com/morning-Jazzmine-Bustamante/dp/1737483815/ref=sr_1_2?keywords=jazzmine+bustamante&qid=1638636055&sr=8-2">
                  In the Morning
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        <Row style={{ paddingTop: "60px", paddingBottom: "80px" }}>
          <Col className="port-subtitle" md={4}>
            <h3>Copywriting:</h3>
          </Col>
          <Col md={6} style={{ textAlign: "justify" }}>
            <p>
              It’s one thing to hustle, it’s another to make sure you’re staying
              consistent with values, voice, and brand identity. Curating copy
              is a passion of mine and one of my favorite projects I’ve worked
              on has been{" "}
              <a href="https://www.blendbayridge.com/">
                Blend Coffee + Cowork
              </a>
              . Owned and operated by native Bay Ridge, Brooklynite.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;
