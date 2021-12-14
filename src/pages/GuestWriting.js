import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import NewButton from "../components/NewButton"
import "../App.css";

const Portfolio = () => {
  return (
    <div id="guestwriting">
      <Container>
        <Row>
          <Col
            style={{ paddingBottom: "80px" }}
            className="port-pagetitle"
            md={12}
          >
            <h1>Guest Writing</h1>
          </Col>
          <Col className="port-subtitle" md={{ span: 8, offset: 2 }}>
            <p>
              {" "}
              It all begins with an idea. Maybe you want to launch a business.
              Maybe you want to turn a hobby into something more. Or maybe you
              have a creative project to share with the world. Whatever it is,
              the way you tell your story online can make all the difference.{" "}
            </p>
          </Col>
        </Row>

        <Row style={{ marginLeft: "19px", paddingTop: "30px" }}>
          <Col md={{ span: 8, offset: 1 }} sm={12}>
            <Image
              className="guest-writing-photo"
              src="/images/wholeness-for-the-lonely-heart.jpeg"
            ></Image>
          </Col>
        </Row>
        <Col
          md={{ span: 8, offset: 2 }}
          style={{
            paddingTop: "60px",
            paddingBottom: "80px",
            textAlign: "center",
          }}
        >
          <NewButton
            className="rwc-button"
            target="_blank"
            href="https://justbetweenus.org/everyday-faith/tell-your-story/wholeness-for-the-lonely-heart/"
            name="See Article"
          >
            
          </NewButton>
        </Col>
      </Container>
    </div>
  );
};

export default Portfolio;
