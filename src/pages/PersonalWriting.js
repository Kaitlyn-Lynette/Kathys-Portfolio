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
    <div id="personal" style={{ paddingTop: "80px", paddingBottom: "100px" }}>
      <Container>
        <Row>
          <Col md={12} style={{ paddingBottom: "40px", textAlign: "center" }}>
            <h1>Blog Writing</h1>
          </Col>
        </Row>
        <Row>
          <Col md={12} style={{ textAlign: "center" }}>
            <p>
              From blog posts to featured writing, I write with my own voice in
              these pieces.
            </p>
          </Col>
        </Row>
        <Row style={{ paddingTop: "40px" }}>
          <Col xs={12} md={4}>
            <Card
              onMouseEnter={() => setIsShown(!isShown)}
              className="blog-card"
            >
              <Image src="/images/pw_1.png" alt="homeblogfeature" fluid />
              <Card.ImgOverlay style={{ backgroundColor: "#0000004F" }}>
                <Card.Title className="blogHeader">Home</Card.Title>
              </Card.ImgOverlay>
            </Card>
            <div className="blog-list">
              <ul>
                <li>
                  <a href="http://www.tomyunderstanding.net/2019/12/people-of-intentional-connection.html">
                  People of Intentional Connection, Dec. 2019
                  </a>
                </li>
                <li>
                  <a href="http://www.tomyunderstanding.net/2018/01/my-cozy-place.html">
                  My Cozy Place, Jan. 2018
                  </a>
                </li>
                <li>
                  <a href="http://www.tomyunderstanding.net/2016/06/stepping-into-marriage.html">
                  Stepping into Marriage, June 2016
                  </a>
                </li>
              </ul>
            </div>
          </Col>

          <Col xs={12} md={4}>
            <Card className="blog-card">
              <Image src="/images/pw_2.png" alt="Card image" fluid />
              <Card.ImgOverlay style={{ backgroundColor: "#0000004F" }}>
                <Card.Title className="blogHeader">
                  Creativity & Passion
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
            <div className="blog-list">
              <ul>
                <li>
                  <a href="http://www.tomyunderstanding.net/2019/07/stalling-our-creativity.html">
                    Stalling Our Creativity, July 2019
                  </a>
                </li>
                <li>
                  <a href="http://www.tomyunderstanding.net/2018/02/where-to-find-your-passion.html">
                  Where to Find Your Passion, Feb. 2018
                  </a>
                </li>
              </ul>
            </div>
          </Col>

          <Col xs={12} md={4}>
            <Card className="blog-card">
              <Image src="/images/pw_3.png" alt="Card image" fluid />
              <Card.ImgOverlay style={{ backgroundColor: "#0000004F" }}>
                <Card.Title className="blogHeader">
                  Wisdom & Womanhood
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
            <div className="blog-list">
              <ul>
                <li>
                  <a href="http://www.to2yunderstanding.net/2020/12/the-discomfort-and-peace-of-being.html">
                  The Discomfort and Peace of Being Vulnerable, Dec. 2020
                  </a>
                </li>
                <li>
                  <a href="http://www.tomyunderstanding.net/2020/06/when-comparison-leads-to-envy.html">
                    When Comparison Leads to Envy, June 2020
                  </a>
                </li>
                <li>
                  <a href="http://www.tomyunderstanding.net/2019/06/before-you-follow-that-trend.html">
                    Before You Follow That Trend, June 2019
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>

      

       
        
   
      </Container>
    </div>
  );
};

export default PersonalWriting;
