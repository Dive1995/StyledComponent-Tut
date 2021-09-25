import React from 'react'
import { Flex } from './styles/Flex.styled'
import { Image, StyledSection } from './styles/Section.styled'

function Section({ id, title, body, image }) {
    return (
        <StyledSection>
            <Flex>
                <Image src={image} order={ id % 2 === 0 && 2}/>
                <div>
                    <h2>{ title }</h2>
                    <p>{ body }</p>
                </div>
            </Flex>
        </StyledSection>
    )
}

export default Section
