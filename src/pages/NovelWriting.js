import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import NewButton from "../components/NewButton";
import "../App.css";

const NovelWriting = () => {
  return (
    <div id="novelwriting">
      <Container>
        <Row >
          <Col style={{paddingBottom: "80px"}} className="port-pagetitle"
            md={12}
          >
            <h1>Novel Writing</h1>
          </Col>
        </Row>
        <Row>
          <Col
            className="port-subtitle"
            md={{span: 8, offset: 2}}
          >
            <p>It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.</p>
          </Col>
        </Row>
        <Row>
        <Col  style={{
              paddingTop: "30px",
              paddingBottom: "80px",
              textAlign: "center",
            }}
            md={{span:2, offset: 5}}><NewButton name="Contact Me"> </NewButton></Col>
        </Row>
      </Container>
    </div>
  );
};

export default NovelWriting;
