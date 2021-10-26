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
    <div id="personalwriting">
      <Container>
        <Row>
          <Col style={{ paddingTop: "100px" }} md={{ span: 6, offset: 6 }}>
            <h1>Personal Writing</h1>
          </Col>
        </Row>
        <Row style={{ paddingTop: "80px" }}>
          <Col md={{ span: 6, offset: 4 }}>
            <Card
              onMouseEnter={() => setIsShown(!isShown)}
              >
              <Image src="/images/blog_home.png" alt="homeblogfeature" />
              <Card.ImgOverlay style={{ lineHeight: "300px" }}>
                <Card.Title className="blogHeader">Home</Card.Title>
              </Card.ImgOverlay>
            </Card>
            <div>
              <ul>
                <li>
                  http://www.tomyunderstanding.net/2019/12/people-of-intentional-connection.html
                </li>
                <li>
                  http://www.tomyunderstanding.net/2018/01/my-cozy-place.html
                </li>
                <li>
                  http://www.tomyunderstanding.net/2017/05/awakening-spring-cleaning-is-actually.html
                </li>
                <li>
                  http://www.tomyunderstanding.net/2016/06/stepping-into-marriage.html
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row style={{ paddingTop: "20px" }}>
          <Col md={{ span: 6, offset: 4 }}>
            <Card className="text-white rounded-0" style={{ border: "none" }}>
              <Image className="img-port" src="/images/blog_2.png" alt="Card image" />
              <Card.ImgOverlay style={{ lineHeight: "300px"}}>
                <Card.Title className="blogHeader">
                  Creativity & Passion
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
            <div>
              <ul>
                <li>
                  http://www.tomyunderstanding.net/2019/07/stalling-our-creativity.html
                </li>
                <li>
                  http://www.tomyunderstanding.net/2018/02/where-to-find-your-passion.html
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row style={{ paddingTop: "20px" }}>
          <Col md={{ span: 6, offset: 4 }}>
            <Card className="text-white rounded-0" style={{ border: "none" }}>
              <Image src="/images/blog_3.png" alt="Card image" />
              <Card.ImgOverlay className="blogImgCards">
                <Card.Title className="blogHeader">
                  Wisdom & Womanhood
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
            <div>
              <ul>
                <li>
                  http://www.tomyunderstanding.net/2020/12/the-discomfort-and-peace-of-being.html
                </li>
                <li>
                  http://www.tomyunderstanding.net/2021/09/inspire-series-showing-grace-to-dream.html
                </li>
                <li>
                  http://www.tomyunderstanding.net/2020/06/when-comparison-leads-to-envy.html
                </li>
                <li>
                  http://www.tomyunderstanding.net/2019/06/before-you-follow-that-trend.html
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
