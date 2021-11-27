import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import "../App.css"

const Services = () => {
  return (
    <div id="services">
      <Container>
        <Row>
          <Col xs={8}>
          <h5>
            Professional Services
          </h5>
          <h4
     s
          >
             I share your passion for your work. Contact me if you’re looking for a positive person who can…
          </h4>
          </Col>
        </Row>
        <Row style={{ paddingTop: "20px", textAlign:"center"}}>
          <Col md={4}>
            <Card className="svs_list h-100">
              <Card.Img src="/images/services_creativity_resize.jpg" />
              <Card.Body>
                <Card.Title>
                  <h3>Write</h3>
                </Card.Title>
                <Card.Text>
                  <ul>
                    <li>Blog Writing</li>
                    <li>Memoir Writing</li>
                    <li>Copy Writing</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card  className="svs_list h-100">
              <Card.Img src="/images/services_edit_resize2.jpg" style={{height: "277px"}}  />
              <Card.Body>
                <Card.Title>
                  <h3>Proofread & Edit</h3>
                </Card.Title>
                <Card.Text>
                  <ul>
                    <li>Non-Fiction Manuscripts</li>
                    <li>Memoirs</li>
                    <li>Poetry</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="svs_list h-100">
              <Card.Img src="/images/services_speak_resize.jpg"/>
              <Card.Body>
                <Card.Title>
                  <h3>Mentor</h3>
                </Card.Title>
                <Card.Text>
                <ul>
                    <li>Womanhood</li>
                    <li>Faith</li>
                    <li>Friendship</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
