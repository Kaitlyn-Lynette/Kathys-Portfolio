// import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";

const ReadWithCoffee = () => {
  return (
    <div id="readwithcoffee">
      <Row>
        <Col>
          <Image src="/images/1472x595coffee.jpg" width="100%"></Image>
        </Col>
      </Row>
      <Row
        style={{
          backgroundColor: "#e4b2b1",
          textAlign: "center",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        <Col>
          <h1>Read with Coffee</h1>
        </Col>
      </Row>
      <Row style={{ paddingLeft: "0px", paddingRight: "0px" }}>
        <Col md={6} className="newsletter-col" fluid>
          <Card
            className="newsletters"
            style={{ textAlign: "center", height: "100%", paddingTop: "20px" }}
          >
            <Card.Title>The Newsletter</Card.Title>
            <Card.Body style={{ paddingLeft: "30px", paddingRight: "30px" }}>
              {" "}
              I love newsletters. Whenever a writer has a newsletter sign up
              form on their website I sign up right away. There’s something
              special about a newsletter. It’s a direct message delivered to
              your inbox, like a “thinking of you” message.
              <ul>
                <li>
                  <a href="https://us4.campaign-archive.com/?u=df2f7f9baf04d4dddfda33670&id=1ecbdd915d">
                    March 2020 [debut newsletter]
                  </a>
                </li>
                <li>
                  <a href="https://us4.campaign-archive.com/?u=df2f7f9baf04d4dddfda33670&id=22a4552b69">
                    April 2020
                  </a>
                </li>
                <li>
                  <a href="https://us4.campaign-archive.com/?u=df2f7f9baf04d4dddfda33670&id=9ec6f2873c">
                    July 2020
                  </a>
                </li>
                <li>
                  <a href="https://us4.campaign-archive.com/?u=df2f7f9baf04d4dddfda33670&id=823651e0af">
                    August 2020
                  </a>
                </li>
                <li>
                  <a href="https://us4.campaign-archive.com/?u=df2f7f9baf04d4dddfda33670&id=a3e3c0977b">
                    October 2020
                  </a>
                </li>
                <li>
                  <a href="https://us4.campaign-archive.com/?u=df2f7f9baf04d4dddfda33670&id=95cb7e561c">
                    February 2021
                  </a>
                </li>
                <li>
                  <a href="https://us4.campaign-archive.com/?u=df2f7f9baf04d4dddfda33670&id=b6fd181cdd">
                    March & April 2021
                  </a>
                </li>
                <li>
                  <a href="https://us4.campaign-archive.com/?u=df2f7f9baf04d4dddfda33670&id=22cae24c5b">
                    May & June 2021
                  </a>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="card-edit">
        <Card className="card-edit text-white">
            <Card.Img src="/images/2.jpg" />
            <Card.ImgOverlay>
              <Card.Title>On Writing Books</Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="card-favorite">
          <Card className="card-favorite text-white">
            <Card.Img src="/images/1.jpg"/>
            <Card.ImgOverlay>
              <Card.Title>Favorite Books & Authors</Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
       


        <Col md={6} className="reviews-col">
          <Card
            className="reviews"
            style={{ textAlign: "center", paddingTop: "20px" }}
          >
            <Card.Title>Book Reviews</Card.Title>
            <Card.Body>
              <ul>
                <p>
                  Check out my{" "}
                  <a href="https://www.goodreads.com/user/show/33141645-katherine-perez-tmu">
                    Goodreads
                  </a>
                  , here are some highlighted reviews:
                </p>
                <li>Les Mis</li>
                <li>Almost a Woman</li>
                <li>Thanks for Waiting</li>
                <li>Bookishness</li>
                <li>The Four Winds</li>
                <li>Like Water for Chocolate</li>
                <li>Little Women</li>
                <li>The Guernsey Literary and Potato Peel Pie Society</li>
                <li>The Undocumented Americans</li>
                <li>Small Fry</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ReadWithCoffee;
