import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 15px 60px 15px;
  .price-heading {
    display: flex;
    flex-direction: column;
    align-items: center;
    .price-title-tag {
      color: #951fb3;
      font-size: 18px;
      font-weight: 500;
      padding: 3px 30px;
      border-radius: 8px;
      display: inline-block;
      background-color: #ede0f4;
    }
    .price-title {
      margin: 15px 0;
      font-size: 36px;
      text-align: center;
      .price-title-color {
        color: #951fb3;
      }
    }
  }
  .price-cards-container {
    @media screen and (min-width: 800px) {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
  }
`;
