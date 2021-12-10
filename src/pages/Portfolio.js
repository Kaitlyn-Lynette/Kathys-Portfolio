import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import "../App.css";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <Container>
        <Row>
        <Col style={{ paddingTop: "80px", paddingBottom: "30px", textAlign: "center"}} md={12}>
            <h1>Guest Writing</h1>
        </Col>
        <Col style={{ paddingTop: "80px", paddingBottom: "30px", textAlign: "center" }} md={{span: 8, offset: 2}}>
            <p> It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference. </p>
        </Col>
        </Row>

        <Row style={{marginLeft: "19px;"}}>
          <Col md={{span: 8, offset: 1}}>
          <Image src="/images/wholeness-for-the-lonely-heart.jpeg" style={{align: "center",width: "1000px", height: "600px"}}></Image>
          </Col>
        </Row>
          <Col  md={{span: 8, offset: 2}} style={{paddingTop: "60px", paddingBottom: "80px", textAlign: "center"}}>
          <Button className="rwc-button"> Read It </Button>
          </Col>
      </Container>
    </div>
  );
};

export default Portfolio;
