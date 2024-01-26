import styled from 'styled-components'
import { useTextBasedTime } from '../../hooks/useTextBasedTime'
import { type InputProps } from '../../types/types'
import React from 'react'

const HeaderContainer = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Text = styled.p<InputProps>`
  font-size: 44px;
  text-align: center;
  margin: 0;
  font-weight: 600;
  height: 48px;
`

const Description = styled.p`
  margin: 16px 0 0 0 ;
  font-size: 16px;
  font-weight: 400;
  width: 314px;
  text-align: center;
`

const Header = ({ ...props }): React.ReactElement => {
  const text = useTextBasedTime()

  return (
        <HeaderContainer>
            <Text {...props} >{text}</Text>
            <Description>{'Для бронирования помещений заполните форму'}</Description>
        </HeaderContainer>
  )
}

export default Header
