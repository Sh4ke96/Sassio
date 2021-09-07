import React from "react";
import { Container } from "./heading.styled";
import Button from "../Button/button";

function Heading() {
  return (
    <Container>
      <span className="heading-title-tag">Creative SAAS webiste</span>
      <h1 className="heading-title">
        Best website for <span className="heading-title-span">SAAS</span>{" "}
        business
      </h1>
      <p className="heading-text">
        Even in the most uncertain times, Help Scout keeps you connected with
        customers.
      </p>
      <div className="heading-buttons">
        <div className="heading-buttons-container">
          <a href="/" className="heading-link">
            <Button className="heading-button">
              <i className="fas fa-cloud-download-alt heading-icon"></i>Try it
              free
            </Button>
          </a>
          <a href="/" className="heading-link">
            <Button className="heading-button">
              <i className="fas fa-clipboard heading-icon"></i>Get a demo
            </Button>
          </a>
        </div>
        <span className="heading-buttons-span">No credit card required*</span>
      </div>
      <div className="heading-mockup">
        <img
          className="heading-mockup-img"
          src="images/mockup.png"
          alt="sassio-mockup-laptop"
        />
      </div>
    </Container>
  );
}

export default Heading;
