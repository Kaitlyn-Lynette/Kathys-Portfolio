import React from "react";
import SideBarNav from "../components/SideBarNav";
import BookEdits from "../pages/BookEdits";
import FeaturedHeader from "../components/FeaturedHeader";
import CopyWriting from "../pages/CopyWriting"

const FeaturedWork = () => {
  return (
    <div id="featuredwork">
      <SideBarNav></SideBarNav>
      <FeaturedHeader></FeaturedHeader>
      <BookEdits></BookEdits>
      <CopyWriting></CopyWriting>
    </div>
  );
};

export default FeaturedWork;
