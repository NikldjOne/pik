import styled from 'styled-components'
import React from 'react'

const FooterContainer = styled.div`
  margin-top: 20px;
`

const Description = styled.p`
  width: 100%;
  text-align: center;
  color: #969BA5;
  font-size: 12px;
  margin: 0;
`

const Footer = ({ ...props }): React.ReactElement => {
  return (
        <FooterContainer>
            <Description>{'Это дисклеймер, который есть во всех формах'}</Description>
        </FooterContainer>
  )
}

export default Footer
