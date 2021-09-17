import React, { Component } from "react";
import TeamCard from "../Cards/teamCard";
import { Container } from "./team.styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Responsive extends Component {
  render() {
    let settings = {
      centerMode: true,
      centerPadding: 0,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 799,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Container>
        <div className="team-heading">
          <span className="team-title-tag">Our team members</span>
          <h1 className="team-title">Our team members</h1>
        </div>
        <div className="team-main">
          <Slider {...settings}>
            <TeamCard
              job={"UI/UX designer"}
              img={"images/team1.jpg"}
              name={"Mark Anthony"}
            />
            <TeamCard
              job={"Software designer"}
              img={"images/team2.jpg"}
              name={"Lifeo Nion Fro"}
            />
            <TeamCard
              job={"App developer"}
              img={"images/team3.jpg"}
              name={"Niofar Titir"}
            />
            <TeamCard
              job={"UI/UX designer"}
              img={"images/team1.jpg"}
              name={"Lion Venchi"}
            />
            <TeamCard
              job={"Software designer"}
              img={"images/team2.jpg"}
              name={"Patrick Stark"}
            />
            <TeamCard
              job={"App developer"}
              img={"images/team3.jpg"}
              name={"Abdul Aswalew"}
            />
          </Slider>
        </div>
      </Container>
    );
  }
}
