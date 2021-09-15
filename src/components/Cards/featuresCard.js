import React from "react";
import { Container } from "./featuresCard.styled";

function FeaturesCard(props) {
  return (
    <Container>
      <div className="featuresCard-heading">
        <i className={props.icon}></i>
      </div>
      <div className="featuresCard-main">
        <h1 className="featuresCard-main-title">{props.title}</h1>
        <p className="featuresCard-main-text">{props.text}</p>
      </div>
    </Container>
  );
}

export default FeaturesCard;
