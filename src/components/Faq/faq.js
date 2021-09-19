import React from "react";
import { Container } from "./faq.styled";
import Example from "../Accordion/accordion";

function Faq() {
  return (
    <Container id="faq">
      <div className="faq-heading">
        <span className="faq-title-tag">Frequently asked questions </span>
        <h1 className="faq-title">
          We <span className="faq-title-color">have some</span> FAQ
        </h1>
      </div>
      <Example />
    </Container>
  );
}

export default Faq;
