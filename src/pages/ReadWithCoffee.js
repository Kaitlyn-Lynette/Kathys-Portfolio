import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";

const ReadWithCoffee = () => {
  return (
    <div id="readwithcoffee">
      {/* <Container fluid> */}
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
      {/* </Container> */}
      <Container>
        <Row>
          <Col md={6} fluid>
            <Card style={{ textAlign: "center", height: "250%"}}>
              <Card.Title>The Blog</Card.Title>
              <Card.Body>
                {" "}
                I love newsletters. Whenever a writer has a newsletter sign up
                form on their website I sign up right away. There’s something
                special about a newsletter. It’s a direct message delivered to
                your inbox, like a “thinking of you” message.
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card style={{ textAlign: "center" }}>
              <Card.Title>Book Reviews</Card.Title>
              <Card.Body>This is some text within a card body.</Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ReadWithCoffee;
