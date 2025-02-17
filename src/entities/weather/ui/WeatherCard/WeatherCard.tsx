import Weather from '../Weather/Weather.tsx'
import { useGetWeatherByCityQuery } from '../../api/weatherApi.ts'
import { useAppDispatch, useAppSelector } from '../../../../app/api/hooks.ts'
import LoadingMessage from '../../../../shared/ui/Loading/LoadingMessage.tsx'
import ErrorMessage from '../../../../shared/ui/Error/ErrorMessage.tsx'
import { useEffect } from 'react'
import { getCity } from '../../model/weatherSlice.ts'

const WeatherCard = () => {
  const city = useAppSelector((state) => state.weather.city)
  const dispatch = useAppDispatch()
  const { data, isLoading, isError } = useGetWeatherByCityQuery(city, {
    skip: !city,
  })

  useEffect(() => {
    if (data) {
      dispatch(getCity(data.name))
    }
  }, [data])

  if (isLoading) {
    return <LoadingMessage />
  }

  if (isError) {
    return <ErrorMessage error={isError} />
  }

  return data && <Weather data={data} />
}

export default WeatherCard
