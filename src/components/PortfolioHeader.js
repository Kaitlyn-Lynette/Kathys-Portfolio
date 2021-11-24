import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../App.css";

const PortfolioHeader = () => {
  return (
    <div id="featuredHeader" style={{backgroundColor: "#e4b2b1"}}>
      <div id="notetoreader" style={{ border: "2px solid #f3ce88", padding: "100px"}}>
        {/* <Container> */}
        <Row>
          <Col
            md={12}
            sm={12}
            style={{ textAlign: "center", paddingBottom: "40px" }}
          >
            <h1>Portfolio</h1>
            {/* <h4> Writer | Editor | Novelist </h4> */}
          </Col>
        </Row>
        <Row>
          <Col
            md={{ span: 6, offset: 3 }}
            sm={12}
            style={{ textAlign: "center" }}
          >
            <p>
              My dear reader, website peruser, or potential partner in work, I
              am honored to have you spend your time here to show interest in
              getting to know me and my work. I hope you find this website
              enjoyable and feel free to reach me with any questions or to start
              a work partnership, or even just to share a book or podcast you
              discovered.
            </p>
          </Col>
        </Row>
        {/* </Container> */}
      </div>
    </div>
  );
};

export default PortfolioHeader;
