import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../App.css";

const Portfolio = () => {
  return (
    <div id="guestwriting">
      <Container>
        <Row>
          <Col className="port-pagetitle" md={12}>
            <h1>Guest Writing</h1>
          </Col>
          <Col
            className="port-subtitle"
            md={{ span: 8, offset: 2 }}
            style={{ textAlign: "justify" }}
          >
            <p>
              I love sharing my writing and partnering with a variety of
              publications. I am honored to have my guest writing featured in
              these lovely publications.
            </p>
          </Col>
        </Row>
        <Row style={{ paddingBottom: "40px" }}>
          <Col md={12} className="port-subtitle">
            <p>
              <a href="https://justbetweenus.org/everyday-faith/tell-your-story/wholeness-for-the-lonely-heart/">
                Wholeness for the Lonely Heart{" "}
              </a>{" "}
              {"  "}
              <p>Just Between Us, 2020</p>
            </p>
            <p>
              <a href="https://www.wallflowerjournal.com/opinions-stories/insecurity-lies-at-the-heart-of-loneliness">
                Insecurity Lies At The Heart of Loneliness{" "}
              </a>{" "}
              {"  "}
              <p>Wall Flower Journal, 2022</p>
            </p>
            <p>
              <a href="https://www.wallflowerjournal.com/relationships/how-to-love-an-introvert-well">
              How To Love An Introvert Well{" "}
              </a>{" "}
              {"  "}
              <p>Wall Flower Journal, 2022</p>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;
