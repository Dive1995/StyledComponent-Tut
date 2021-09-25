import styled from "styled-components";

export const Button = styled.button`
    background-color: ${({ bg }) => bg || '#fff'};
    border: none;
    border-radius: 50px;
    box-shadow: 0 0 10px 5px rgba(0,0,0,0.1);
    color: ${({ color }) => color || '#333'};
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    padding: 1rem 3rem;
    transition: 150ms all ease-in-out;

    &:hover{
        opacity: 0.9;
        transform: scale(0.98)
    }
`