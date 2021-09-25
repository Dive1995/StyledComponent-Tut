
import styled from 'styled-components'

export const StyledSocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  li {
    list-style: none;
  }
  a {
    border: 1px solid #fff;
    border-radius: 50%;
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    height: 40px;
    width: 40px;
    text-decoration: none;
    opacity:0.5;
    transition: 250ms all ease-in-out;

    &:hover{
      opacity:1;
      transform:scale(1.1)
    }
  }
`