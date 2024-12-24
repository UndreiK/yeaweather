import './App.css'
import CityCard from './components/CityCard/CityCard'
import CityList from './components/CityList/CityList'
import { useAppSelector } from './store'
import { useGetWeatherByCityQuery } from './store/services/weatherApi'

function App() {
  const city = useAppSelector((state) => state.weather.weather)
  const { data, error, isLoading } = useGetWeatherByCityQuery(city, {
    skip: !city,
  })
  const history = useAppSelector((state) => state.weather.history)
  return (
    <>
      <CityCard data={data} isLoading={isLoading} error={error} />
      <CityList history={history} />
    </>
  )
}

export default App
