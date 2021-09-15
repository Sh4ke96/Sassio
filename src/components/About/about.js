import React from "react";
import Card from "../Card/card";
import { Container } from "./about.styled";

function About() {
  return (
    <Container>
      <span className="about-title-tag">Our awesome services</span>
      <h1 className="about-title">
        <span className="about-title-color">We give</span> best facilites
      </h1>
      <div className="about-container">
        <Card
          icon={"card-icon fas fa-calendar-alt"}
          title={"Faster docs. Faster deals"}
          text={
            "Get your documents out the door fast to keep deals with automatic notifications, on-the-fly editing, and integrated."
          }
        />
        <Card
          icon={"card-icon fas fa-desktop"}
          title={"UI/UX design based app"}
          text={
            "Whether you have a team of 2 or 200, the Mailboxes keep everyone the same page. Leverage automation to move fast."
          }
        />
        <Card
          icon={"card-icon fas fa-vector-square"}
          title={"Build designs that scale"}
          text={
            "Lay the foundations for your product’s design system with reusable, responsive components that automatically scale."
          }
        />
        <Card
          icon={"card-icon fas fa-folder-open"}
          title={"Customise your workflow"}
          text={
            "Choose from hundreds of plugins and integrations that let you do everything from animating interactions."
          }
        />
        <Card
          icon={"card-icon fas fa-user"}
          title={"Customer Support"}
          text={
            "Whether you have a team of 2 or 200, the Mailboxes keep everyone the same page. Leverage automation to move fast."
          }
        />
        <Card
          icon={"card-icon fas fa-key"}
          title={"Super security"}
          text={
            "Whether you have a team of 2 or 200, the Mailboxes keep everyone the same page. Leverage automation to move fast."
          }
        />
      </div>
      <a className="about-link" href="/">
        Want to download this app?
        <i className="about-link-icon fas fa-long-arrow-alt-right"></i>
      </a>
    </Container>
  );
}

export default About;
