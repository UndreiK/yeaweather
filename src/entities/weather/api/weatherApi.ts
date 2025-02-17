import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IWeatherData } from '../../../shared/types.ts'

const BASE_URL = import.meta.env.VITE_APP_API_ENDPOINT as string
const API_KEY = import.meta.env.VITE_APP_API_KEY as string

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getWeatherByCity: builder.query<IWeatherData, string>({
      query: (city) => `weather?q=${city}&appid=${API_KEY}&units=metric`,
    }),
  }),
})

export const { useGetWeatherByCityQuery } = weatherApi
