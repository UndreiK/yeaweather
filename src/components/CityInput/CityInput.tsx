import React, { useState } from 'react'
import styles from './styles.module.css'

interface CityInputProps {
  onSubmit: (city: string) => void
}

const CityInput: React.FC<CityInputProps> = ({ onSubmit }: CityInputProps) => {
  const [city, setCity] = useState<string>('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(city)
    setCity('')
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        className={styles.input}
        type="text"
        onChange={(e) => setCity(e.target.value)}
        value={city}
        placeholder="Enter city name"
      />
      <button type="submit" className={styles.button}>
        Search
      </button>
    </form>
  )
}

export default CityInput
