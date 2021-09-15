import React from "react";
import { Container } from "./features.styled";
import Button from "../Button/button";
import FeaturesCard from "../Cards/featuresCard";

function Features() {
  return (
    <Container>
      <div className="features-heading">
        <span className="features-title-tag">Our awesome features</span>
        <h1 className="features-title">
          Our features will help to{" "}
          <span className="features-title-color">improve business</span>
        </h1>
        <p className="features-text">
          Sales teams use PandaDoc to improve deal workflow, insights, and speed
          while delivering an amazing buying experience. Get your documents out
          the door fast to keep deals.
        </p>
        <Button className="features-button">
          <i className="features-button-icon far fa-clipboard"></i>Start a free
          trial
        </Button>
      </div>
      <div className="features-main">
        <FeaturesCard
          icon={"featuresCard-icon fab fa-gg-circle"}
          title={"Software development"}
          text={
            "Create stunning, effective sales documents with custom-designed theme & template."
          }
        />
        <FeaturesCard
          icon={"featuresCard-icon fas fa-pencil-alt"}
          title={"UI/UX design"}
          text={
            "Create stunning, effective sales documents with custom-designed theme & template."
          }
        />
        <FeaturesCard
          icon={"featuresCard-icon fas fa-headphones"}
          title={"Dedicated Support"}
          text={
            "Create stunning, effective sales documents with custom-designed theme & template."
          }
        />
        <FeaturesCard
          icon={"featuresCard-icon far fa-smile-beam"}
          title={"Customer Satisfaction"}
          text={
            "Create stunning, effective sales documents with custom-designed theme & template."
          }
        />
      </div>
    </Container>
  );
}

export default Features;
