import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

const Work = () => {
  const projects = [
    "Books Edits",
    "Copywriting",
    "Personal Pieces",
    "Read with Coffee",
  ];
  return (
    <div id="work">
      <Container>
        <Row style={{paddingBottom: "22px"}}>
          <Col xs={6}>
            <h5
              style={{
                fontSize: "14px",
                letterSpacing: "0.5px",
              }}
            >
              Featured Work
            </h5>
            <h4 style={{ fontSize: "18px",  lineHeight: "25px"}}>
              I design creative stuffs & build online digital products related
              business passionate about simple user experience and designs.
            </h4>
          </Col>
        </Row>
        <Row>
          {projects.map((project, idx) => (
            <Col md={3} sm={6}>
              <Card key={idx} text={projects} style={{ marginBottom: "20px", backgroundColor: '#EAC493', width: "252px"}}>
                <Card.Body>
                  <Card.Title>{project}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Work;
