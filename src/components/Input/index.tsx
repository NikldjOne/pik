import styled from 'styled-components'
import { type FloatingLabelProps, type InputProps } from '../../types/types'
import React from 'react'

const InputContainer = styled.div`
  position: relative;
`

const Input = styled.input<InputProps>`
  height: 56px;
  width: ${(props) => props.width};
  border-radius: 4px;
  border-width: 0;
  background-color: #F2F4F7;
  margin-top: 22px;
  text-indent: 15px;
  box-sizing: border-box;
  padding: 15px 0 0 0;
  ${(props) => props.error === 'true' && `
    background-color: rgba(230, 70, 70, 0.4);
    border-color: #E64646;
    border-width: 1px;
    border-style: solid;
  `}
  &::placeholder {
    color: transparent;
  }

  &:focus ~ label,
  &:not(:placeholder-shown) ~ label {
    transform: translate(${(props) => props.transform}, -14px) scale(0.8);
    color: #969BA5;
  }

  &:focus {
    background-color: white;
  }

  &:valid {
    background-color: white;
    border-color: #F2F4F7;
    border-width: 1px;
    border-style: solid;
  }
`

export const Label = styled.label`
  position: absolute;
  pointer-events: none;
  left: 8px;
  top: 55%;
  transition: 0.2s ease all;
  color: #4D4D4D;
  font-size: 16px;
  line-height: 1;
`

const FloatingLabelInput = React.forwardRef(({ label, error = false, ...props }: FloatingLabelProps, ref: React.Ref<HTMLInputElement>): React.ReactElement => {
  return (
        <InputContainer>
            <Input {...props} required error={String(error)} ref={ref}/>
            <Label>{label}</Label>
        </InputContainer>
  )
})
FloatingLabelInput.displayName = 'FloatingLabelInput'
export default FloatingLabelInput
