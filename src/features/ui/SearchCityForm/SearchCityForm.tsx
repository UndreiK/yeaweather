import React, { useState } from 'react'
import { useAppDispatch } from '../../../app/api/hooks.ts'
import {
  getCity,
  setHistory,
} from '../../../entities/weather/model/weatherSlice.ts'
import Input from '../../../shared/ui/Input/Input.tsx'
import Button from '../../../shared/ui/Button/Button.tsx'

import styles from './styles.module.css'
import { useGetWeatherByCityQuery } from '../../../entities/weather/api/weatherApi.ts'

const SearchCityForm = () => {
  const [city, setCity] = useState<string>('')
  const { data } = useGetWeatherByCityQuery(city, {
    skip: !city,
  })
  const dispatch = useAppDispatch()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(getCity(city))
    if (data) {
      dispatch(
        setHistory({
          city: data?.name,
          temp: data?.main.temp,
          date: new Date().toLocaleString(),
        })
      )
    }
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
