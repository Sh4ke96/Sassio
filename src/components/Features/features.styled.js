import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 15px 60px 15px;
  .features-heading {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
    .features-title-tag {
      color: #951fb3;
      font-size: 18px;
      font-weight: 500;
      padding: 3px 30px;
      border-radius: 8px;
      display: inline-block;
      background-color: #ede0f4;
    }
    .features-title {
      margin: 15px 0;
      font-size: 36px;
      text-align: center;
      .features-title-color {
        color: #951fb3;
      }
    }
    .features-text {
      color: #353535;
      text-align: center;
      font-size: 17px;
      line-height: 1.588;
      margin-bottom: 30px;
    }
    .features-button {
      width: 170px;
      .features-button-icon {
        margin-right: 10px;
        font-size: 20px;
      }
    }
  }
  .features-main {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    gap: 30px 0px;
    margin-top: 30px;
    max-width: 1200px;
    @media screen and (min-width: 1000px) {
      grid-template-columns: 1fr 1fr;
      gap: 30px 30px;
    }
  }
`;
