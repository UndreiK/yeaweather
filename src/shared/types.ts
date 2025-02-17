export interface IWeatherData {
  name: string
  main: {
    temp: number
    humidity: number
    pressure: number
    feels_like: number
  }
  weather: IWeatherDescription[]
  wind: {
    speed: number
    deg: number
  }
  sys: {
    country: string
  }
}

interface IWeatherDescription {
  description: string
  main: string
}
