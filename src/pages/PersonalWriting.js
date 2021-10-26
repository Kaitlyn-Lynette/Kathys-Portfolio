import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import "../App.css";

const PersonalWriting = () => {
  const [isShown, setIsShown] = useState(false);
  return (
    <div id="personal" 
    style= {{paddingTop: "80px",
    paddingBottom: "100px"}}>
      <Container>
        <Row>
          <Col md={{ span: 4, offset: 5 }}>
            <h1>Personal Writing</h1>
          </Col>
        </Row>
        <Row style={{ paddingTop: "80px" }}>
          <Col md={4}>
            <Card style={{ border: "none" }} onMouseEnter={() => setIsShown(!isShown)}>
              <Image src="/images/blog_home.png" alt="homeblogfeature" />
              <Card.ImgOverlay>
                <Card.Title className="blogHeader">Home</Card.Title>
              </Card.ImgOverlay>
            </Card>
            <div className="blog-list">
              <ul>
                <li>People of Intentional Connection, Dec 2019</li>
                <li>My Cozy Place, Jan 2018</li>
                <li>Stepping Into Marriage, Jul 2016</li>
              </ul>
            </div>
          </Col>

          <Col md={4}>
            <Card className="text-white rounded-0" style={{ border: "none" }}>
              <Image
                className="img-port"
                src="/images/blog_2.png"
                alt="Card image"
              />
              <Card.ImgOverlay>
                <Card.Title className="blogHeader">
                  Creativity & Passion
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
            <div className="blog-list">
              <ul>
                <li>Stalling Our Creativity, July 2019</li>
                <li>Where to Find Your Passion, July 2018</li>
              </ul>
            </div>
          </Col>

          <Col md={4}>
            <Card className="text-white rounded-0" style={{ border: "none" }}>
              <Image src="/images/blog_3.png" alt="Card image" />
              <Card.ImgOverlay className="blogImgCards">
                <Card.Title className="blogHeader">
                  Wisdom & Womanhood
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
            <div className="blog-list">
              <ul>
                <li>Discomfort and Peace of Being, Dec 2020</li>
                <li>Inspire Series: Showing the Grace to Dream, Sept 2021</li>
                <li>When Comparison Leads to Envy, June 2020</li>
                <li>Before You Follow That Trend, June 2019</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PersonalWriting;
