import styled from "styled-components";

export const StyledSection = styled.div`
    margin-top: 40px;
    padding: 60px;
    box-shadow: 0 0 10px 1px rgba(0,0,0,0.1);
    border-radius: 10px;
`


export const Image = styled.img`
    width: 300px;
    order: ${(order) => order} || 1;
`