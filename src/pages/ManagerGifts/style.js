import styled from "styled-components";

export const StyledManagerGifts = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  .result {
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
      align-items: center;

      border: 1px solid var(--color-primary);
      border-radius: 5px;

      h3 {
        margin: 10px;
      }
    }

    .value {
      display: flex;
      justify-content: space-between;

      margin: 0px 10px 10px 10px;
    }
  }

  .main-btn {
    width: 95%;
    max-width: 400px;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;

    margin: 20px 0px;

    .gift {
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

  .main-btn button.gift-active {
    background-color: var(--color-primary);
    color: var(--color-black);
  }

  h3 {
    margin: 20px 0px;

    font-size: 18px;
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

  .list-gifts {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .line-gift {
    border: 1px solid var(--color-primary);
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 95%;
    max-width: 500px;

    .name {
      margin: 10px 0px;

      width: 90%;
    }
  }

  .box-infos {
    font-size: 14px;

    margin-bottom: 5px;

    width: 90%;
  }

  .list-pay {
    width: 90%;
  }
`;
