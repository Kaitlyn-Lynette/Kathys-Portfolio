import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import NewButton from "../components/NewButton";
import ContactForm from "../components/ContactForm";
import "../App.css";

const NovelWriting = () => {
  const [isShow, setIsShow] = React.useState(false);
  const [disable, setDisabled] = React.useState(true); // visibility state

  const handleClick = () => {
    console.log("what are you doing?!!");
    setIsShow(true);
    setDisabled(false);
  };

  return (
    <div id="novelwriting">
      <Container>
        <Row>
          <Col className="port-pagetitle" md={12}>
            <h1>Novel Writing</h1>
          </Col>
        </Row>
        <Row>
          <Col
            className="port-subtitle"
            md={{ span: 8, offset: 2 }}
            style={{ textAlign: "justify" }}
          >
            <p>
              I am writing a novel! It’s a coming-of-age story of a high school
              senior leaving her comfortable home in North Carolina and moving
              to New York City for college. Are you an agent looking for a new
              author? Let’s get in touch!
            </p>
          </Col>
        </Row>
        <Row>
          <Col
            md={{ span: 2, offset: 5 }} xs={{span: 8, offset: 3}}
            className={disable ? "element-visible" : "element-hidden"}
          >
            <NewButton
              handleClick={handleClick}
              name="Get in touch!"
            ></NewButton>
          </Col>
          <Col
            style={{
              paddingBottom: "80px",
              textAlign: "center",
            }}
            md={{ span: 8, offset: 4 }}
          >
            {isShow ? <ContactForm></ContactForm> : <></>}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NovelWriting;
