import React from "react";
import { Header, Container } from "./header.styled";
import Nav from "../Nav/nav";
import { animateScroll as scroll } from "react-scroll";

function SHeader() {
  const toogleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <Header>
      <Container>
        <img
          onClick={toogleHome}
          className="header-logo"
          src="images/logo.png"
          alt="sassio-word-logo"
        />
        <Nav />
      </Container>
    </Header>
  );
}

export default SHeader;
