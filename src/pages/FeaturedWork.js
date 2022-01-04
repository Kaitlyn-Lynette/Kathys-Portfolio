import React from "react";

import PortfolioHeader from "../components/PortfolioHeader";
import Portfolio from "../pages/Portfolio";
import GuestWriting from "../pages/GuestWriting"
import BlogWriting from "../pages/BlogWriting"
import NovelWriting from "../pages/NovelWriting"
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const FeaturedWork = () => {
  return (
    <div id="featuredwork">
      <Navigation></Navigation>
      <PortfolioHeader></PortfolioHeader>
      <Portfolio></Portfolio>
      <GuestWriting></GuestWriting>
      <BlogWriting></BlogWriting>
      <NovelWriting></NovelWriting>
      <Footer></Footer>
    
    </div>
  );
};

export default FeaturedWork;
