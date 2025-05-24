import styled from "styled-components";

export const LocalStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  h2 {
    font-size: 30px;
    font-weight: lighter;
    color: var(--color-primary);

    margin-top: 30px;
  }

  .ramo {
    margin: 30px 0px;
  }

  h3 {
    font-size: 40px;
    font-weight: lighter;
    color: var(--color-primary);

    margin-bottom: 20px;
  }

  p {
    text-align: center;
  }

  .images-local {
    width: 98%;
    max-width: 740px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 30px 0px;

    img {
      width: 30%;
    }
  }

  h4 {
    font-size: 20px;
    font-weight: lighter;
    color: var(--color-primary);

    margin-bottom: 10px;
  }

  span {
    text-align: center;
  }

  .link {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    margin-top: 10px;

    cursor: pointer;

    h5 {
      font-size: 20px;
      font-weight: lighter;
      color: var(--color-primary);
      text-decoration: underline;

      height: 100%;
    }
  }

  @media (max-width: 425px) {
    h3 {
      font-size: 30px;
    }
  }
`;
