import { type AnyAction, type ThunkAction } from '@reduxjs/toolkit'
import { type RootState } from '../store/store'

export interface BackgroundProps {
  image: string
}
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  width?: string | number
  transform?: string
  backgroundColor?: string
  error?: string
}

export interface FloatingLabelProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  transform?: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  values?: string
  backgroundColor?: string
  error?: boolean
  ref?: React.RefObject<HTMLInputElement>
}
export interface PhoneInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  error: boolean
}
export interface CustomProps {
  ['aria-invalid']: boolean
  onChange: (event: { target: { name: string, value: string } }) => void
  name: string
  error: boolean
}
export interface FormState {
  name: string
  lastName: string
  phone: string
  email: string
  [key: string]: string | number
}
export interface OrderInfo {
  countRoom: number
  time: number
  [key: string]: string | number
}
export interface ErrorInfo {
  errorPhone: boolean
  errorEmail: boolean
}
export interface OffersType {
  id: number
  url: string
  title: string
  text: string
  mobile: string
  mobileApp: string
  desktop: string
  video?: string
  metadata?: string
}
export interface IOffers {
  error: string | null
  loading: boolean
  offers: OffersType[]
}
export interface IForm {
  error: string | null
  loading: boolean
  submittingForm: boolean | null
}

export interface AppState {
  user: FormState
  order: OrderInfo
  error: ErrorInfo
  offersSlider: IOffers
  sendForm: IForm
}

export type FetchOffersThunk = ThunkAction<
OffersType[],
RootState,
null,
AnyAction
>
export interface CustomButtonProps {
  loading: boolean
  [key: string]: any
}
