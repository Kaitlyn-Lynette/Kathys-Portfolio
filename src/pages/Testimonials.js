import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Testimonials = () => {
  return (
    <div id="testimonials">
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <p style={{ textAlign: "center", lineHeight: "25px" }}>
              <h5>what people say</h5>
              “Katherine was a pivotal member of the writing team. She dedicated
              herself to understanding each client's distinct needs, researching
              new and existing resources to identify and hone in on the brand's
              voices. Never shying away from asking questions she made each
              story her own, leveraging every moment to build up client's
              brands.
            </p>
            <h5
              style={{
                textAlign: "center",
                fontSize: "14px",
                letterSpacing: "0.5px",
              }}
            >
              {" "}
              Cindy Burgos, Managing Director, Mattera{" "}
            </h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonials;
