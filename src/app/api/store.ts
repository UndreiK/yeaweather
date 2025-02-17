import { configureStore } from '@reduxjs/toolkit'
import { weatherApi } from '../../entities/weather/api/weatherApi.ts'
import weatherReducer from '../../entities/weather/model/weatherSlice.ts'

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
