import styled from "styled-components";

export const CompanionStyled = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ul {
    width: 100%;
    max-width: 550px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    margin: 20px 0px;
  }

  li {
    width: 95%;
    height: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid var(--color-primary);
    border-radius: 5px;
  }

  .content {
    width: 95%;

    display: flex;
    justify-content: space-between;
  }

  .square {
      width: 40%;
      max-width: 120px;

    display: flex;
    justify-content: space-between;
  }

  .line {
    border: 1px solid var(--color-primary);
  }

  .filter-buttons {
    width: 95%;
    max-width: 430px;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;

    margin-top: 20px;

    button {
      width: 100px;
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
