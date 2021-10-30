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
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="tst">
          <p>
            “Katherine was a pivotal member of the writing team. She dedicated
            herself to understanding each client's distinct needs, researching
            new and existing resources to identify and hone in on the brand's
            voices. Never shying away from asking questions she made each story
            her own, leveraging every moment to build up client's brands.”
          </p>
        </div>

        <div className="tst-author-info" style={{textAlign:"center"}}>
          <Row>
            <Col md={{span: 3, offset: 2}}>
              <Image src="/images/MM_Logo100x100.png" />
            </Col>
            <Col md={4} style={{marginTop: "25px", paddingLeft: "0px", paddingRight: "12px"}}><p>Cindy Burgos, Managing Director</p></Col>
          </Row>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        “I’ve been working with Katherine Perez for over a year. She has taken
        my online presence to a new level. She is great at navigating social
        media and the apps needed to create eye-catching flyers and
        announcements. Katherine is a pleasure to work with, positive,
        supportive and timely, always able to accommodate my projects as they
        arise. She also has a fresh creative flair to her work. Already
        recommended her to many in my circle.”
      </SwiperSlide>
      <SwiperSlide>
        “Katherine Perez is an excellent writer who is not only precise when it
        comes to the nuances of editing, but is creative, articulate and well
        versed in culture. She recently edited one of my books and did an
        amazing job! I highly recommend her!"
      </SwiperSlide>
      <SwiperSlide>
        "After reaching out to Katherine our team felt like she was a perfect
        fit for what we needed. Several of our clients needed blogs written
        bi-weekly, weekly, or monthly. We gave Katherine all the deadlines,
        topics, and direction and from there she executed what we needed
        perfectly. She did all her own research, came in within the word count
        we needed and wrote on many different topic. Katherine never missed one
        deadline. It was an absolute pleasure working with her."
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
