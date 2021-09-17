import styled from "styled-components";

export const Wrapper = styled.div`
  .accordion-container {
    border: 2px solid #972ad1;
    border-radius: 2px;
    .accordion-title {
      color: #444;
      background-color: #f4f4f4;
      cursor: pointer;
      padding: 18px;
      width: 100%;
      text-align: left;
      .accordion-title-number {
        color: #972ad1;
        font-weight: 800;
      }
    }
    .accordion-title:hover {
      background-color: #ddd;
    }
    .accordion-answer {
      color: #444;
    }
  }
`;
