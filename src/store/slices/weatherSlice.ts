import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { WeatherData } from '../../App'

// Define a type for the slice state
interface State {
  weather: WeatherData | null
}

// Define the initial state using that type
const initialState: State = {
  weather: null,
}

export const weatherSlice = createSlice({
  name: 'weather',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setWeather: (state, action: PayloadAction<WeatherData>) => {
      state.weather = action.payload
    },
  },
})

export const { setWeather } = weatherSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default weatherSlice.reducer
