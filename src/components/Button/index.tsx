import styled from 'styled-components'
import React from 'react'
import { type CustomButtonProps } from '../../types/types'
import { ThreeDots } from 'react-loader-spinner'

export const Button = styled.button`
  width: 100%;
  height: 56px;
  padding: 18px 40px 18px 40px;
  background-color: #FF4114;
  border-style: none;
  border-radius: 4px;  
  margin-top: 22px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
    background-color: #F72F00;
  } 
  &:active{
    background-color: #DC2A00;
  }
  &:disabled {
    background-color:white;
    border-color: #CCCCCC;
    color: #CCCCCC;
    border-style: solid;
    border-width: 1px;
  }
`
const CustomButton = ({ loading = false, text = '', ...props }: CustomButtonProps): React.ReactElement => {
  return (
      <div>
          {loading
            ? <Button><ThreeDots
                  visible={true}
                  height="16"
                  width="100%"
                  color="gray"
                  radius="4"
                  ariaLabel="three-dots-loading"
                  /></Button>
            : (<Button {...props} >
                  <span>{text}</span>
              </Button>)
          }
      </div>
  )
}
export default CustomButton
