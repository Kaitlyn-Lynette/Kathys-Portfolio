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
          <Col
            className="port-pagetitle"
            md={12}
          >
            <h1>Guest Writing</h1>
          </Col>
          <Col className="port-subtitle" md={{ span: 8, offset: 2 }} style={{textAlign: "justify"}}>
            <p>
              {" "}
              I love to share my writing. It brings me a lot of joy to reflect on personal experiences
              and to write about the wisdom I have gained from them. Whatever it is,
              the way you tell your story online can make a difference to someone out there.{" "}
            </p>
          </Col>
        </Row>
        <Row style={{paddingBottom: "60px"}}>
          <Col 
          md={12}
          className="port-subtitle"
          >
          <p><a href="https://justbetweenus.org/everyday-faith/tell-your-story/wholeness-for-the-lonely-heart/">Wholeness for the Lonely Heart{" "}</a> {"  "}<p>Just Between Us, 2020</p></p>
         
          </Col>
        </Row>

      
      </Container>
    </div>
  );
};

export default Portfolio;
