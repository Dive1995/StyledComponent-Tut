import styled from "styled-components";

export const StyledHeader = styled.header`
    padding: 40px 0;
    background-color: ${({ theme }) => theme.colors.header};
    
`

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;

    @media(max-width: ${({ theme }) => theme.mobile}){
        flex-direction: column;
        gap: 40px
    }
`

export const Logo = styled.img``

export const Image = styled.img`
    width: 375px;
`

// export const Hero = styled.div`
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     gap: 40px;

//     .hero-text{

//     }
// `