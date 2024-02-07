import React from 'react'
import SeoHead from "../components/SeoHead";
import Footer from '../components/Layout/FooterShort';
import Header from '../components/Layout/Header';
import About from '../components/About';

const AboutMePage = () => {
  return (
    <>
      <SeoHead title="Martin Pöhl - Über mich" />
      <Header />
      <About />
      <Footer />
    </>
  )
}

export default AboutMePage