import React from "react";
// import "./home.css";
import Home from "./home/Home";
import FeaturesSection from "./featuresSection/FeaturesSection";
import DataSection from './dataSection/DataSection'
import ProgressSection from './progressSection/ProgressSection'
import ProgressImage from "./progressImage/ProgressImage";
import OurClients from "./ourClients/OurClients";
import CenteredText from "./centered/CenteredText";
import FooterHome from "./footerHome/FooterHome";
import OurAmazingTeam from "./ourAmazingTeam/OurAmazingTeam";
import HeroSection from "./heroSection/HeroSection";
import ProductsData from "./products/ProductsData";
import PlaneData from "./planeData/PlaneData";
import Solutions from "./solutions/Solutions";
import Testimonials from './testimonials/Testimonials';

const Hemo = () => {
  return (
    <section>
      <Home />
      <FeaturesSection />
      <Solutions/>
      <Testimonials/>
      <ProgressSection/>
      <DataSection/>
      <PlaneData />
      <OurAmazingTeam />
      <ProductsData />      
      <ProgressImage />      
      <OurClients />
      <HeroSection />
      <CenteredText />
      <FooterHome />
      
    </section>
  );
};

export default Hemo;
