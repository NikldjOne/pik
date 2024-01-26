import styled from 'styled-components'
import { type BackgroundProps } from '../../types/types'

export const Background = styled.div<BackgroundProps>`
  width: 100%;
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.image});
`
