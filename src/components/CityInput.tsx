import React, { useState } from 'react'

interface CityInputProps {
  onSubmit: (city: string) => void
}

const CityInput: React.FC<CityInputProps> = ({ onSubmit }) => {
  const [city, setCity] = useState<string>('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(city)
    setCity('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setCity(e.target.value)}
        value={city}
        placeholder="Enter city name"
      />
      <button type="submit">Search</button>
    </form>
  )
}

export default CityInput
