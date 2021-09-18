import React from "react";
import { Container } from "./price.styled";
import PriceCard from "../Cards/priceCard";

function Price() {
  return (
    <Container>
      <div className="price-heading">
        <span className="price-title-tag">Pricing</span>
        <h1 className="price-title">
          Our <span className="price-title-color">best pricing</span> offer!
        </h1>
      </div>
      <div className="price-cards-container">
        <PriceCard
          icon={"priceCard-heading-icon fas fa-car-side"}
          tag={"Basic"}
          title={"$00"}
          mark1={"priceCard-list-icon-cancel fas fa-times"}
          mark2={"priceCard-list-icon-cancel fas fa-times"}
          mark3={"priceCard-list-icon-cancel fas fa-times"}
        />
        <PriceCard
          icon={"priceCard-heading-icon fas fa-truck-pickup"}
          tag={"Standard"}
          title={"$49"}
          mark1={"priceCard-list-icon-cancel fas fa-times"}
          mark2={"priceCard-list-icon-accept fas fa-check"}
          mark3={"priceCard-list-icon-accept fas fa-check"}
        />
        <PriceCard
          icon={"priceCard-heading-icon fas fa-truck"}
          tag={"Premium"}
          title={"$99"}
          mark1={"priceCard-list-icon-accept fas fa-check"}
          mark2={"priceCard-list-icon-accept fas fa-check"}
          mark3={"priceCard-list-icon-accept fas fa-check"}
        />
      </div>
    </Container>
  );
}

export default Price;
