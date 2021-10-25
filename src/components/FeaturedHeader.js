import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

const FeaturedHeader = () => {
  return (
    <div id="featuredHeader" style={{display: "flex"}}>
      <div
        id="notetoreader"
        style={{ padding: "20px", float: "right", backgroundColor: "#e4b2b1" }}
      >
        <Container fluid style={{ paddingTop: "10px" }}>
          <Row>
            <Col md={4} sm={12}>
              <Image
                src="/images/Note_To_Readers.jpg"
                width="100%"
                style={{ paddingLeft: "20px" }}
              />
            </Col>
            <Col md={{ span: 6, offset: 1 }}>
              <p>Note to My readers</p>
              <p>
                My dear reader, website peruser, or potential partner in work, I
                am honored to have you spend your time here to show interest in
                getting to know me and my work. Writing is such a personal
                thing. If out of the heart the mouth speaks, then out of the
                soul does one write. Writing is not only therapeutic, it also
                frees up the world that’s inside a person. My writing and
                editing speciality is non-fiction. I am passionate about hearing
                the stories of others. To get to hear others share their stories
                is a gift and I want to help you get your story out. As an
                editor I am passionate about making your words concise and
                strong; to get your point across and to impact your readers.
                Here on my website is a collection of what makes me, well me.
                You will find a collection of my thoughts, books I love, and my
                newsletter. I hope you find this website enjoyable and feel free
                to reach me with any questions or to start a work partnership,
                or even just to share a book or podcast you discovered.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default FeaturedHeader;