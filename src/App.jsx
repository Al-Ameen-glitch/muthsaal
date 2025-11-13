import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Workflow from "./components/Workflow";
import FeatureSection from "./components/FeatureSection";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <Workflow />
        <FeatureSection />
        <Testimonial />
        <Footer />
      </div>
    </>
  );
};

export default App;
