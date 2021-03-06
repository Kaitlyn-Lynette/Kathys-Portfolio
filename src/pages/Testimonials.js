import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Carousel from "../components/Carousel";

const Testimonials = () => {
  return (
    <div id="testimonials">
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <h5 style={{ textAlign: "center" }}>Testimonials</h5>
          </Col>
        </Row>
        <Row style={{paddingTop: "25px"}}>
          <Col md={{ span: 6, offset: 3 }} sm={12}>
            <Carousel />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonials;
