import React from 'react'
import error from '../../img/error.svg'
import { Form } from '../Form'
import { Container } from '../Container'
import { Text } from '../SuccessForm'

const ErrorForm = (): React.ReactElement => {
  return (
        <Form>
            <Container style={{ flexDirection: 'column' }}>
                <img src={error} alt="SVG Image" />
                <Text width={'390px'}>Ошибка. Попробуйте позже</Text>
            </Container>
        </Form>
  )
}

export default ErrorForm
