import styled from "styled-components";

export const Container = styled.div`
  max-width: 330px;
  margin: 30px;
  box-shadow: 0px 23px 43px 0px rgba(0, 0, 0, 0.13);
  .priceCard-heading {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px 8px 0 0;
    background-color: #818181;
    padding: 40px 50px 25px;
    margin-bottom: 25px;
    .priceCard-heading-icon-container {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 65px;
      height: 65px;
      border-radius: 8px;
      background-color: #fff;
      margin-right: 15px;
      .priceCard-heading-icon {
        font-size: 30px;
      }
    }
    .priceCard-heading-icon-container:hover {
      cursor: pointer;
      transition-duration: 0.75s;
      background-color: #951fb3;
      color: white;
    }
    .priceCard-heading-text {
      color: #fff;
      .priceCard-title-tag {
        font-size: 20px;
      }
      .priceCard-title {
        font-size: 40px;
        line-height: 1;
      }
    }
  }
  .priceCard-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    .priceCard-main-ul {
      .priceCard-list-item {
        display: flex;
        align-items: center;
        color: #212529;
        font-size: 14px;
        list-style: none;
        border-bottom: 1px solid #e6e8e9;
        padding: 18px 20px 16px 20px;
        .priceCard-list-icon-accept {
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          width: 22px;
          height: 22px;
          margin-right: 10px;
          border-radius: 100%;
          line-height: 22px;
          box-shadow: 0px 6px 18px 0px rgba(0, 197, 0, 0.5);
          background-image: linear-gradient(
            0deg,
            #00f500 1%,
            #00db00 53%,
            #00c000 100%
          );
        }
        .priceCard-list-icon-cancel {
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          width: 22px;
          height: 22px;
          margin-right: 10px;
          border-radius: 100%;
          line-height: 22px;
          box-shadow: 0px 6px 18px 0px rgba(0, 197, 0, 0.5);
          background-color: red;
        }
      }
    }
    .priceCard-button {
      margin: 18px 0;
    }
  }
`;
