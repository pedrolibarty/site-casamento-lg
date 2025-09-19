import styled from "styled-components";

export const InvitationStyled = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  .convites {
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    margin: 20px 0px;
  }

  .convite-line {
    width: 100%;
    max-width: 550px;
  }

  .container {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid var(--color-primary);
    border-radius: 5px;
  }

  .content {
    width: 80%;
    height: 44px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .send {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
      font-size: 10px;
    }

    margin: 5px 0px;
  }

  .box {
    width: 30px;
    height: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid var(--color-primary);
    border-radius: 5px;

    img {
        height: 100%;
    }
  }

  .box.send {
    background-color: var(--color-positive);
  }

  .companion {
    display: flex;
    flex-direction: column;
    gap: 5px;

    margin: 7px 0px 0px 10px;
  }

  .filter-buttons {
    width: 95%;
    max-width: 400px;

    display: flex;
    justify-content: space-between;

    margin-top: 20px;

    button {
      width: 94px;
      height: 27px;
      background-color: transparent;

      border: 1px solid var(--color-primary);
      border-radius: 5px;

      padding: 0px;
      margin: 0px;

      cursor: pointer;
    }
  }

  .filter-buttons button.active{
    background-color: var(--color-primary);
    color: var(--color-black)
  }

  .filter-input {
      width: 90%;
      max-width: 400px;
      height: 25px;

      border: 1px solid var(--color-primary);
      border-radius: 5px;
      outline: none;
      
      margin-top: 10px;
      padding: 0px 5px;
  }
`;
