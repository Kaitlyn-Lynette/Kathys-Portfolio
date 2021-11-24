import React from "react";
import BookEdits from "../pages/BookEdits";
import PortfolioHeader from "../components/PortfolioHeader";
import CopyWriting from "../pages/CopyWriting"
import PersonalWriting from "../pages/PersonalWriting"
import SelectWriting from "../pages/SelectWriting"
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const FeaturedWork = () => {
  return (
    <div id="featuredwork">
      {/* <SideBarNav></SideBarNav> */}
      {/* <Navigation></Navigation> */}
      <PortfolioHeader></PortfolioHeader>
      <BookEdits></BookEdits>
      <CopyWriting></CopyWriting>
      <PersonalWriting></PersonalWriting>
      <SelectWriting></SelectWriting>
      <Footer></Footer>
    </div>
  );
};

export default FeaturedWork;
