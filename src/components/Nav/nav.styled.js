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
  .Nav-icon:hover {
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
    margin-right: 15px;
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

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  width: 280px;
  height: 100vh;
  overflow-y: scroll;
  background-color: #fff;
  padding: 40px 0px;
  box-shadow: 0px 3px 5px rgba(100, 100, 100, 0.19);
  .mobile-close-icon {
    font-size: 30px;
    margin-bottom: 30px;
  }
  .mobile-close-icon:hover {
    cursor: pointer;
    color: #73299a;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    margin-top: 30px;
    li {
      display: flex;
      position: relative;
      margin: 15px 0;
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
