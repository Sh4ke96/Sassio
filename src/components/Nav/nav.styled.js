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
    color: #972ad1;
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
      }
      a:hover {
        cursor: pointer;
        color: #73299a;
      }
    }
    .active {
      border-bottom: 3px solid #73299a;
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
  z-index: 101;
  overflow-y: scroll;
  background-color: #fff;
  padding: 40px 0px;
  box-shadow: 0px 3px 5px rgba(100, 100, 100, 0.19);
  transition: all 0.7s ease-out;
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
      }
      a:hover {
        cursor: pointer;
        color: #73299a;
      }
    }
    .active {
      border-bottom: 3px solid #73299a;
    }
  }
`;

export const BackDrop = styled.div`
  top: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  right: 0%;
  height: 120vh;
  background-color: rgba(0, 0, 0, 0.9);
`;
