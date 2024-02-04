import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <MainHeader>
      <a href="/">
        {" "}
        <img src="./images/sk.png" alt="Logo for ecommerce site" />
        {/* <img src="./images/logo.png" alt="Logo for ecommerce site" /> */}
      </a>
      <Navbar />
    </MainHeader>
  );
};

const MainHeader = styled.header`
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
  img {
    width: 250px;
    height: 60px;
  }
`;

export default Header;
