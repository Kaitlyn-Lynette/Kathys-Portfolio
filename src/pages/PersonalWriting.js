import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import "../App.css";

const PersonalWriting = () => {
  const [isShown, setIsShown] = useState(false);
  return (
    <div id="personal" style={{ paddingTop: "80px", paddingBottom: "100px" }}>
      <Container>
        <Row>
          <Col md={12} style={{ paddingBottom: "40px", textAlign: "center" }}>
            <h1>Personal Writing</h1>
          </Col>
        </Row>
        <Row>
          <Col md={12} style={{ textAlign: "center" }}>
            <p>
              From my blog, To My Understanding (TMU), to featured pieces, links
              to my personal writing can be found here.
            </p>
          </Col>
        </Row>
        <Row style={{ paddingTop: "40px" }}>
          <Col xs={12} md={4}>
            <Card
              style={{ border: "none" }}
              onMouseEnter={() => setIsShown(!isShown)}
            >
              <Image src="/images/pw_1.png" alt="homeblogfeature" fluid />
              <Card.ImgOverlay>
                <Card.Title className="blogHeader">Home</Card.Title>
              </Card.ImgOverlay>
            </Card>
            <div className="blog-list">
              <ul>
                <li><a  href="http://www.tomyunderstanding.net/2019/12/people-of-intentional-connection.html">People of Intentional Connection, Dec 2019</a></li>
                <li><a href="http://www.tomyunderstanding.net/2018/01/my-cozy-place.html">My Cozy Place, Jan 2018</a></li>
                <li><a href="http://www.tomyunderstanding.net/2016/06/stepping-into-marriage.html">Stepping Into Marriage, Jul 2016</a></li>
              </ul>
            </div>
          </Col>

          <Col xs={12} md={4}>
            <Card className="text-white rounded-0" style={{ border: "none" }}>
              <Image
                className="img-port"
                src="/images/pw_2.png"
                alt="Card image"
                fluid
              />
              <Card.ImgOverlay>
                <Card.Title className="blogHeader">
                  Creativity & Passion
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
            <div className="blog-list">
              <ul>
                <li><a href="http://www.tomyunderstanding.net/2019/07/stalling-our-creativity.html">Stalling Our Creativity, July 2019</a></li>
                <li><a href="http://www.tomyunderstanding.net/2018/02/where-to-find-your-passion.html">Where to Find Your Passion, July 2018</a></li>
              </ul>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <Card className="text-white rounded-0" style={{ border: "none" }}>
              <Image src="/images/pw_3.png" alt="Card image" fluid />
              <Card.ImgOverlay className="blogImgCards">
                <Card.Title className="blogHeader">
                  Wisdom & Womanhood
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
            <div className="blog-list">
              <ul>
                <li><a href="http://www.tomyunderstanding.net/2020/12/the-discomfort-and-peace-of-being.html">Discomfort and Peace of Being, Dec 2020</a></li>
                <li><a href="http://www.tomyunderstanding.net/2020/06/when-comparison-leads-to-envy.html">When Comparison Leads to Envy, June 2020</a></li>
                <li><a href="http://www.tomyunderstanding.net/2019/06/before-you-follow-that-trend.html">Before You Follow That Trend, June 2019</a></li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row style={{ paddingTop: "50px" , paddingLeft: "80px"}}>
          {/* <Col md={{span: 4, offset: 1}}>
            <div id="special-feature" style={{paddingBottom: "30px"}}>
              <h3>TMU: Inspire Women Series</h3>
            </div>
          </Col>
          <Col md={{span: 6, offset: 1}}>
            <div id="special-feature" style={{ paddingBottom: "30px" }}>
              <h3>Just Between Us: Article Feature</h3>
            </div>
          </Col> */}
       
            <Col xs={12}  md={6} >
              <Card style={{ width: "30rem", textAlign:"center"}}>
                <Card.Img variant="top" src="/images/pw_1_478x353.png" />
                <Card.Body>
                  <Card.Title>
                    To My Understanding: Inspire Women Series
                  </Card.Title>
                  <Card.Text>
                    Finding and being moved by inspiration is a way of life and
                    is something I follow every day. To celebrate my blog's, To
                    My Understanding, 7th birthday, I will be featuring some
                    inspiring women and have them share what inspires them. I am
                    proud to share this new series, the Inspire  Women Series. 
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6}>
              <Card style={{ width: "30rem", textAlign:"center" }}>
                <Card.Img variant="top" src="/images/pw_2_478x353.png" />
                <Card.Body>
                  <Card.Title>Wholeness for the Lonely Heart</Card.Title>
                  <Card.Text>
                    Just Between Us is a reader-written ministry. Women from all
                    over the world, who have a heart to walk alongside women to
                    encourage, inspire, comfort, help, and bring hope through
                    the power of God's Word, share their writing gifts with this
                    ministry. Check out the article I wrote for this ministry.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
  
        </Row>
        {/*           
          <Col md={{span: 3, offset: 3}}>
            <div id="published work" style={{textAlign: "center"}}>
              <h3>Published Personal Writing</h3>
            </div>
          </Col> */}
      </Container>
    </div>
  );
};

export default PersonalWriting;
