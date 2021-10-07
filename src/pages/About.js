import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const About = () => {
  return (
    <div id="about">
      <Container>
        <Row>
          <Col md={4}>
            <h2>About my story</h2>
            <h3>
              Katherine is an editor, writer, cultural curator based in
              Brooklyn, NY
            </h3>
            <p>
              Katherine graduated from xxx University, with a Bachelor in X, Y,
              Z. She has edited books for social leaders in Sunset Park.
            </p>
          </Col>
          <Col md={4}>Picture</Col>
          <Col md={4}>
            <h3>Note to my readers</h3>
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
