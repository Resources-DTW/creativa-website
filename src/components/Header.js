import React, { useState } from "react";
import { styled } from "styled-components";
import { Logo } from "../assets";
import { CgMenuRightAlt } from "react-icons/cg";

const Navbar = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  background-color: #000;
  color: white;
  padding: 50px;
  z-index: 1;
  overflow: hidden;
  .menu {
    display: none;
  }
  @media screen and (max-width: 768px) {
    height: auto;
    display: block;
    position: relative;
    .menu {
      display: inline-block;
      position: absolute;
      top: 46px;
      right: 20px;
      cursor: pointer;
    }
    .nav {
      display: none;
    }
    .navs {
      position: absolute;
      background-color: #fff;
      right: 0;
      top: 80px;
      width: 0px;
      height: calc(100vh - 60px);
      transition: all 0.3s ease-in;
      overflow: hidden;
    }
    .navs.active {
      width: 270px;
    }
    .logo {
      position: absolute;
      top: 30px;
      left: 30px;
      display: inline-block;
    }
    display: block;
  }
  @media screen and (max-width: 375px) {
    .logo {
      position: absolute;
      top: 40px;
    }
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;
  overflow: hidden;
`;

const LogoContainer = styled.a`
  margin-left: -10px;
`;

const NavLinks = styled.div`
  list-style: none;
  display: flex;
  gap: 50px;
  align-items: center;
  @media screen and (max-width: 768px) {
    .active {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
`;

const NavList = styled.a`
  text-decoration: none;
  color: white;
  opacity: 0.6;
  font-family: "Poppins", sans-serif;
  &:hover {
    color: white;
    opacity: 1;
    transition: all 0.7s ease-in-out;
  }
  @media screen and (max-width: 768px) {
    .active {
      margin-right: unset;
      margin-top: 22px;
      color: #000;
    }
  }
`;

const EnrollBtn = styled.a`
  background-color: rgba(255, 255, 255, 0.1);
  height: 44px;
  width: 146px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  text-align: center;
  color: #fff;
  margin-left: 20px;
  font-family: "Poppins", sans-serif;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export default function Header() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar>
      <Container>
        <LogoContainer className="logo max-sm:w-[140px]" href="/">
          <img src={Logo} className=" max-sm:mt-2" alt="Logo" width="180px" />
        </LogoContainer>
        <NavLinks>
          <CgMenuRightAlt
            className="menu"
            aria-hidden="true"
            color="#fff"
            size={28}
            onClick={handleToggle}
          />
          <div className={`navs ${expanded && "active"} flex gap-10`}>
            <NavList className="nav" href="/">
              Home
            </NavList>
            <NavList className="nav" href="/">
              About us
            </NavList>
            <NavList className="nav" href="/">
              Upcoming Batches
            </NavList>
            <NavList className="nav" href="/">
              Our Students Works
            </NavList>
          </div>
          {/* <EnrollBtn href="/">Enroll Now</EnrollBtn> */}
          <button class="before:ease relative h-[44px] w-[146px] px-[30px] py-[10px] overflow-hidden max-md:hidden rounded-3xl bg-white/10 text-white transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-40">
            <a href="/" relative="relative z-10" className="text-[15px]">
              Enroll Now
            </a>
          </button>
        </NavLinks>
      </Container>
    </Navbar>
  );
}
