import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";

const SelectWriting = () => {
  return (
    <div id="select-writing">
      <Container>
        <Row>
          <Col md={12} style={{ paddingTop: "80px", paddingBottom: "30px", textAlign: "center"}}>
            <h1>Select Writing Pieces</h1>
          </Col>
        </Row>
        <Row>
          <Col md={12} style={{ textAlign: "center" }}>
            <p>
              I love to write longer content and I'm crafting my skill to
              writing a novel.
            </p>
          </Col>
        </Row>
        <Row style={{ paddingTop: "30px", paddingBottom: "80px", textAlign: "center"}}>
          <Col xs={12} md={4}>
            <Card className="select-writing-card">
              <Card.Body style={{textAlign: "center", paddingTop: "55px"}}>
                <Card.Title>
                  <a
                    style={{ color: "inherit" }}
                    href="http://www.tomyunderstanding.net/2021/09/inspire-series-showing-grace-to-dream.html"
                  >
                    To My Understanding: Inspire Women Series
                  </a>
                </Card.Title>
                <Card.Text>
                  Finding and being moved by inspiration is a way of life and is
                  something I follow every day. To celebrate my blog's, To My
                  Understanding, 7th birthday, I'm writing about inspiring women
                  and have them share what inspires them.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="select-writing-card"
            >
              {/* <Card.Img variant="top" src="/images/pw_2_478x353.png" /> */}
              <Card.Body style={{textAlign: "center", paddingTop: "55px"}}>
                <Card.Title>
                  <a
                    style={{ color: "inherit" }}
                    href="http://www.tomyunderstanding.net/2021/09/inspire-series-showing-grace-to-dream.html"
                  >
                    Wholeness for the Lonely Heart
                  </a>
                </Card.Title>
                <Card.Text >
                  Just Between Us is a reader-written ministry. Women from all
                  over the world, who have a heart to walk alongside women to
                  encourage, inspire, comfort, help, and bring hope through the
                  power of God's Word, share their writing gifts with this
                  ministry.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="select-writing-card"
            >
              {/* <Card.Img variant="top" src="/images/pw_2_478x353.png" /> */}
              <Card.Body style={{textAlign: "center", paddingTop: "55px"}}>
                <Card.Title>
                  <a
                    style={{ color: "inherit" }}
                    href="http://www.tomyunderstanding.net/2021/09/inspire-series-showing-grace-to-dream.html"
                  >
                    Novel Writing
                  </a>
                </Card.Title>
                <Card.Text>
                  I am writing a novel! It’s a coming-of-age story of a high
                  school senior leaving her comfortable home in North Carolina
                  and moving to NYC for college. 
                  <p style={{fontSize: "20px", paddingTop: "40pxpx"}}> Are you an agent looking for a
                  new author? Let’s get in touch!</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SelectWriting;
