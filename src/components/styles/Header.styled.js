import styled from "styled-components";

export const StyledHeader = styled.header`
    padding: 40px 0;
    background-color: ${({ theme }) => theme.colors.header};

    h1 {
        color:blue;
        font-size: 20px;
    }

    &:hover{
        background-color: red;
    }
`