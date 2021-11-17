import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Footer from "../components/Footer";
import Header from "../components/Navigation";
import "../App.css";

const ReadWithCoffee = () => {






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
          <Col md={4}>
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
          <Col md={4}>
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
          <Col md={4}>
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
        </Row>
        <Row className="rwc-reviews">
          <Col>
            <p>Goodreads Book Reviews</p>
            <ul>
              <li>
                <a href="https://www.goodreads.com/review/show/4250409189">
                  Les Miserables
                </a>
              </li>
              <li>
                <a href="https://www.goodreads.com/review/show/4251595447">
                  Almost a Woman
                </a>
              </li>
              <li>
                <a href="https://www.goodreads.com/review/show/4153176573">
                  Thanks for Waiting
                </a>
              </li>
              <li>
                <a href="https://www.goodreads.com/review/show/4214911069">
                  Bookishness
                </a>
              </li>
              <li>
                <a href="https://www.goodreads.com/review/show/4153242331">
                  The Four Winds
                </a>
              </li>
              <li>
                <a href="https://www.goodreads.com/review/show/3504780008">
                  Like Water for Chocolate
                </a>
              </li>
              <li>
                <a href="https://www.goodreads.com/review/show/3982757466">
                  Little Women
                </a>
              </li>
              <li>
                <a href="https://www.goodreads.com/review/show/3586990699">
                  The Guernsey Literary and Potato Peel Pie Society
                </a>
              </li>
              <li>
                <a href="https://www.goodreads.com/review/show/3535543299">
                  The Undocumented Americans
                </a>
              </li>
              <li>
                <a href="https://www.goodreads.com/review/show/3146657265">
                  Small Fry
                </a>
              </li>
            </ul>
          </Col>
        </Row> 
      </Container>
      <Footer />
    </div>
  );
};

export default ReadWithCoffee;
