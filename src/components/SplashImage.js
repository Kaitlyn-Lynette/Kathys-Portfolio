import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const SplashImage = () => {
  return (
    <div>
      <Container fluid="lg"> 
        <Row>
          <Col>
            <Image src="../images/KathySplash1472x595.png" width="100%"/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SplashImage;
