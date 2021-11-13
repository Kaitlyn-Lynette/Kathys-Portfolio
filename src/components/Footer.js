import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

const Footer = () => {
  return (
    <div id="footer">
      <Container>
        <Row>
          <Image
            src="/images/logo.png"
            style={{width: "40%", paddingTop: "30px"}}
          />
        </Row>
        <Row>
          <Col
          style={{paddingTop: "30px", paddingLeft: "5%"}}>
            <h4>Contact Me</h4>
          </Col>
          <Col
           style={{paddingTop: "30px", paddingLeft: "5%"}}
          >
            <h4>Follow Social</h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
