import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15px 15px 15px;
  background-color: #ebedf2;
  .about-container,
  .about-container2 {
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 60px;
    @media screen and (min-width: 1000px) {
      flex-direction: row;
    }
    .about-image {
      display: flex;
      flex: 0 0 50%;
      img {
        max-width: 100%;
        height: auto;
      }
    }
    .about-texts {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: 30px;
      flex: 0 0 50%;
      .about-texts-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 70px;
        height: 70px;
        color: white;
        font-size: 35px;
        padding: 15px;
        margin-bottom: 15px;
        border-radius: 50%;
        background-color: #951fb3;
      }
      .about-texts-title {
        font-size: 36px;
        line-height: 1.278;
        padding-bottom: 15px;
        color: #010101;
      }
      .about-texts-p {
        color: #353535;
        font-size: 17px;
        padding-bottom: 15px;
      }
      .about-texts-link {
        display: flex;
        max-width: 250px;
        align-items: center;
        position: relative;
        color: #010101;
        text-decoration: none;
        .about-texts-arrow {
          transition-duration: 0.75s;
          opacity: 0;
          margin-left: 10px;
          font-size: 25px;
          color: #951fb3;
        }
      }
      .about-texts-link::after {
        content: "";
        position: absolute;
        bottom: -10px;
        width: 0px;
        height: 3px;
        max-width: 250px;
        margin: 5px 0 0;
        transition-duration: 0.75s;
        opacity: 0;
        background-color: #73299a;
      }
      .about-texts-link:hover {
        cursor: pointer;
        color: #951fb3;
      }
      .about-texts-link:hover .about-texts-arrow {
        opacity: 1;
      }
      .about-texts-link:hover::after {
        width: 100%;
        opacity: 1;
      }
    }
  }
  .about-container2 {
    max-width: 1200px;
    display: flex;
    flex-direction: column-reverse;
    @media screen and (min-width: 1000px) {
      flex-direction: row-reverse;
      margin-bottom: 60px;
    }
    .about-image2 {
      display: flex;
      flex: 0 0 50%;
      margin-top: 30px;
      img {
        max-width: 100%;
        height: auto;
      }
    }
  }
`;
