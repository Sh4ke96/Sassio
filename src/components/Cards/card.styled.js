import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 370px;
  border: 3px solid transparent;
  padding: 15px;
  margin-top: 30px;
  box-shadow: 0px 20px 81px 0px rgba(8, 0, 20, 0.3);
  border-radius: 10px;
  .card-icon {
    font-size: 45px;
    color: #951fb3;
    padding-bottom: 15px;
  }
  .card-title {
    color: #010101;
    font-size: 22px;
    font-weight: 700;
    padding-bottom: 15px;
  }
  .card-text {
    line-height: 1.5;
    color: #666666;
    font-size: 16px;
  }
  &:hover {
    cursor: pointer;
    border: 3px solid #951fb3;
    transition-duration: 0.75s;
  }
`;
