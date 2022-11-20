import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <Mainheader>
      {/* ---INSTEAD of a href use navlink  to avoid page referesh from one componenet to another componenet */}
      <NavLink to="/">
        <img src="./images/logo.png" alt="my logo img" />
      </NavLink>
      <Nav />
    </Mainheader>
  );
};
const Mainheader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }
`;
export default Header;
