import { configureStore } from '@reduxjs/toolkit'
import formReducer from './form/slice/formSlice'

export type RootState = ReturnType<typeof store.getState>

export const store = configureStore({
  reducer: {
    form: formReducer
  }
})

export type AppDispatch = typeof store.dispatch
