import React from "react";
import FooterShort from "../components/Layout/FooterShort";
import HeaderShort from "../components/Layout/HeaderShort";
import Contact from "../components/Contact";
import SeoHead from "../components/SeoHead";

const ContactPage = () => {
  return (
    <div>
      <SeoHead title="MartinPoehl - Kontakt" />
      <HeaderShort />
      <Contact />
      <FooterShort />
    </div>
  );
};

export default ContactPage;
