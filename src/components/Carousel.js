import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "../App.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "../App.css";

// install Swiper modules
SwiperCore.use([Pagination]);

const Carousel = () => {
  return (
    <Swiper
      pagination={true}
      spaceBetween={50}
      slidesPerView={1}
      centeredSlides
      breakpoints ={{
        width: 640, 
        slidesPerView: 1
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="tst">
          <Row className="tst-row">
            <Col md={12} xs={8}>
              <p>
                “Katherine was a pivotal member of the writing team. She
                dedicated herself to understanding each client's distinct needs,
                researching new and existing resources to identify and hone in
                on the brand's voices. Never shying away from asking questions
                she made each story her own, leveraging every moment to build up
                client's brands.”
              </p>
            </Col>
          </Row>
        </div>

        <div className="tst-author-info" style={{ textAlign: "center" }}>
          <Row>
            <Col md={{ span: 3, offset: 2 }} xs={4}>
              <Image src="/images/MM_Logo100x100.png" />
            </Col>
            <Col
              md={4}
              xs={4}
              className="tst-author-cindy"
            >
              <p>Cindy Burgos, Managing Director</p>
            </Col>
          </Row>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="tst">
          <Row className="tst-row">
            <Col md={12} xs={8} style={{ textAlign: "center", fontSize: "14.5px"}}>
              <p>
                “I​​t was a joy having Kathy serve alongside the team at our
                creative agency. Many of our clients require flexibility, and
                Kathy was always willing to step into the gap with both her
                availability and attention to detail to provide whatever was
                needed. Throughout her time with us, I knew I could always rely
                on Kathy to finish her work efficiently, ask questions when
                challenges came, and be a positive voice in any interactions
                with the team."
              </p>
            </Col>
          </Row>
        </div>
        <div className="tst-author-info" style={{ textAlign: "center" }}>
        <Row>
            <Col md={{ span: 3, offset: 2 }} xs={4}>
              <Image src="/images/MM_Logo100x100.png" />
            </Col>
            <Col
              md={4}
              xs={4}
              className="tst-author-russell"
            >
              <p>Rob Russell, Account Manager</p>
            </Col>
          </Row>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="tst">
          <Row className="tst-row">
            <Col md={12} xs={8} style={{ textAlign: "center" }}>
              <p>
                “She has taken my online presence to a new level. She is great
                at navigating social media and the apps needed to create
                eye-catching flyers and announcements. Katherine is a pleasure
                to work with, positive, supportive and timely, always able to
                accommodate my projects as they arise. Already recommended her
                to many in my circle.”
              </p>
            </Col>
          </Row>
        </div>
        <div className="tst-author-info" style={{ textAlign: "center" }}>
          <Row>
            <Col md={{ span: 4, offset: 2 }} xs={4}>
              <Image
                style={{ paddingBottom: "20px" }}
                src="/images/RC_Logo100x100.png"
              />
            </Col>
            <Col
              md={4}
              xs={5}
              className="tst-author-regina"
            >
              <p>Regina Stafford, Rewards Coaching</p>
            </Col>
          </Row>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="tst">
          <Row className="tst-row">
            <Col md={12} xs={8} style={{ textAlign: "center" }}>
              <p>
                “Katherine Perez is an excellent writer who is not only precise
                when it comes to the nuances of editing, but is creative,
                articulate and well versed in culture. She recently edited one
                of my books and did an amazing job! I highly recommend her!"
              </p>
            </Col>
          </Row>
        </div>
        <div className="tst-author-info" style={{ textAlign: "center" }}>
          <Row>
            <Col md={{ span: 3, offset: 2 }} xs={3}>
              <Image
                style={{ paddingBottom: "20px" }}
                src="/images/MMI_Logo_100x100.png"
              />
            </Col>
            <Col
              md={6}
              xs={6}
              className="tst-author-mattera"
            >
              <p>Bishop Joseph Mattera, Mattera Ministries International</p>
            </Col>
          </Row>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
