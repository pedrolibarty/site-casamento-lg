import styled from "styled-components";

export const FormStyled = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  form {
    width: 100%;

    display: flex;
    align-items: center;
    flex-direction: column;

    .input-comp {
      width: 90%;
      max-width: 400px;
      height: 25px;

      border: 1px solid var(--color-primary);
      border-radius: 5px;
      outline: none;

      margin-top: 10px;
      padding: 0px 5px;
    }
  }

  .btn-control {
    width: 90%;
    max-width: 400px;

    margin-top: 5px;
    button {
      background-color: transparent;
      border: none;

      color: var(--color-black);
      text-decoration: underline;
    }
  }

  .option {
    width: 90%;
    max-width: 400px;

    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 10px;

    margin-top: 10px;
    label {
      font-size: 13px;

      display: flex;
      align-items: center;
    }

    input {
      width: 12px;
      accent-color: var(--color-primary);
    }
  }

  select {
    width: 90%;
    max-width: 400px;
    height: 25px;

    margin-top: 15px;

    border: 1px solid var(--color-primary);
    border-radius: 5px;
  }

  .input-group {
    width: 90%;
    max-width: 400px;
    height: 25px;

    border: 1px solid var(--color-primary);
    border-radius: 5px;
    outline: none;

    margin-top: 15px;
    padding: 0px 5px;
  }

  .btn-sent {
          width: 160px;
      height: 30px;
      background-color: transparent;

      border: 1px solid var(--color-primary);
      border-radius: 5px;

      padding: 0px;
      margin-top: 20px;

      cursor: pointer;
  }
`;
