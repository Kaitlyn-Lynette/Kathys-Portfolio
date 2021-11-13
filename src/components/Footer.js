import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footer">
      <Container>
        <Row>
          <Image
            src="/images/logo.png"
            style={{ width: "35%", paddingTop: "30px" }}
          />
        </Row>
        <Row>
          <Col
            md={6}
            style={{
              paddingTop: "30px",
              paddingLeft: "5%",
              paddingBottom: "30px",
            }}
          >
            <h4>Contact Me</h4>
            <p>
              I'm thankful you've visited my site. Please get in touch through
              the contact form or send a message on my social.
            </p>
          </Col>
          <Col
            md={6}
            style={{
              paddingTop: "30px",
              paddingLeft: "5%",
              paddingBottom: "20px",
            }}
          >
            <h4>Follow Social</h4>
            <div className="social-icons">
              <Link
                to={{
                  pathname: "https://www.instagram.com/tomyunderstanding/",
                }}
                target="_blank"
              >
                <FontAwesomeIcon icon={["fab", "instagram"]} />
              </Link>
              <Link
                to={{ pathname: "http://www.tomyunderstanding.net/" }}
                target="_blank"
              >
                <FontAwesomeIcon icon={["fab", "blogger"]} />
              </Link>
              <Link
                to={{ pathname: "https://www.linkedin.com/in/rojaskatherine/" }}
                target="_blank"
              >
                <FontAwesomeIcon icon={["fab", "linkedin"]} />
              </Link>
            </div>
          </Col>
        </Row>
        <Row>
          <Col
            md={6}
            style={{
              paddingTop: "30px",
              paddingLeft: "3%",
              paddingBottom: "20px",
            }}
          >
            <p>
              <FontAwesomeIcon
                icon={["far", "copyright"]}
                size="xs"
                style={{ verticalAlign: "middle" }}
              />{" "}
              2021 Katherine Perez
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
