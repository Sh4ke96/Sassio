import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 15px 15px 15px;
  .heading-title-tag {
    color: #951fb3;
    font-size: 18px;
    font-weight: 500;
    padding: 3px 30px;
    border-radius: 8px;
    display: inline-block;
    background-color: #ede0f4;
  }
  .heading-title {
    margin: 15px 0;
    font-size: 36px;
    text-align: center;
    .heading-title-span {
    }
  }
  .heading-text {
    text-align: center;
    margin-bottom: 15px;
  }
  .heading-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    .heading-buttons-container {
      display: flex;
      .heading-link {
        text-decoration: none;
        .heading-button {
          margin: 0 10px;
          .heading-icon {
            margin-right: 5px;
          }
        }
      }
    }
    .heading-buttons-span {
      color: #6a6a6a;
      display: block;
      font-size: 14px;
      margin-top: 5px;
    }
  }
  .heading-mockup {
    margin: 30px 0;
    .heading-mockup-img {
      max-width: 100%;
      height: auto;
    }
  }
`;
