import React from 'react'
import CityInput from '../CityInput/CityInput'
import { useDispatch } from 'react-redux'
import { setWeather } from '../../store/slices/weatherSlice'
import { WeatherData } from '../../shared/types'
import Loading from '../Loading'
import ErrorMessage from '../ErrorMessage'
import styles from './styles.module.css'

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
        <div className={styles.container}>
          <div className={styles.city}>
            <h2 className={styles.cityName}>
              {data.name}, {data.sys.country}
            </h2>
          </div>
          <div className={styles.temperature}>
            <p>Temperature: {Math.round(data.main.temp)}°C</p>
            <p>Feels like: {Math.round(data.main.feels_like)}°C</p>
          </div>
          <div className={styles.description}>
            <p>Humidity: {data.main.humidity}%</p>
            <p>Pressure: {data.main.pressure} hPa</p>
            <p>Description: {data.weather[0].description}</p>
            <p>Wind speed: {data.wind.speed} m/s</p>
            <p>Wind direction: {data.wind.deg}°</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default CityCard
