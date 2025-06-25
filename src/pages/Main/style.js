import styled from "styled-components";

export const MainStyled = styled.section`
display: flex;
flex-direction: column;
align-items: center;
gap: 30px;


.add {
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--color-primary);

    h3 {
        text-align: center;
        font-size: 18px;
        color: var(--color-white);

        margin: 20px 0px;

        line-height:1.5;
    }
}
`