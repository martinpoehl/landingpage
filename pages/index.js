import Products from "../components/Products";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Testimoni from "../components/Testimoni";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <>
      <SeoHead title="Martin Pöhl - Ich baue Ihre Webseite für Sie" />
      <Layout>
        <Hero />
        <Products />
        <Pricing />
        <Projects />
        <Testimoni />
      </Layout>
    </>
  );
}
