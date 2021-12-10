import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import "../App.css";

const PortfolioHeader = () => {
  return (

    <div id="featuredHeader" style={{ backgroundColor: "#e4b2b1" }}>
      <Container>
      <div id="notetoreader">
        <div style={{padding: "100px" }}>
          <Row>
            <Col
              md={12}
              sm={12}
              style={{ textAlign: "center" }}
            >
              <h1>Portfolio</h1>
            </Col>
            <Col style={{paddingTop: "40", textAlign: "center"}}>
            <p> My dear reader, website peruser, or potential partner in
                    work, I am honored to have you spend your time here to show
                    interest in getting to know me and my work. I hope you find
                    this website enjoyable and feel free to reach me with any
                    questions or to start a work partnership, or even just to
                    share a book or podcast you discovered.</p>
            </Col>
          </Row>
        </div>
      </div>
      </Container>
    </div>
  );
};

export default PortfolioHeader;
