import React from 'react'
import { updateFormField, updateOrderField, updateOrderInfo } from '../store/form/slice/formSlice'
import { fetchOffers, sendData } from '../store/form/thunks/formThunks'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectErrorSlice,
  selectFormData, selectFormLoadingSlice,
  selectOffersSlice,
  selectOrderSlice
} from '../store/form/selectors/formSelectors'
import { type AppDispatch } from '../store/store'
import { type ErrorInfo, type FormState, type OffersType, type OrderInfo } from '../types/types'
interface IState {
  handleChange: any
  isFormValid: () => boolean
  buttonText: string
  randomIndex: number
  handleOrderSubmit: (event: any) => void
  fetchOffersCallback: () => void
  form: FormState
  order: OrderInfo
  errorInfo: ErrorInfo
  loading: boolean
  error: string | null
  offers: OffersType[]
  submittingForm: boolean | null
}
export const useFormState = (): IState => {
  const form = useSelector(selectFormData)
  const order = useSelector(selectOrderSlice)
  const offers = useSelector(selectOffersSlice)
  const errorInfo = useSelector(selectErrorSlice)
  const { loading, error, submittingForm } = useSelector(selectFormLoadingSlice)

  const dispatch = useDispatch<AppDispatch>()

  const handleChange = React.useCallback((field: keyof typeof form, value: string): void => {
    if (field === 'countRoom' && +value >= 0) {
      dispatch(updateOrderField({ field, value }))
    } else {
      dispatch(updateFormField({ field, value }))
    }
  }, [dispatch])

  const isFormValid = React.useCallback((): boolean => {
    return (
      form?.name !== '' &&
            form?.lastName !== '' &&
            form?.phone !== '' &&
            form?.email !== '' &&
            +order?.countRoom !== 0
    )
  }, [form?.name, form?.lastName, form?.phone, form?.email, order?.countRoom])

  const buttonText = React.useMemo(() => {
    if (+order?.countRoom === 1) {
      return 'Забронировать помещение'
    }
    if (+order?.countRoom > 1 && +order?.countRoom < 5) {
      return `Забронировать ${order?.countRoom} помещения`
    } if (order?.countRoom >= 5) {
      return `Забронировать ${order?.countRoom} помещений`
    }
    return 'Выбирите количество помещений'
  }, [order?.countRoom])

  const randomIndex = React.useMemo(() => {
    return Math.floor(Math.random() * offers.length)
  }, [offers])

  const sendFormData = React.useCallback(() => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

    const currentPhoneError = form?.phone.length < 18
    const currentEmailError = !emailRegex.test(form?.email)
    if (!currentPhoneError && !currentEmailError) {
      void dispatch(sendData())
    }
  }, [dispatch, form?.email, form?.phone.length])

  const handleOrderSubmit = React.useCallback((event: any): void => {
    event.preventDefault()
    const currentTime = Math.floor(Date.now() / 1000)
    dispatch(updateOrderInfo({ countRoom: order.countRoom, time: currentTime }))
    sendFormData()
  }, [dispatch, order.countRoom, sendFormData])

  const fetchOffersCallback = React.useCallback(() => {
    void dispatch(fetchOffers())
  }, [dispatch])

  return { handleChange, isFormValid, buttonText, randomIndex, handleOrderSubmit, fetchOffersCallback, form, order, errorInfo, loading, error, offers, submittingForm }
}
