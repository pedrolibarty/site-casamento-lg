import styled from "styled-components";

export const PriceStyled = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  .modal-container {
    background: white;
    width: 250px;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
    position: relative;
    animation: fadeIn 0.3s ease-in-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  h2 {
    font-size: 20px;
  }

  .btn-close {
    background: none;
    border: none;
    padding: 0;

    position: absolute;
    right: 10px;
    top: 10px;

    cursor: pointer;

    img {
      width: 30px;
    }
  }

  .info-gift {
    margin-top: 10px;

    display: flex;
    flex-direction: column;
    gap: 10px;

    form {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 8px;

      input {
        width: 120px;
        height: 20px;

        outline: none;
        border-radius: 5px;
        border: 1px var(--color-primary) solid;
        padding: none;
      }

      button {
        background-color: var(--color-primary);

        width: 120px;
        height: 30px;

        display: flex;
        align-items: center;
        justify-content: center;

        border: none;
        border-radius: 5px;

        color: var(--color-white);
        font-family: "Hatton";
        font-size: 16px;

        cursor: pointer;
      }
    }
  }

  .header-modal {
    h2 {
      width: 90%;
    }
  }

  .sec-pix {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    button {
      background-color: var(--color-primary);

      width: 120px;
      height: 30px;

      display: flex;
      align-items: center;
      justify-content: center;

      border: none;
      border-radius: 5px;

      color: var(--color-white);
      font-family: "Safira March";
      font-size: 16px;

      cursor: pointer;
    }

    .infos_pay {
      display: flex;
      flex-direction: column;
      gap: 5px;

      margin: 10px 0px;
    }
  }
`;
