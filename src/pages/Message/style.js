import styled from "styled-components";

export const MessageStyled = styled.section`
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

  img{
    margin: 30px 0px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    width: 90%;
    max-width: 600px;

    .box-input{
        display: flex;
        flex-direction: column;
        align-items: start;
        gap:5px;

        width: 90%;

        span {
          font-size: 18px;
        }

        input {
            width: 100%;
            height: 20px;

            outline: none;
            border-radius: 5px;
            border: 1px var(--color-primary) solid;
        }

        #message-input {
            height: 100px;
            width: 100%;

            outline: none;
            border-radius: 5px;
            border: 1px var(--color-primary) solid;
        }
    }

    button {
            background-color: var(--color-primary);

            width: 150px;
            height: 30px;

            display: flex;
            align-items: center;
            justify-content: center;

            margin: 30px 0px;

            border: none;
            border-radius: 5px;

            color: var(--color-white);
            font-family: 'Hatton';
            font-size: 16px;

            cursor: pointer;
        }

  }
`;
