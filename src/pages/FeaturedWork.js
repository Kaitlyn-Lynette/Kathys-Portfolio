import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import SideBarNav from "../components/SideBarNav";
import BookEdits from "../pages/BookEdits";
import FeaturedHeader from "../components/FeaturedHeader";

const FeaturedWork = () => {
  return (
    <div id="featuredwork">
      <SideBarNav></SideBarNav>
      <FeaturedHeader></FeaturedHeader>
      <BookEdits></BookEdits>
    </div>
  );
};

export default FeaturedWork;
