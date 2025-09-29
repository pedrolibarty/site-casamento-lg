import styled from "styled-components";

export const ManagerStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  .status {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;

    margin-top: 10px;

    li {
      width: 130px;

      display: flex;
      flex-direction: column;

      border: 1px solid var(--color-primary);
      border-radius: 5px;

      h3 {
        margin: 10px;
      }
    }

    .row {
      display: flex;
      justify-content: space-between;

      margin: 0px 10px 10px 10px;
    }

    .line {
      border: 1px solid var(--color-primary);
    }
  }
  .title {
    margin-top: 20px;
  }

  h2 {
    margin-top: 20px;

    font-size: 18px;
  }

  .btn-page {
    width: 95%;
    max-width: 400px;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;

    margin-top: 20px;

    button {
      width: 120px;
      height: 30px;
      background-color: transparent;

      border: 1px solid var(--color-primary);
      border-radius: 5px;

      padding: 0px;
      margin: 0px;

      cursor: pointer;
    }
  }

  .btn-page button.active {
    background-color: var(--color-primary);
    color: var(--color-black);
  }

  .main-btn {
    width: 95%;
    max-width: 400px;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;

    margin-top: 20px;

    button {
      width: 120px;
      height: 30px;
      background-color: transparent;

      border: 1px solid var(--color-primary);
      border-radius: 5px;

      padding: 0px;
      margin: 0px;

      cursor: pointer;
    }
  }

  .main-btn button.active {
    background-color: var(--color-primary);
    color: var(--color-black);
  }
`;
