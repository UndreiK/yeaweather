export interface WeatherData {
  name: string
  main: {
    temp: number
    humidity: number
    pressure: number
    feels_like: number
  }
  weather: WeatherDescription[]
  wind: {
    speed: number
    deg: number
  }
  sys: {
    country: string
  }
}

interface WeatherDescription {
  description: string
  icon: string
  main: string
}
