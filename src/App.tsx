import './App.css'
import CityCard from './components/CityCard/CityCard'
import { useAppSelector } from './store'
import { useGetWeatherByCityQuery } from './store/services/weatherApi'

function App() {
  const city = useAppSelector((state) => state.weather.weather)
  const { data, error, isLoading } = useGetWeatherByCityQuery(city, {
    skip: !city,
  })
  return (
    <>
      <CityCard data={data} isLoading={isLoading} error={error} />
    </>
  )
}

export default App
