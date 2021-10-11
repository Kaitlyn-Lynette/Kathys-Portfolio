import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

const Work = () => {
    const projects = 
  [
    "Books Edits",
    "Copywriting & Social Media",
    "Personal Pieces",
    "Read with Coffee",
  ];
  return (
  <div id="work">
      {projects.map((project,idx)=> (
          <Container>
          <Row xs={2} md={4} lg={6}className="g-4">
          <Col>
            <Card
            key={idx}
            text={projects}
            style={{ width: '18rem' }}
            >
            <Card.Body>
                <Card.Title>{project} Card Title </Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
                </Card.Text>
            </Card.Body>
            </Card>
        </Col>
        </Row>
        </Container>
            ))}
  </div>
  )
};

export default Work;
