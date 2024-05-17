import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.nav`
  height: 70px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  background: black;
`;

const LogoTitleContainer = styled.div`
  display: flex;
  align-items: center;
  color: white;

  @media screen and (max-width: 768px) {
    flex-grow: 1;
    justify-content: center;
  }
`;

const Logo = styled.img`
  height: 40px;
  margin-right: 10px;
`;

const Title = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: ${({ click }) => (click ? "block" : "none")};
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    background: black;
    text-align: center;
  }
`;

const Link = styled(NavLink)`
  text-decoration: none;
  display: flex;
  color: white;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
    padding: 1rem;
  }
`;

const MobileMenuIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    color: white;
    display: flex;
    align-items: center;
    font-size: 4vh;
    cursor: pointer;
    top: 0;
    right: 0;
  }
`;

const SpacingDiv = styled.div`
  height: 70px; /* Height of the gap you want to create below the navbar */
`;

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <Navbar>
        <LogoTitleContainer>
          <Logo src="/path-to-your-logo.png" alt="Logo" />
          <Title>Unique Projects</Title>
        </LogoTitleContainer>
        <LinksContainer click={click}>
          <Link to="/" onClick={() => setClick(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setClick(false)}>
            Mini Project
          </Link>
          <Link to="/blog" onClick={() => setClick(false)}>
            Major Project
          </Link>
          <Link to="/Contact-Us" onClick={() => setClick(false)}>
            Contact Us
          </Link>
        </LinksContainer>
        <MobileMenuIcon onClick={handleClick}>
          {click ? <HamburgerMenuClose /> : <HamburgerMenuOpen />}
        </MobileMenuIcon>
      </Navbar>
      <SpacingDiv /> {/* Add this to create the space */}
    </>
  );
};

const HamburgerMenuOpen = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const HamburgerMenuClose = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

export default NavBar;
