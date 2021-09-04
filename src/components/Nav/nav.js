import React from "react";
import { Container, DesktopMenu } from "./nav.styled";
import Button from "../Button/button";

function Nav() {
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
      <i class="fas fa-bars Nav-icon"></i>
    </Container>
  );
}

export default Nav;
