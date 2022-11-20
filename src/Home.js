import React from "react";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
// import styled from "styled-components";
// const Home = () => {
//   return <Wrapper className="test">hello this is home</Wrapper>;
// };
// // // ----to access th e theme-----
// // const Wrapper = styled.section`
// //   height: 100vh;
// //   background-color: ${({ theme }) => theme.colors.bg};

const Home = () => {
  const data = {
    name: "HAMRO STORE",
  };

  return (
    <>
      <HeroSection myData={data} />;
      <Services />;
      <Trusted />;
    </>
  );
};
export default Home;
