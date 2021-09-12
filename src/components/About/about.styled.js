import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15px 15px 15px;
  .about-title-tag {
    color: #951fb3;
    font-size: 18px;
    font-weight: 500;
    padding: 3px 30px;
    border-radius: 8px;
    display: inline-block;
    background-color: #ede0f4;
  }
  .about-title {
    margin: 15px 0;
    font-size: 36px;
    text-align: center;
    .about-title-color {
      color: #951fb3;
    }
  }
  .about-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 50px 0px;
    @media screen and (min-width: 1000px) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      gap: 40px 30px;
    }
    @media screen and (min-width: 1400px) {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 40px 30px;
    }
  }
`;
