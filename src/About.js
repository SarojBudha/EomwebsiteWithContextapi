import React from "react";
import HeroSection from "./components/HeroSection";

const About = () => {
  const data = {
    name: "TAPAI KO aafnai store",
  };
  return (
    <div>
      <HeroSection myData={data} />
    </div>
  );
};

export default About;
