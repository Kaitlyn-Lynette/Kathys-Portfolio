import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import "../App.css";

const Work = () => {
  const contents = [
    {
      id: 1,
      title: "Book Edits",
      text:
        "I have worked one-on-one with authors copyediting and proofreading their manuscripts in theology, memoir, and poetry.",
    },
    {
      id: 2,
      title: "Copywriting",
      text:
        "I have created, as well as followed, the brand voice for businesses and helped them share their stories on their websites.",
    },
    {
      id: 3,
      title: "Personal Pieces",
      text:
        "From blog posts to featured writing, I write with my own voice in these pieces.",
    },
    {
      id: 4,
      title: "Read With Coffee",
      text:
        "Now settle in a comfy seat and drink in my newsletter, book reviews, and more on culture, life, and art.",
    },
  ];
  return (
    <div id="work">
      <Container>
        <Row style={{ paddingBottom: "22px" }}>
          <Col className="featured-work-text" sm={12}>
            <h5>Featured Work</h5>
            <h4>
              I am passionate about hearing the stories of others and to help
              you write yours.
            </h4>
          </Col>
        </Row>
        <Row>
          {contents.map((content) => (
            <Col md={3} sm={6} className="work-blocks">
              <Card
                key={content.id}
                className="featured-work-card h-100"
                style={{
                  marginBottom: "20px",
                  border: "none",
                  backgroundColor: "#f3ce88",
                }}
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
  );
};

export default Work;
