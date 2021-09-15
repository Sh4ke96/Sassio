import React from "react";
import { Container } from "./about2.styled";

function About2() {
  return (
    <Container>
      <div className="about-container">
        <div className="about-image">
          <img src="images/about2-img.png" alt="" />
        </div>
        <div className="about-texts">
          <i className="about-texts-icon fas fa-desktop"></i>
          <h1 className="about-texts-title">
            Don’t just engage, make it engaging.
          </h1>
          <p className="about-texts-p">
            Create stunning, effective sales documents with custom base designed
            themes, templates, and embedded rich media. It’s easy to create and
            send professional-looking docs that canbe win every time.
          </p>
          <a className="about-texts-link" href="/">
            More About the software{" "}
            <i className="about-texts-arrow fas fa-long-arrow-alt-right"></i>
          </a>
        </div>
      </div>
      <div className="about-container2">
        <div className="about-image2">
          <img src="images/about2-img2.png" alt="" />
        </div>
        <div className="about-texts">
          <i className="about-texts-icon fas fa-cog"></i>
          <h1 className="about-texts-title">
            Workflow that works for your benefit.
          </h1>
          <p className="about-texts-p">
            Give your team the ability to quickly create, send, and track docs
            within an approval system that works for everyone. And will be very
            easy to work with SaaSio that workflow will work only for your
            benefit.
          </p>
          <a className="about-texts-link" href="/">
            Read all customer stories{" "}
            <i className="about-texts-arrow fas fa-long-arrow-alt-right"></i>
          </a>
        </div>
      </div>
    </Container>
  );
}

export default About2;
