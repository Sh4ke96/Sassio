import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 15px 30px 15px;
  background-color: #1b0234;
  overflow: hidden;
  .footer-newsletter {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    padding: 30px;
    background-color: #6c2b95;
    box-shadow: 0px 0px 16px 0px rgba(27, 2, 52, 0.34);
    .newsletter-title {
      line-height: 1;
      color: white;
    }
    .newsletter-text {
      color: white;
      font-size: 14px;
    }
    .newsletter-input-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 30px;
      .newsletter-input {
        height: 60px;
        color: #6c2b95;
        border: none;
        max-width: 490px;
        padding-left: 30px;
        border-radius: 5px;
      }
      .newsletter-input:focus {
        outline: none;
      }
      .newsletter-button {
        background-color: #f104f5;
        margin-top: 15px;
      }
    }
  }
  .footer-main {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 30px 15px 30px 15px;
    .footer-main-info {
      color: white;
      .img {
        width: 100%;
        height: auto;
      }
      .footer-main-about-text-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 15px;
        .footer-main-about-text {
          max-width: 235px;
          line-height: 1.714;
          font-size: 14px;
        }
      }
      .footer-main-open {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 15px;
        .footer-main-open-hours {
          max-width: 235px;
          line-height: 1.714;
          font-size: 14px;
        }
      }
    }
  }
  .footer-links {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 15px 30px 15px;
    color: white;
    .footer-links-title {
      font-size: 25px;
    }
    .footer-links-container {
      margin-top: 15px;
      display: flex;
      .footer-links-ul {
        margin-right: 50px;
        .footer-links-link {
          text-decoration: none;
          color: white;
          .footer-links-item {
            padding: 5px 0;
            list-style: none;
            .fa-chevron-right {
              font-size: 14px;
              margin-right: 8px;
            }
          }
        }
      }
    }
  }
  .footer-socials {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 15px 0 15px;
    color: white;
    .footer-socials-title {
      font-size: 25px;
    }
    .footer-socials-container {
      margin-top: 15px;
      .footer-socials-icon {
        margin-right: 20px;
        font-size: 25px;
      }
    }
  }
`;
