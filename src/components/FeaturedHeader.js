import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

const FeaturedHeader = () => {
  return (
    <div id="featuredHeader">
      <div
        id="notetoreader"
        style={{ padding: "20px"}}
      >
        <Row>
            <Col md={12} sm={12} style={{textAlign: "center", paddingBottom: "40px"}}>
            <h1 style={{fontSize: "32px"}}>Portfolio</h1> 
            <h4> Writer | Editor | Novelist </h4>
            </Col>
        </Row> 
        {/* <Container fluid style={{ paddingTop: "10px" }}> */}
          <Row>
            {/* <Col md={6}sm={12}>
              <Image
                src="/images/Note_To_Readers.jpg"
                width="75%"
                // style={{ paddingLeft: "40px", paddingRight:"40px", paddingBottom: "40px"}}
              />
            </Col> */}
            <Col md={{span:6, offset:3}} sm={12} style={{textAlign: "center"}}>
              <p>Note to My readers</p> 
              <p>
                My dear reader, website peruser, or potential partner in work, I
                am honored to have you spend your time here to show interest in
                getting to know me and my work. I hope you find this website enjoyable and feel free
                to reach me with any questions or to start a work partnership,
                or even just to share a book or podcast you discovered.
              </p>
            </Col>
          </Row>
        {/* </Container> */}
      </div>
    </div>
  );
};

export default FeaturedHeader;
