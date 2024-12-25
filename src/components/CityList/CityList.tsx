import { useDispatch } from 'react-redux'
import styles from './styles.module.css'
import { setWeather } from '../../store/slices/weatherSlice'

const CityList = ({ history }: { history: string[] }) => {
  const dispatch = useDispatch()

  return (
    <>
      <h2>History</h2>
      <div className={styles.history}>
        {history.map((city) => (
          <div
            key={city}
            className={styles.historyItem}
            onClick={() => dispatch(setWeather(city))}
          >
            {city}
          </div>
        ))}
      </div>
    </>
  )
}

export default CityList
