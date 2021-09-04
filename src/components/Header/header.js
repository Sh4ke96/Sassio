import React from "react";
import { Header, Container } from "./header.styled";
import Nav from "../Nav/nav";

function SHeader() {
  return (
    <Header>
      <Container>
        <img src="images/logo.png" alt="sassio-word-logo" />
        <Nav />
      </Container>
    </Header>
  );
}

export default SHeader;
