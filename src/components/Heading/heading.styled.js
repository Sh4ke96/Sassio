import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 15px 15px 15px;
  @media screen and (min-width: 1000px) {
    flex-direction: row;
    max-width: 1200px;
    align-items: flex-start;
    margin: 0 auto;
    padding: 150px 15px 15px 15px;
  }
  .heading-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 450px;
    @media screen and (min-width: 1000px) {
      align-items: flex-start;
    }
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
      @media screen and (min-width: 1000px) {
        text-align: left;
        font-size: 45px;
      }
      .heading-title-span {
        color: #951fb3;
      }
    }
    .heading-text {
      text-align: center;
      margin-bottom: 30px;
      @media screen and (min-width: 1000px) {
        text-align: left;
      }
    }
    .heading-buttons {
      display: flex;
      flex-direction: column;
      align-items: center;
      @media screen and (min-width: 1000px) {
        align-items: flex-start;
      }
      .heading-buttons-container {
        display: flex;
        justify-content: space-between;
        .heading-link {
          display: block;
          text-decoration: none;
          .heading-button {
            height: 50px;
            width: 155px;
            font-size: 18px;
            margin-right: 15px;
            @media screen and (min-width: 1000px) {
              height: 50px;
              width: 175px;
            }
            .heading-icon {
              margin-right: 10px;
            }
          }
        }
      }
      .heading-buttons-span {
        color: #6a6a6a;
        display: block;
        font-size: 14px;
        margin-top: 10px;
        @media screen and (min-width: 1000px) {
          margin-top: 20px;
        }
      }
    }
  }
  .heading-mockup {
    margin: 30px 0;
    @media screen and (min-width: 1000px) {
      margin: 0;
    }
    .heading-mockup-img {
      max-width: 100%;
      height: auto;
    }
  }
`;
