import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { type AppDispatch, type RootState } from '../../store'
import { type OffersType } from '../../../types/types'

export const fetchOffers = createAsyncThunk<
OffersType[],
undefined,
{
  dispatch: AppDispatch
  state: RootState
  rejectValue: string
}
>(
  'offers/fetchOffers',
  async (_, { rejectWithValue }) => {
    const url = 'https://api.pik.ru/v2/offer/special?types=1,2&locations=2,3'
    try {
      const response = await axios.get(url)
      return response.data
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message)
      }
    }
  }
)
export const sendData = createAsyncThunk<
any,
undefined,
{
  dispatch: AppDispatch
  state: RootState
  rejectValue: string
}
>(
  'form/sendData',
  async (_, { getState, rejectWithValue }) => {
    const state = getState().form
    const data = {
      user: {
        firstName: state.user.name,
        lastName: state.user.lastName,
        mail: state.user.email,
        phone: state.user.phone
      },
      order: {
        flatsCount: state.order.countRoom,
        time: state.order.time
      }
    }
    try {
      const response = await axios.post('https://strapi.pik.ru/front-tests', data)
      return response.data
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message)
      }
    }
  }
)
