import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  background-color: white;
  top: 0;
  width: 100%;
  z-index: 9999;
  box-shadow: 0px 11px 68px 0px rgba(0, 0, 0, 0.14);
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  padding: 15px;
  @media screen and (min-width: 1000px) {
    margin: 0 auto;
  }
`;
