import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import "../App.css";

const About = () => {
  return (
    <div id="about">
      <Container>
        <Row>
          <Col md={6}>
            <h5
              style={{
                fontSize: "14px",
                letterSpacing: "0.5px",
              }}
            >
              About my story
            </h5>
            <h2 style={{ fontSize: "25px" }}>
              Katherine is an editor, writer, and mentor based in Brooklyn, NY
            </h2>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "25px",
              }}
            >
              She launched her blog, To My Understanding, in 2014 after graduating 
              from Quinnipiac University with a Bachelor in Print Journalism. Since then her writing has
              been published in Just Between Us magazine and Dearly Magazine.
              Her writing style focuses on coming of age, self-development, and
              lifestyle. She has edited non-fiction books for social leaders and
              overcomers in local communities. When she is not writing or
              editing, Katherine spends her time mentoring young women in
              different walks of life on reaching their life goals and
              self-improvement. 
            </p>
          </Col>
          <Col md={{ span: 4, offset: 2}}>
            <Image src="/images/KathyAbout345x400.png" width="100%"></Image>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
