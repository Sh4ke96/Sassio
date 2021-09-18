import React from "react";
import { Container } from "./priceCard.styled";
import Button from "../Button/button";

function PriceCard(props) {
  return (
    <Container>
      <div className="priceCard-heading">
        <div className="priceCard-heading-icon-container">
          <i className={props.icon}></i>
        </div>
        <div className="priceCard-heading-text">
          <span className="priceCard-title-tag">{props.tag}</span>
          <h2 className="priceCard-title">{props.title}</h2>
        </div>
      </div>
      <div className="priceCard-main">
        <ul className="priceCard-main-ul">
          <li className="priceCard-list-item">
            <i className="priceCard-list-icon-accept fas fa-check"></i>Up to 5
            Web Pages
          </li>
          <li className="priceCard-list-item">
            <i className="priceCard-list-icon-accept fas fa-check"></i>Meta
            Description Optimization
          </li>
          <li className="priceCard-list-item">
            <i className={props.mark1}></i>Baseline Ranking Report
          </li>
          <li className="priceCard-list-item">
            <i className={props.mark2}></i>Initial Backlink Analysis
          </li>
          <li className="priceCard-list-item">
            <i className={props.mark3}></i>10 Keyword Optimization
          </li>
        </ul>
        <Button className="priceCard-button">Try it now</Button>
      </div>
    </Container>
  );
}

export default PriceCard;
