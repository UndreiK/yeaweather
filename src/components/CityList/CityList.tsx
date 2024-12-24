const CityList = ({ history }) => {
  console.log('history', history)

  return (
    <>
      <h2>History</h2>
      <ul>
        {history.map((city) => (
          <li key={city}>{city}</li>
        ))}
      </ul>
    </>
  )
}

export default CityList
