import React from "react";
import { Container } from "./nav.styled";
import Button from "../Button/button";

function Nav() {
  return (
    <Container>
      <Button>Free sign up</Button>
      <i class="fas fa-bars Nav-icon"></i>
    </Container>
  );
}

export default Nav;
