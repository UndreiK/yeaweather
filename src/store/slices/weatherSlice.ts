import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { WeatherData } from '../../shared/types'

interface State {
  weather: WeatherData | null
}

const initialState: State = {
  weather: null,
}

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeather: (state, action: PayloadAction<WeatherData, string>) => {
      state.weather = action.payload
    },
  },
})

export const { setWeather } = weatherSlice.actions

export default weatherSlice.reducer
