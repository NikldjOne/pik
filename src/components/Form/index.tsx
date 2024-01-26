import styled from 'styled-components'
import React from 'react'
import FloatingLabelInput from '../Input'
import { CustomPhoneInput } from '../PhoneInput'
import CustomButton from '../Button'
import Header from '../Header'
import Footer from '../Footer'
import { useFormState } from '../../hooks/useFormState'

export const Form = styled.form`
  width: 100%;
  padding: 20px 56px 20px 56px;
`

const MainForm = (): React.ReactElement => {
  const {
    handleChange, isFormValid, buttonText,
    handleOrderSubmit, fetchOffersCallback, form,
    order, errorInfo, loading
  } = useFormState()

  React.useEffect(() => {
    fetchOffersCallback()
  }, [fetchOffersCallback])

  const input = React.useRef<HTMLInputElement>(null)

  return (
        <Form>
            <Header />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <FloatingLabelInput
                    type="text"
                    placeholder="Ваше имя"
                    label="Ваше имя"
                    name={'name'}
                    width={'200px'}
                    transform={'-2px'}
                    onChange={(e) => { handleChange('name', e.target.value) }}
                    value={form?.name}
                />
                <FloatingLabelInput
                    type="text"
                    placeholder="Фамилия"
                    label="Фамилия"
                    name={'lastName'}
                    width={'200px'}
                    transform={'-2px'}
                    onChange={(e) => { handleChange('lastName', e.target.value) }}
                    value={form?.lastName}
                />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <CustomPhoneInput
                    onChange={(e) => { handleChange('phone', e.target.value) }}
                    value={form?.phone}
                    error={errorInfo?.errorPhone}
                />
                <FloatingLabelInput
                    type="email"
                    placeholder="E-mail"
                    label={'E-mail'}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    width={'100%'}
                    transform={'2px'}
                    onChange={(e) => { handleChange('email', e.target.value) }}
                    value={form?.email}
                    error={errorInfo?.errorEmail}
                />
                <FloatingLabelInput
                    type="number"
                    placeholder="Количество помещений"
                    label={'Количество помещений'}
                    width={'100%'}
                    ref={input}
                    style={{ appearance: 'none' }}
                    transform={'-11px'}
                    onChange={(e) => { handleChange('countRoom', e.target.value) }}
                    value={order?.countRoom}
                    onFocus={() => { input.current?.select() }}
                />
                <CustomButton type="submit" disabled={!isFormValid()} onClick={handleOrderSubmit} loading={loading} text={buttonText}>
                </CustomButton>
            </div>
            <Footer />
        </Form>
  )
}

export default MainForm
