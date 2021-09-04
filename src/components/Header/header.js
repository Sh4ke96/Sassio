import React from "react";
import { Container } from "./header.styled";
import Nav from "../Nav/nav";

function Header() {
  return (
    <Container>
      <img src="images/logo.png" alt="sassio-word-logo" />
      <Nav />
    </Container>
  );
}

export default Header;
