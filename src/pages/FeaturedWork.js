import React from "react";
import SideBarNav from "../components/SideBarNav";
import BookEdits from "../pages/BookEdits";
import FeaturedHeader from "../components/FeaturedHeader";
import CopyWriting from "../pages/CopyWriting"
import PersonalWriting from "../pages/PersonalWriting"
import Navigation from "../components/Navigation";

const FeaturedWork = () => {
  return (
    <div id="featuredwork">
      {/* <SideBarNav></SideBarNav> */}
      <Navigation></Navigation>
      <FeaturedHeader></FeaturedHeader>
      <BookEdits></BookEdits>
      <CopyWriting></CopyWriting>
      <PersonalWriting></PersonalWriting>
    </div>
  );
};

export default FeaturedWork;
