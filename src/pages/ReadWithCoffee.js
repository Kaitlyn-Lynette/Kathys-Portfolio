import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
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
            <p>To My Understanding: Life in my humble opinon</p>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Card  style={{ width: "18rem"}}>
              <Card.Img variant="top" src="/images/theblog1.png" />
              <Card.Body>
                <Card.ImgOverlay className= "rwc-cards">The Blog</Card.ImgOverlay>
                <Card.Text>
                  To My Understanding: I started this blog in 2014 and it's my
                  baby.
                </Card.Text>
                <Button className= "rwc-button">Check it out</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/images/thebookclub2.png" />
              <Card.Body>
              <Card.ImgOverlay className= "rwc-cards">The Book Club</Card.ImgOverlay>
                <Card.Text>
                  As an extension of the blog, I host a book club. 
                </Card.Text>
                <Button className= "rwc-button">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/images/thenewsletter3.png" />
              <Card.Body>
              <Card.ImgOverlay className= "rwc-cards">The Newsletter</Card.ImgOverlay>
                <Card.Text>
                  Receive a monthly roundup of what's new with TMU!
                </Card.Text>
                <Button className= "rwc-button">Sign Up</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
          <p>Book Reviews</p>
          </Col>
        </Row>
        <Row>
          <Col>
          <p>Favorite Books & Authors</p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
     
  );
};

export default ReadWithCoffee;
