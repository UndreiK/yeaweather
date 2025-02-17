import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IHistory {
  city: string
  temp: number | undefined
  date: string | undefined
}

interface IWeatherState {
  city: string
  history: IHistory[]
}

const initialState: IWeatherState = {
  city: '',
  history: [],
}

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    getCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload
    },
    clearHistory: (state) => {
      state.history = []
    },
    setHistory: (state, action: PayloadAction<IHistory>) => {
      if (!state.history.find((item) => item.city === action.payload.city)) {
        state.history.unshift(action.payload)
      }
    },
  },
})

export const { getCity, clearHistory, setHistory } = weatherSlice.actions

export default weatherSlice.reducer
