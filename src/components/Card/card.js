import React from "react";
import { Container } from "./card.styled";

function Card(props) {
  const { ...res } = props;
  return (
    <Container {...res}>
      <i className={props.icon}></i>
      <h1 className="card-title">{props.title}</h1>
      <p className="card-text">{props.text}</p>
    </Container>
  );
}

export default Card;
