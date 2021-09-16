import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 0px;
  min-width: 0px;
  padding: 60px 15px 60px 15px;
  overflow: hidden;
  .team-heading {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
    .team-title-tag {
      color: #951fb3;
      font-size: 18px;
      font-weight: 500;
      padding: 3px 30px;
      border-radius: 8px;
      display: inline-block;
      background-color: #ede0f4;
    }
    .team-title {
      margin: 15px 0;
      font-size: 36px;
      text-align: center;
    }
  }
  .team-main {
    max-width: 1200px;
  }
`;
