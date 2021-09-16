import styled from "styled-components";

export const Container = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin: 0 auto;
  border-radius: 10px;
  border: 2px solid #972ad1;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  .teamcard-img-container {
    width: 130px;
    height: 130px;
    .teamcard-img {
      max-width: 100%;
      height: auto;
      border: 2px solid #972ad1;
      border-radius: 50%;
    }
  }
  .teamcard-heading {
    margin-top: 15px;
    .teamcard-heading-name {
      font-size: 22px;
    }
    .teamcard-heading-job {
      font-size: 15px;
      font-weight: 500;
      color: #53117f;
    }
  }
  .teamcard-main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
    .teamcard-contact {
      display: flex;
      flex-direction: column;
      .teamcard-contact-phone,
      .teamcard-contact-mail {
        font-size: 15px;
        color: #737272;
        display: block;
        margin-bottom: 5px;
      }
      .teamcard-contact-icon {
        margin-right: 10px;
      }
    }
    .teamcard-socials {
      display: flex;
      align-items: center;
      position: relative;
      justify-content: center;
      height: 50px;
      width: 50px;
      padding: 15px;
      border-radius: 50%;
      background-color: #972ad1;
      .teamcard-socials-share {
        color: white;
      }
    }
    .teamcard-socials:hover {
      cursor: pointer;
    }
  }
`;
