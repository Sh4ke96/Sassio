import React from "react";
import { Container } from "./header.styled";
import Button from "../Button/button";

function Header() {
  return (
    <Container>
      <img src="images/logo.png" alt="sassio-word-logo" />
      <Button>
        <a href="/">Free sign up</a>
      </Button>
    </Container>
  );
}

export default Header;
