// import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Footer from "../components/Footer";

const ReadWithCoffee = () => {
  return (
    <div id="readwithcoffee">
      <Row>
        <Col>
          <Image src="/images/RWCSplash1472x595.jpg" width="100%" />
        </Col>
      </Row>
      {/* <Row
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
      </Row> */}
      <Row style={{ paddingLeft: "0px", paddingRight: "0px" }}>
        <Col md={6} className="newsletter-col" fluid>
          <Card className="newsletter-card">
            <Card.Title>The Newsletter</Card.Title>
            <Card.Body>
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
          <Card className="card-edit">
            <Card.Img src="/images/2.jpg" />
            <Card.ImgOverlay>
              <Card.Title>On Writing Books</Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="card-favorite">
          <Card className="card-favorite">
            <Card.Img src="/images/1.jpg" />
            <Card.ImgOverlay>
              <Card.Title>Favorite Books & Authors</Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>

        <Col md={6} className="reviews-col">
          <Card className="reviews-card">
            <Card.Title style={{ textAlign: "center" }}>
              Book Reviews
            </Card.Title>
            <Card.Body>
              {" "}
              <p style={{ textAlign: "center" }}>
                Check out my {" "}
                <a href="https://www.goodreads.com/user/show/33141645-katherine-perez-tmu">
                  Goodreads
                </a>
                , here are some highlighted reviews:
              </p>
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
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

export default ReadWithCoffee;
