import React from 'react'
import { Container } from './styles/Container.styled'
import {Button} from './styles/Button.styled'
import { Hero, Image, Logo, Nav, StyledHeader } from './styles/Header.styled'
import { Flex } from './styles/Flex.styled'

function Header() {
    return (
        <StyledHeader bg="grey">
            <Container>
                <Nav>
                    <Logo src="images/logo.svg"/>
                    <Button bg="#fff">Try it Free</Button>
                </Nav>
                <Flex>
                    <div className="hero-text">
                        <h1>Build the community your fans will love.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolorem iusto placeat enim illo eos! Consequatur obcaecati hic laborum voluptate!</p>
                        <Button bg="#ff0099" color="#f5f5f5">Get started for free</Button>
                    </div>
                    <Image src="images/illustration-mockups.svg"/>
                </Flex>
            </Container>
        </StyledHeader>
    )
}

export default Header
