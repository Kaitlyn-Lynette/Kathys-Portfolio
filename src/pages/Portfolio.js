import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <Container>
        <Row>
          <Col
            md={6}
            style={{
              paddingTop: "80px",
              paddingBottom: "30px",
              textAlign: "center",
            }}
          >
            <Card className="select-writing-card">
              <Card.Body style={{ textAlign: "center", paddingTop: "55px" }}>
                <Card.Title>
                  <a
                    style={{ color: "inherit" }}
                    href="http://www.tomyunderstanding.net/2021/09/inspire-series-showing-grace-to-dream.html"
                  >
                    Blog Writing
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
        </Row>


        <Row>
        <Col
            md={6}
            style={{
              paddingTop: "80px",
              paddingBottom: "30px",
              textAlign: "center",
            }}
          >
            <Card className="select-writing-card">
              <Card.Body style={{ textAlign: "center", paddingTop: "55px" }}>
                <Card.Title>
                  <a
                    style={{ color: "inherit" }}
                    href="http://www.tomyunderstanding.net/2021/09/inspire-series-showing-grace-to-dream.html"
                  >
                    Guest Writing
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
          </Row>

          
        <Row>
             <Col
            md={6}
            style={{
              paddingTop: "80px",
              paddingBottom: "30px",
              textAlign: "center",
            }}
          >
            <Card className="select-writing-card">
              <Card.Body style={{ textAlign: "center", paddingTop: "55px" }}>
                <Card.Title>
                  <a
                    style={{ color: "inherit" }}
                    href="http://www.tomyunderstanding.net/2021/09/inspire-series-showing-grace-to-dream.html"
                  >
                    Novel Writing
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
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;
