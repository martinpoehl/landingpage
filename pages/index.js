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
      <SeoHead title="Martin Pöhl - Lassen Sie sich eine professionelle Webseite erstellen" />
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
