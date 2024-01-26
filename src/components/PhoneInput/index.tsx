import { IMaskInput } from 'react-imask'
import React from 'react'
import { type CustomProps, type PhoneInputProps } from '../../types/types'
import { FormControl, Input, InputLabel } from '@mui/material'
import styled from 'styled-components'

const PhoneInput = React.forwardRef<HTMLInputElement, CustomProps>(
  function TextMaskCustom (props, ref) {
    const { onChange, ...other } = props
    return (
            <IMaskInput
                {...other}
                mask="+7 (000) 000-00-00"
                definitions={{
                  '#': /[1-9]/
                }}
                style={props['aria-invalid']
                  ? {
                      textIndent: '10px'
                    }
                  : { textIndent: '10px' }}
                inputRef={ref}
                onAccept={(value: any) => { onChange({ target: { name: props.name, value } }) }}
                overwrite
            />
    )
  }
)
export const Block = styled.div`
  margin-top: 10px;
  width: 100%;
`
export const CustomPhoneInput = ({ onChange, error = false }: PhoneInputProps): React.ReactElement => {
  return (
        <Block>
            <FormControl variant="standard" style={error
              ? {
                  backgroundColor: 'rgba(230, 70, 70, 0.4)',
                  borderColor: '#E64646',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  textIndent: '10px',
                  width: '100%',
                  borderRadius: '4px'
                }
              : { width: '100%' }} >
                <InputLabel htmlFor="formatted-text-mask-input">Телефон</InputLabel>
                <Input
                    onChange={onChange}
                    name="textmask"
                    id="formatted-text-mask-input"
                    inputComponent={PhoneInput as any}
                    error={error}
                />
            </FormControl>
        </Block>
  )
}
