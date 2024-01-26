import { createSelector } from '@reduxjs/toolkit'
import { type RootState } from '../../store'
import {
  type AppState,
  type ErrorInfo,
  type FormState,
  type IForm,
  type OffersType,
  type OrderInfo
} from '../../../types/types'

const selectFormSlice = (state: RootState): AppState => state.form

export const selectFormData = createSelector(
  [selectFormSlice],
  (form) => form.user
) as (state: RootState) => FormState

export const selectOrderSlice = createSelector(
  [selectFormSlice],
  (form) => form.order
) as (state: RootState) => OrderInfo
export const selectErrorSlice = createSelector(
  [selectFormSlice],
  (form) => form.error
) as (state: RootState) => ErrorInfo
export const selectOffersSlice = createSelector(
  [selectFormSlice],
  (form) => form.offersSlider.offers
) as (state: RootState) => OffersType[]
export const selectFormLoadingSlice = createSelector(
  [selectFormSlice],
  (form) => form.sendForm
) as (state: RootState) => IForm
