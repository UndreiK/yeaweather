import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { WeatherData } from '../../shared/types'

interface State {
  weather: WeatherData | null
  history: WeatherData[]
}

const initialState: State = {
  weather: null,
  history: [],
}

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeather: (state, action: PayloadAction<WeatherData, string>) => {
      state.weather = action.payload
    },
    addToHistory: (state, action: PayloadAction<WeatherData, string>) => {
      state.history.unshift(action.payload)

      if (state.history.length > 5) {
        state.history.pop()
      }
    },
  },
})

export const { setWeather, addToHistory } = weatherSlice.actions

export default weatherSlice.reducer
