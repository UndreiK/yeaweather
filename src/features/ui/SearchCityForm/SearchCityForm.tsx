import React, { useEffect, useState } from 'react'
import { useAppDispatch } from '../../../app/store/hooks.ts'
import { setHistory } from '../../../entities/weather/model/weatherSlice.ts'
import Input from '../../../shared/ui/Input/Input.tsx'
import Button from '../../../shared/ui/Button/Button.tsx'

import styles from './styles.module.css'
import { useGetWeatherByCityQuery } from '../../../entities/weather/api/weatherApi.ts'

const SearchCityForm = () => {
  const [city, setCity] = useState<string>('')
  const [searchCity, setSearchCity] = useState<string>('')
  const { data } = useGetWeatherByCityQuery(searchCity, {
    skip: !searchCity,
  })
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (data) {
      // dispatch(getCity(data.name))
      dispatch(
        setHistory({
          city: data.name,
          temp: data.main.temp,
          date: new Date().toLocaleString(),
        })
      )
    }
  }, [data])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!city.trim()) return
    setSearchCity(city)
    setCity('')
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <Button>Search</Button>
    </form>
  )
}

export default SearchCityForm
