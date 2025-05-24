import styled from "styled-components";

export const DescriptionStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  h2 {
    font-size: 40px;
    font-weight: lighter;
    color: var(--color-primary);

    margin-top: 30px;
  }

  .images-noivos {
    width: 100%;
    display: flex;
    justify-content: center;

    .circle-casal {
      width: 50%;
      min-width: 330px;
      max-width: 500px;
    }
  }

  h3 {
    font-size: 40px;
    font-weight: lighter;
    color: var(--color-primary);

    margin-top: 10px;
  }

  p {
    width: 90%;
    max-width: 650px;

    text-align: center;

    margin-top: 20px;
  }
`;
