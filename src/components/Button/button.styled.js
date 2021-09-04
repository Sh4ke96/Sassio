import styled from "styled-components";

const SButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 40px;
  padding: 10px;
  color: white;
  background-color: #73299a;
  border: none;
  border-radius: 30px;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  &:hover {
    cursor: pointer;
  }
  & a {
    color: white;
    text-decoration: none;
  }
`;

export default SButton;
