import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 15px 30px 15px;
  background-color: #1b0234;
  overflow: hidden;
  .footer-wrapper {
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    @media screen and (min-width: 1000px) {
      flex-direction: row;
    }
    .footer-main {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      max-width: 1200px;
      padding: 30px 15px 30px 15px;
      @media screen and (min-width: 1000px) {
        padding: 15px;
      }
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
      max-width: 1200px;
      color: white;
      @media screen and (min-width: 1000px) {
        padding: 15px;
      }
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
          .footer-links-link:hover {
            cursor: pointer;
            transition: all 0.75s;
            color: #951fb3;
          }
        }
      }
    }
    .footer-socials {
      max-width: 1200px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0 15px 0 15px;
      color: white;
      @media screen and (min-width: 1000px) {
        padding: 15px;
      }
      .footer-socials-title {
        font-size: 25px;
      }
      .footer-socials-container {
        margin-top: 15px;
        @media screen and (min-width: 1000px) {
          display: flex;
          flex-direction: column;
        }
        .footer-socials-icon {
          margin-right: 20px;
          font-size: 25px;
          @media screen and (min-width: 1000px) {
            margin-bottom: 20px;
          }
        }
        .footer-socials-icon:hover {
          cursor: pointer;
          transition: all 0.75s;
          color: #951fb3;
        }
      }
    }
  }
`;
