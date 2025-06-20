import styled from "styled-components";

export const ListStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  .page-top {
    display: flex;
    justify-content: center;
    align-items: center;

    .ramo-list-l {
      width: 30%;
    }

    .ramo-list-r {
      width: 30%;
    }

    h2 {
      font-size: 30px;
      font-weight: lighter;
      color: var(--color-primary);
      text-align: center;
    }
  }

  ul {
    width: 90%;
    max-width: 800px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;

    margin-top: 30px;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;

      width: 250px;

      border: 1px solid var(--color-primary);
      border-radius: 5px;

      .card-img {
        width: 100%;
        height: 200px;

        display: flex;
        align-items: center;
        justify-content: center;

        overflow: hidden;
      }

      p {
        width: 80%;
        text-align: center;

        margin: 15px 0px;
      }

      span {
        margin-bottom: 10px;
      }

      button {
        background-color: var(--color-primary);

        width: 100px;
        height: 30px;

        display: flex;
        align-items: center;
        justify-content: center;

        margin-bottom: 20px;

        border: none;
        border-radius: 5px;

        color: var(--color-white);
        font-family: "Safira March";
        font-size: 16px;
      }
    }
  }

  @media (max-width: 620px) {
    .page-top {
      h2 {
        font-size: 20px;
      }
    }
  }
`;
