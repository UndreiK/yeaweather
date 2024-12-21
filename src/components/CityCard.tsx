import React from 'react'
import CityInput from './CityInput'
import { useDispatch } from 'react-redux'
import { setWeather } from '../store/slices/weatherSlice'
import { WeatherData } from '../shared/types'
import Loading from './Loading'
import ErrorMessage from './ErrorMessage'

const CityCard: React.FC<{
  data: WeatherData
  isLoading: boolean
  error: any
}> = ({ data, isLoading, error }) => {
  const dispatch = useDispatch()

  console.log(data)
  console.log('error', error)

  const handleSubmit = (cityName: string) => {
    dispatch(setWeather(cityName))
  }

  return (
    <div>
      {<Loading isLoading={isLoading} />}
      {<ErrorMessage error={error} />}

      <CityInput onSubmit={handleSubmit} />

      {data && (
        <div>
          <h2>{data.name}</h2>
          <p>Country: {data.sys.country}</p>
          <p>Temperature: {data.main.temp}°C</p>
          <p>Humidity: {data.main.humidity}%</p>
          <p>Pressure: {data.main.pressure} hPa</p>
          <p>Feels like: {data.main.feels_like}°C</p>
          <p>Description: {data.weather[0].description}</p>
          <p>Wind speed: {data.wind.speed} m/s</p>
          <p>Wind direction: {data.wind.deg}°</p>
        </div>
      )}
    </div>
  )
}

export default CityCard
