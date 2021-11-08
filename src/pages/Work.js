import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
// import {Link, useLocation}  from "react-router-dom";

const Work = () => {

  const contents = [
    {
      id: 1,
      title: "Books Edits",
      text:
        "I have worked one-on-one with authors copyediting and proofreading their manuscripts in theology, memoir, and poetry.",
    },
    {
      id: 2,
      title: "Copywriting",
      text:
        "I have created and followed the brand voice for businesses and helped share their stories on their websites.",
    },
    {
      id: 3,
      title: "Personal Pieces",
      text:
        "From blog posts to featured pieces, links to my personal writing can be found here",
    },
    {
      id: 4,
      title: "Read with Coffee",
      text:
        "Here you can settle in and read about books and drink in my newsletter where I round up monthly updates and discuss culture, life, and art.",
    },
  ];
  return (
    <div id="work">
      <Container>
        <Row style={{ paddingBottom: "22px" }}>
          <Col xs={6}>
            <h5
              style={{
                fontSize: "14px",
                letterSpacing: "0.5px",
              }}
            >
              Featured Work
            </h5>
            <h4 style={{ fontSize: "18px", lineHeight: "25px" }}>
              I design creative stuffs & build online digital products related
              business passionate about simple user experience and designs.
            </h4>
          </Col>
        </Row>
        <Row>
          {contents.map((content) => (
            <Col md={3} sm={6}>
              <Card
                key={content.id}
                bg="warning"
                style={{ marginBottom: "20px", border: "none"}}
                className="h-100"
              >
                <Card.Body>
                  <Card.Title>{content.title}</Card.Title>
                  <Card.Text>{content.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
};

export default Work;
