import Weather from '../Weather/Weather.tsx'
import { useGetWeatherByCityQuery } from '../../api/weatherApi.ts'
import { useAppSelector } from '../../../../app/store/hooks.ts'
import LoadingMessage from '../../../../shared/ui/Loading/LoadingMessage.tsx'
import ErrorMessage from '../../../../shared/ui/Error/ErrorMessage.tsx'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { SerializedError } from '@reduxjs/toolkit'

const WeatherCard = () => {
  const city = useAppSelector((state) => state.weather.city)
  const { data, isLoading, isError } = useGetWeatherByCityQuery(city, {
    skip: !city,
  })

  if (isLoading) {
    return <LoadingMessage />
  }

  if (isError) {
    return (
      <ErrorMessage
        error={isError as unknown as FetchBaseQueryError | SerializedError}
      />
    )
  }

  return data && <Weather data={data} />
}

export default WeatherCard
