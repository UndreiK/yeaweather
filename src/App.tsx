import { useEffect, useState } from 'react'
import './App.css'
import { useAppSelector } from './store'
import { useGetWeatherByCityQuery } from './store/services/weatherApi'
import { useDispatch } from 'react-redux'
import CityInput from './components/CityInput'

// const API = import.meta.env.VITE_APP_API_ENDPOINT as string
// const KEY = import.meta.env.VITE_APP_API_KEY as string

export interface WeatherData {
  name: string
  main: {
    temp: number
    humidity: number
    pressure: number
    feels_like: number
  }
  weather: {
    description: string
    icon: string
    main: string
  }
  wind: {
    speed: number
    deg: number
  }
  sys: {
    country: string
  }
}

function App() {
  // const [weather, setWeather] = useState<WeatherData | null>(null)
  // const [city, setCity] = useState<string>('')
  // const [loading, setLoading] = useState<boolean>(false)
  // const [error, setError] = useState<string | null>(null)

  // // const weath = useAppSelector((state) => state.weather.weather)
  // const { data, isLoading, isError } = useGetWeatherByCityQuery(city)
  // // console.log('weather', weath)
  // console.log('data', data)

  // const fetchWeatherByCity = async (cityName: string) => {
  //   setLoading(true)
  //   setError(null)
  //   try {
  //     const response = await fetch(
  //       `${API}weather?q=${cityName}&appid=${KEY}&units=metric`
  //     )

  //     if (!response.ok) {
  //       throw new Error('City not found or API error')
  //     }

  //     const data: WeatherData = await response.json()
  //     setWeather(data)
  //   } catch (e: any) {
  //     setError(e.message)
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  // const fetchWeatherByCoords = async (lat: number, lon: number) => {
  //   setLoading(true)
  //   setError(null)
  //   try {
  //     const response = await fetch(
  //       `${API}weather?lat=${lat}&lon=${lon}&appid=${KEY}&units=metric`
  //     )

  //     if (!response.ok) {
  //       throw new Error('Location not found or API error')
  //     }

  //     const data: WeatherData = await response.json()
  //     setWeather(data)
  //     setCity(data.name)
  //   } catch (e: any) {
  //     setError(e.message)
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  // const fetchUserLocation = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         const { latitude, longitude } = position.coords
  //         fetchWeatherByCoords(latitude, longitude)
  //       },
  //       (err) => {
  //         console.error(err)
  //         setError(
  //           'Geolocation access denied. Please search for a city manually.'
  //         )
  //       }
  //     )
  //   } else {
  //     setError('Geolocation is not supported by your browser.')
  //   }
  // }

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  //   fetchWeatherByCity(city)
  //   setCity('')
  // }

  // useEffect(() => {
  //   fetchUserLocation()
  //   setCity('')
  // }, [])

  // return (
  //   <div>
  //     <h1>Weather App</h1>
  //     <form onSubmit={handleSubmit}>
  //       <input
  //         type="text"
  //         onChange={(e) => setCity(e.target.value)}
  //         value={city}
  //         placeholder="Enter city name"
  //       />

  //       <button type="submit">Search</button>
  //     </form>

  //     {loading && <p>Loading...</p>}
  //     {error && <p style={{ color: 'red' }}>{error}</p>}

  //     {weather && (
  //       <div>
  //         <h2>{weather.name}</h2>
  //         <p>Country: {weather.sys.country}</p>
  //         <p>Temperature: {weather.main.temp}°C</p>
  //         <p>Humidity: {weather.main.humidity}%</p>
  //         <p>Pressure: {weather.main.pressure} hPa</p>
  //         <p>Feels like: {weather.main.feels_like}°C</p>
  //         <p>Description: {weather.weather.description}</p>
  //         <p>Wind speed: {weather.wind.speed} m/s</p>
  //         <p>Wind direction: {weather.wind.deg}°</p>
  //       </div>
  //     )}
  //   </div>
  // )

  const city = useAppSelector((state) => state.weather.weather)
  const dispatch = useDispatch()
  const { data, error, isLoading } = useGetWeatherByCityQuery(city, {
    skip: !city,
  })

  console.log(data)

  const handleSubmit = (cityName: string) => {
    dispatch({ type: 'weather/setWeather', payload: cityName })
  }

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {/* {error && <p style={{ color: 'red' }}>{error.message}</p>} */}

      <CityInput onSubmit={handleSubmit} />

      {data && (
        <div>
          <h2>{data.name}</h2>
          <p>Country: {data.sys.country}</p>
          <p>Temperature: {data.main.temp}°C</p>
          <p>Humidity: {data.main.humidity}%</p>
          <p>Pressure: {data.main.pressure} hPa</p>
          <p>Feels like: {data.main.feels_like}°C</p>
          <p>Description: {data.weather.description}</p>
          <p>Wind speed: {data.wind.speed} m/s</p>
          <p>Wind direction: {data.wind.deg}°</p>
        </div>
      )}
    </>
  )
}

export default App
