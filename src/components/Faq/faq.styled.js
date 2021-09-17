import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ebedf2;
  padding: 60px 15px 60px 15px;
  .faq-heading {
    display: flex;
    flex-direction: column;
    align-items: center;
    .faq-title-tag {
      color: #951fb3;
      font-size: 18px;
      font-weight: 500;
      padding: 3px 30px;
      border-radius: 8px;
      display: inline-block;
      background-color: #ede0f4;
    }
    .faq-title {
      margin: 15px 0;
      font-size: 36px;
      text-align: center;
      .faq-title-color {
        color: #951fb3;
      }
    }
  }
`;
