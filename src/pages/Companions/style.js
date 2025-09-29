import styled from "styled-components";

export const CompanionsStyled = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

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
  p {
    width: 90%;
    max-width: 600px;

    text-align: center;
    font-size: 18px;

    margin-bottom: 5px;
  }

  ul {
    margin: 30px 0px;
    width: 95%;
    max-width: 600px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    li {
      width: 100%;
      height: 50px;

      display: flex;
      justify-content: center;
      align-items: center;

      border: 1px solid var(--color-primary);
      border-radius: 5px;

      .content {
        width: 95%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .name {
        display: flex;
        align-items: center;
        gap: 20px;

        font-size: 18px;

        img {
          width: 40px;
        }
      }

      .answer {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        font-size: 12px;

        .box {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 40px;
          height: 30px;

          border-radius: 5px;
          border: 1px solid var(--color-primary);

          cursor: pointer;
        }

        .box.ativo {
          background-color: var(--color-positive);
        }

        .box.inativo {
          background-color: var(--color-negative);
        }

        .yes,
        .no {
          display: flex;
          flex-direction: column;
          align-items: center;

          img {
            width: 25px;
          }
        }
      }
    }

    button {
      background-color: var(--color-primary);

      width: 200px;
      height: 30px;

      display: flex;
      align-items: center;
      justify-content: center;

      margin: 30px 0px;

      border: none;
      border-radius: 5px;

      color: var(--color-white);
      font-family: "Hatton";
      font-size: 16px;

      cursor: pointer;
    }
  }

  #guide-invite {
    max-width: 600px;
    width: 90%;
    text-align: center;

    margin-top: 30px;
  }

  @media (max-width: 425px) {
    h2 {
      font-size: 35px;
    }

    p {
      font-size: 15px;
    }
    ul {
      li {
        .name {
          font-size: 15px;
        }
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
