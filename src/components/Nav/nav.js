import React from "react";
import { useState } from "react";
import { Container, DesktopMenu, MobileMenu, BackDrop } from "./nav.styled";
import Button from "../Button/button";

function Nav() {
  const [setMobileMenuOpen, MobileMenuIsOpen] = useState(false);
  function openHandler() {
    MobileMenuIsOpen(true);
  }
  function closeHandler() {
    MobileMenuIsOpen(false);
  }
  return (
    <Container>
      <DesktopMenu>
        <ul>
          <li>
            <a href="/">Home</a>
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
              <a href="/">Home</a>
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
