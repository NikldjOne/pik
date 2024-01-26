import React from 'react'
import success from '../../img/success.svg'
import { Form } from '../Form'
import { Container } from '../Container'
import styled from 'styled-components'
export const Text = styled.p<{ width?: string }>`
  font-weight: 600;
  font-size: 44px;
  text-align: center;
  width: ${(props) => props.width};
  line-height: 48px;
`

const SuccessForm = (): React.ReactElement => {
  return (
        <Form>
            <Container style={{ flexDirection: 'column' }}>
                <img src={success} alt="SVG Image" />
                <Text width={'408px'}>Ваша заявка отправлена</Text>
            </Container>
        </Form>
  )
}

export default SuccessForm
