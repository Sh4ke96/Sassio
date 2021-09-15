import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
  transition: 0.7s all ease-in-out;
  padding: 20px 15px;
  .featuresCard-heading {
    .featuresCard-icon {
      color: #951fb3;
      padding: 15px;
      font-size: 50px;
      border: 2px solid #951fb3;
      border-radius: 50%;
    }
  }
  .featuresCard-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
    max-width: 350px;
    .featuresCard-main-title {
      font-size: 25px;
      text-align: center;
    }
    .featuresCard-main-text {
      margin-top: 10px;
      color: #212529;
      text-align: center;
      font-size: 16px;
    }
  }
  &:hover {
    cursor: pointer;
    box-shadow: 0px 20px 81px 0px rgba(8, 0, 20, 0.3);
  }
`;
