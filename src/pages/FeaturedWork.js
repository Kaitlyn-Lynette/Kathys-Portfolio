import React from "react";
import BookEdits from "../pages/BookEdits";
import FeaturedHeader from "../components/FeaturedHeader";
import CopyWriting from "../pages/CopyWriting"
import PersonalWriting from "../pages/PersonalWriting"
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const FeaturedWork = () => {
  return (
    <div id="featuredwork">
      {/* <SideBarNav></SideBarNav> */}
      <Navigation></Navigation>
      <FeaturedHeader></FeaturedHeader>
      <BookEdits></BookEdits>
      <CopyWriting></CopyWriting>
      <PersonalWriting></PersonalWriting>
      <Footer></Footer>
    </div>
  );
};

export default FeaturedWork;
