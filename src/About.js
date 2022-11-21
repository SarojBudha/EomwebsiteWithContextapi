import React from "react";
//%%%% */ import { useContext } from "react";   no need to import because of  custom hooks
import HeroSection from "./components/HeroSection";
// import { AppContext, useProductContext } from "./context/productcontex";

const About = () => {
  // %%%% const {myName} = useContext(AppContext);  --simplified by custom hooks
  // const { myName } = useProductContext();
  const data = {
    name: "TAPAI KO aafnai store",
  };
  return (
    <div>
      {/* {myName} */}
      <HeroSection myData={data} />
    </div>
  );
};

export default About;
