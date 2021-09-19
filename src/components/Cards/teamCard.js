import React from "react";
import { Container } from "./teamCard.styled";

function TeamCard(props) {
  return (
    <Container>
      <div className="teamcard-img-container">
        <img className="teamcard-img" src={props.img} alt="" />
      </div>
      <div className="teamcard-heading">
        <h1 className="teamcard-heading-name">{props.name}</h1>
        <span className="teamcard-heading-job">{props.job}</span>
      </div>
      <div className="teamcard-main">
        <div className="teamcard-contact">
          <span className="teamcard-contact-phone">
            <i className="teamcard-contact-icon fas fa-phone"></i>123-345-214
          </span>
          <span className="teamcard-contact-mail">
            <i className="teamcard-contact-icon fas fa-envelope"></i>
            sample@sample.com
          </span>
        </div>
        <div className="teamcard-socials">
          <i className="teamcard-socials-share fas fa-share-alt"></i>
        </div>
      </div>
    </Container>
  );
}

export default TeamCard;
