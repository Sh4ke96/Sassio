import React from "react";
import { useState, useEffect } from "react";
import { Container, DesktopMenu, MobileMenu, BackDrop } from "./nav.styled";
import Button from "../Button/button";
import { Link } from "react-scroll";

function Nav() {
  const [setMobileMenuOpen, MobileMenuIsOpen] = useState(false);
  function openHandler() {
    MobileMenuIsOpen(true);
  }
  function closeHandler() {
    MobileMenuIsOpen(false);
  }
  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = setMobileMenuOpen ? "hidden" : "auto";
  }, [setMobileMenuOpen]);
  return (
    <Container>
      <DesktopMenu>
        <ul>
          <li>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={600}
              activeClass="active"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="service"
              spy={true}
              smooth={true}
              offset={-100}
              duration={600}
              activeClass="active"
            >
              Service
            </Link>
          </li>
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
              activeClass="active"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="features"
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
              activeClass="active"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              to="team"
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
              activeClass="active"
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              to="price"
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
              activeClass="active"
            >
              Pricing
            </Link>
          </li>
        </ul>
      </DesktopMenu>
      <Button>Free sign up</Button>
      <i className="fas fa-bars Nav-icon" onClick={openHandler}></i>
      {setMobileMenuOpen && (
        <MobileMenu>
          <i
            className="fas fa-times mobile-close-icon"
            onClick={closeHandler}
          ></i>
          <img src="images/logo.png" alt="sassio-word-logo" />
          <ul>
            <li>
              <a href="home">Home</a>
            </li>
            <li>
              <a href="/">Service</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">Team</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
          </ul>
        </MobileMenu>
      )}
      {setMobileMenuOpen && <BackDrop />}
    </Container>
  );
}

export default Nav;
