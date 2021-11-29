import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Footer from "../components/Footer";
import Header from "../components/Navigation";
import { Link } from "react-router-dom";
import "../App.css";

const ReadWithCoffee = () => {


  return (
    <div id="readwithcoffee">
      <Header />
      <Container className="rwc-container">
        <Row>
          <Col className="rwc-heading" md={12}>
            <h1>Read With Coffee</h1>
           
          </Col>
        </Row>
        <Row>
          <Col className="rwc-subtitle" md={{span:6, offset: 3}}>
          <p>Here you can settle in and read about books and drink in my newsletter where I round up monthly updates and discuss culture, life, and art."</p>
          </Col>
        </Row>
        <Row>
          <Col md={{span: 4, offset: 2}}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/images/theblog1.png" />
              <Card.Body>
                <Card.ImgOverlay className="rwc-cards-overlay">
                  The Blog
                </Card.ImgOverlay>
                <Card.Text>
                  I started To My Understanding in 2014 to write encouraging and inspiring content for women.
                </Card.Text>
                <Button
                  className="rwc-button"
                  target="_blank"
                  href="http://www.tomyunderstanding.net/"
                >
                  Check It Out
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={{span: 4, offset: 1}}>
            <Card className="h-100" style={{ width: "18rem" }}>
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

        <Row className="rwc-col-2"> 
          <Col md={{span: 4, offset: 2}}>
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
          <Col md={{span: 4, offset: 1}}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/images/thebookreviews4.jpg" />
              <Card.Body>
                <Card.ImgOverlay className="rwc-cards-overlay">
                  The Book Reviews
                </Card.ImgOverlay>
                <Card.Text>
                  Follow my latest reads and reviews on Goodreads.
                </Card.Text>
                <Button 
                className="rwc-button"
                as={Link} 
                to='/bookreviews'>
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
