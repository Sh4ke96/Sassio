import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  align-items: center;
  .Nav-icon {
    color: #73299a;
    margin-left: 15px;
    font-size: 30px;
    @media screen and (min-width: 1000px) {
      display: none;
    }
  }
  &:hover {
    cursor: pointer;
  }
`;

export const DesktopMenu = styled.div`
  display: none;
  @media screen and (min-width: 1000px) {
    display: block;
  }
  ul {
    display: flex;
    list-style: none;
    li {
      display: flex;
      position: relative;
      margin: 0 15px;
      font-weight: 600;
      a {
        display: inline-block;
        text-decoration: none;
        color: #212529;
        transition: 0.3s all ease-in-out;
      }
      a:hover {
        color: #73299a;
      }
    }
    li::after {
      content: "";
      position: absolute;
      bottom: -10px;
      width: 0px;
      height: 3px;
      margin: 5px 0 0;
      transition-duration: 0.75s;
      opacity: 0;
      background-color: #73299a;
    }
    li:hover::after {
      width: 100%;
      opacity: 1;
    }
  }
`;
