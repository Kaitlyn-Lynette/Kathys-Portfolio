import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image"
import "../App.css"

const About = () => {
  return (
    <div id="about">
      <Container>
        <Row>
          <Col md={4}>
            <h5 style={{
                fontSize: "14px",
                letterSpacing: "0.5px",
              }}>About my story</h5>
            <h2 style={{ fontSize: "25px" }}>
              Katherine is an editor, writer, and mentor based in
              Brooklyn, NY
            </h2>
            <p style={{
              fontSize: "16px",
              lineHeight: "25px"}}>
              Katherine graduated from xxx University, with a Bachelor in X, Y,
              Z. She has edited books for social leaders in Sunset Park.
            </p>
          </Col>
          <Col md={4}><Image src="/images/AboutProfile345x400.png" width="100%"></Image></Col>
          <Col md={4}>
            <h2 style={{fontSize:"25px"}}>Note to my readers</h2>
            <p>
              My dear reader, website peruser, or potential partner in work,
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
