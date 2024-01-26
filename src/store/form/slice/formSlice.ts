import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type AppState, type FormState } from '../../../types/types'
import { fetchOffers, sendData } from '../thunks/formThunks'

const initialState: AppState = {
  user: {
    name: '',
    lastName: '',
    phone: '',
    email: ''
  },
  order: {
    countRoom: 0,
    time: 0
  },
  error: {
    errorPhone: false,
    errorEmail: false
  },
  offersSlider: {
    offers: [],
    error: null,
    loading: false
  },
  sendForm: {
    error: null,
    loading: false,
    submittingForm: null
  }

}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateFormField: (state, action: PayloadAction<{ field: keyof FormState, value: string }>) => {
      const { field, value } = action.payload
      state.user[field] = value
    },
    updateOrderField: (state, action: PayloadAction<{ field: keyof FormState, value: string }>) => {
      const { field, value } = action.payload
      state.order[field] = value
    },
    updateOrderInfo: (state, { payload }) => {
      state.order = payload
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
      state.error.errorPhone = state.user?.phone.length < 18
      console.log(state.error.errorEmail, 'dasdas')
      state.error.errorEmail = !emailRegex.test(state.user?.email)
      console.log(state.error.errorPhone, state.error.errorEmail,!emailRegex.test(state.user?.email))
      if (state.error.errorPhone || state.error.errorEmail) {
        return
      }
      console.log({
        user: {
          firstName: state.user?.name,
          lastName: state.user?.lastName,
          mail: state.user?.email,
          phone: state.user?.phone
        },
        order: {
          flatsCount: state.order?.countRoom,
          time: state.order.time
        }
      })
    },
    resetForm: (state) => initialState
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.offersSlider.loading = true
        state.offersSlider.error = null
      })
      .addCase(fetchOffers.fulfilled, (state, { payload }) => {
        state.offersSlider.loading = false
        state.offersSlider.offers = payload
      })
      .addCase(fetchOffers.rejected, (state, { payload }) => {
        state.offersSlider.loading = false
        if (typeof payload === 'string') {
          state.offersSlider.error = payload
        } else {
          state.offersSlider.error = null
        }
      })
      .addCase(sendData.pending, (state) => {
        state.sendForm.loading = true
        state.sendForm.error = null
      })
      .addCase(sendData.fulfilled, (state, { payload }) => {
        state.sendForm.loading = false
        state.sendForm.submittingForm = true
      })
      .addCase(sendData.rejected, (state, { payload }) => {
        state.sendForm.loading = false
        state.sendForm.submittingForm = false
        if (typeof payload === 'string') {
          state.sendForm.error = payload
        } else {
          state.sendForm.error = null
        }
      })
  }
})

export const { updateFormField, updateOrderInfo, updateOrderField, resetForm } = formSlice.actions

export default formSlice.reducer
