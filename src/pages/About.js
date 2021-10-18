import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import "../App.css";

const About = () => {
  return (
    <div id="about">
      <Container>
        <Row>
          <Col md={6}>
            <h5
              style={{
                fontSize: "14px",
                letterSpacing: "0.5px",
              }}
            >
              About my story
            </h5>
            <h2 style={{ fontSize: "25px" }}>
              Katherine is an editor, writer, and mentor based in Brooklyn, NY
            </h2>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "25px",
              }}
            >
              Katherine is an editor, writer, and mentor living in New York.
              Eager to start writing, she launched her blog, To My
              Understanding, in 2014 after graduating from Quinnipiac University
              with a Bachelor in Print Journalism. Since then her writing has
              been published in Just Between Us magazine and Dearly Magazine.
              Her writing style focuses on coming of age, self-development, and
              lifestyle. She has edited non-fiction books for social leaders and
              overcomers in local communities. When she is not writing or
              editing, Katherine spends her time mentoring young women in
              different walks of life on reaching their life goals and
              self-improvement. She is gifted in empowering others to reach
              their greatest potential, whether it’s with their online presence
              or holding them accountable to reaching their work deadlines. She
              loves hearing people’s stories over coffee, winter, and
              binge-listening to the Gilmore Guys podcast.
            </p>
          </Col>
          <Col md={{ span: 4, offset: 2}}>
            <Image src="/images/AboutProfile345x400.png" width="100%"></Image>
          </Col>
        </Row>
        {/* <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <h2 style={{ fontSize: "25px", paddingTop: "20px" }}>
              Note to my readers
            </h2>
            <p>
              My dear reader, website peruser, or potential partner in work, I
              am honored to have you spend your time here to show interest in
              getting to know me and my work. Writing is such a personal thing.
              If out of the heart the mouth speaks, then out of the soul does
              one write. Writing is not only therapeutic, it also frees up the
              world that’s inside a person. My writing and editing speciality is
              non-fiction. I am passionate about hearing the stories of others.
              To get to hear others share their stories is a gift and I want to
              help you get your story out. As an editor I am passionate about
              making your words concise and strong; to get your point across and
              to impact your readers.
              </p> 
              <p>Here on my website is a collection of what
              makes me, well me. You will find a collection of my thoughts,
              books I love, and my newsletter. I hope you find this website
              enjoyable and feel free to reach me with any questions or to start
              a work partnership, or even just to share a book or podcast you
              discovered.
              </p>
          </Col>
        </Row> */}
      </Container>
    </div>
  );
};

export default About;
