import React from "react";
import { Container } from "./features2.styled";

function Features2() {
  return (
    <Container>
      <div className="features2-heading">
        <img className="features2-img" src="images/features2.png" alt="" />
      </div>
      <div className="features2-main">
        <span className="features2-title-tag">Our awesome features</span>
        <h1 className="features2-title">
          SaaSio use <span className="features2-title-color">the tool</span> you
          love
        </h1>
        <p className="features2-text">
          Say goodbye to manual data entry. Integrate with the tools you depend
          on so your team can get proposals, contracts and quotes out the door
          fast.
        </p>
        <a className="features2-link" href="/">
          All integrations
          <i className="features2-link-icon fas fa-long-arrow-alt-right"></i>
        </a>
      </div>
    </Container>
  );
}

export default Features2;
