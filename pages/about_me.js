import React from "react";
import SeoHead from "../components/SeoHead";
import FooterShort from "../components/Layout/FooterShort";
import HeaderShort from "../components/Layout/HeaderShort";
import About from "../components/About";

const AboutMePage = () => {
  return (
    <>
      <SeoHead title="MartinPoehl - Über mich" />
      <HeaderShort />
      <About />
      <FooterShort />
    </>
  );
};

export default AboutMePage;
