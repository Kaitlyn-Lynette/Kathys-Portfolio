import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";

const PersonalWriting = () => {
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
            <Card className="bg-dark text-white">
              <Card.Img src="/images/blog_home.png" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Home</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
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
            <Card className="bg-dark text-white">
              <Card.Img src="/images/blog_2.png" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Creativity & Passion</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
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
            <Card className="bg-dark text-white">
              <Card.Img src="/images/blog_3.png" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Wisdom & Womanhood</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PersonalWriting;
