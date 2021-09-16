import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f2f7;
  padding: 120px 0px 55px;
  @media screen and (min-width: 1000px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }
  .features2-heading {
    display: flex;
    justify-content: center;
    max-width: 1200px;
    .features2-img {
      max-width: 100%;
      height: auto;
    }
  }
  .features2-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    max-width: 1200px;
    @media screen and (min-width: 1000px) {
      align-items: flex-start;
      flex: 0 0 40;
      max-width: 40%;
    }
    @media screen and (min-width: 1400px) {
      margin-left: 30px;
    }
    .features2-title-tag {
      color: #951fb3;
      font-size: 18px;
      font-weight: 500;
      padding: 3px 30px;
      border-radius: 8px;
      display: inline-block;
      background-color: #ede0f4;
    }
    .features2-title {
      margin: 15px 0;
      font-size: 36px;
      text-align: center;
      @media screen and (min-width: 1000px) {
        text-align: start;
      }
      .features2-title-color {
        color: #951fb3;
      }
    }
    .features2-text {
      color: #353535;
      text-align: center;
      font-size: 17px;
      line-height: 1.588;
      margin-bottom: 30px;
      @media screen and (min-width: 1000px) {
        text-align: start;
      }
    }
    .features2-link {
      display: flex;
      align-items: center;
      position: relative;
      color: #010101;
      text-decoration: none;
      .features2-link-icon {
        transition-duration: 0.75s;
        opacity: 0;
        margin-left: 10px;
        font-size: 25px;
        color: #951fb3;
      }
    }
    .features2-link::after {
      content: "";
      position: absolute;
      bottom: -10px;
      width: 0px;
      height: 3px;
      margin: 5px 0 0;
      transition-duration: 0.75s;
      opacity: 0;
      background-color: #73299a;
    }
    .features2-link:hover {
      cursor: pointer;
      color: #951fb3;
    }
    .features2-link:hover .features2-link-icon {
      opacity: 1;
    }
    .features2-link:hover::after {
      width: 100%;
      opacity: 1;
    }
  }
`;
