import React from "react";
import BookEdits from "../pages/BookEdits";
import PortfolioHeader from "../components/PortfolioHeader";
// import CopyWriting from "../pages/CopyWriting"
import PersonalWriting from "../pages/PersonalWriting"
import SelectWriting from "../pages/SelectWriting"
import Portfolio from "../pages/Portfolio"
import BlogWriting from "../pages/BlogWriting"
import NovelWriting from "../pages/NovelWriting"
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const FeaturedWork = () => {
  return (
    <div id="featuredwork">
      {/* <SideBarNav></SideBarNav> */}
      <Navigation></Navigation>
      <PortfolioHeader></PortfolioHeader>
      <BookEdits></BookEdits>
      <Portfolio></Portfolio>
      <BlogWriting></BlogWriting>
      <NovelWriting></NovelWriting>
      {/* <CopyWriting></CopyWriting> */}
      {/* <PersonalWriting></PersonalWriting> */}
      {/* <SelectWriting></SelectWriting> */}
      <Footer></Footer>
    </div>
  );
};

export default FeaturedWork;
