import { IWeatherData } from '../../../../shared/types.ts'
import { getWindDirection } from '../../../../shared/windDirection.ts'
import styles from './styles.module.css'

interface Props {
  data: IWeatherData | undefined
}

const Weather = ({ data }: Props) => {
  console.log(data)

  return (
    <div className={styles.container}>
      {data && (
        <div className={styles.weather}>
          <h2>
            {data.name} {data.sys.country}
          </h2>
          <p>temp: {data.main.temp} °C</p>
          <p>feels_like: {data.main.feels_like} °C</p>
          <p>humidity: {data.main.humidity} %</p>
          <p>pressure: {data.main.pressure} hPa</p>
          <p>weather: {data.weather[0].main}</p>
          <p>description: {data.weather[0].description}</p>
          <p>wind: {getWindDirection(data.wind.deg)}</p>
          <p>wind.speed: {data.wind.speed} m/s</p>
        </div>
      )}
    </div>
  )
}

export default Weather
