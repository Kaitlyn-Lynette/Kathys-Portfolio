import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Footer from "../components/Footer";
import Header from "../components/Navigation";
import "../App.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useNavigate } from 'react-router-dom'  

const ReadWithCoffee = () => {

  const history = useHistory;

  // function handleClick() {
  //   history.push("/bookreviews")
  // }

  return (
    <div id="readwithcoffee">
      <Header />
      <Container className="rwc-container">
        <Row>
          <Col className="rwc-heading" md={12}>
            <h3>Read with Coffee</h3>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/images/theblog1.png" />
              <Card.Body>
                <Card.ImgOverlay className="rwc-cards-overlay">
                  The Blog
                </Card.ImgOverlay>
                <Card.Text>
                  To My Understanding: I started this blog in 2014 and it's my
                  baby.
                </Card.Text>
                <Button
                  className="rwc-button"
                  target="_blank"
                  href="http://www.tomyunderstanding.net/"
                >
                  Check it out
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/images/thebookclub2.png" />
              <Card.Body>
                <Card.ImgOverlay className="rwc-cards-overlay">
                  The Book Club
                </Card.ImgOverlay>
                <Card.Text>
                  As an extension of the blog, I host a book club.
                </Card.Text>
                <Button
                  className="rwc-button"
                  target="_blank"
                  href="http://www.tomyunderstanding.net/2021/11/tmus-fallwinter-2021-book-club.html"
                >
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/images/thenewsletter3.png" />
              <Card.Body>
                <Card.ImgOverlay className="rwc-cards-overlay">
                  The Newsletter
                </Card.ImgOverlay>
                <Card.Text>
                  Receive a monthly roundup of what's new with TMU!
                </Card.Text>
                <Button
                  className="rwc-button"
                  target="_blank"
                  href="https://us4.campaign-archive.com/home/?u=df2f7f9baf04d4dddfda33670&id=681e843a4b"
                >
                  Sign Up
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/images/thenewsletter3.png" />
              <Card.Body>
                <Card.ImgOverlay className="rwc-cards-overlay">
                  The Book Reviews
                </Card.ImgOverlay>
                <Card.Text>
                  I love books and you can follow my latest reads and reviews on
                  Goodreads.
                </Card.Text>
                <Button as={Link} to='/bookreviews'>
                  See Reviews
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default ReadWithCoffee;
