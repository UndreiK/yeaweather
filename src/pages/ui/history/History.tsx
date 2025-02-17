import { Link } from 'react-router-dom'
import Button from '../../../shared/ui/Button/Button'
import { useAppSelector } from '../../../app/api/hooks.ts'
import { IHistory } from '../../../entities/weather/model/weatherSlice.ts'
import styles from './styles.module.css'

const History = () => {
  const history = useAppSelector((state) => state.weather.history)

  return (
    <div className={styles.container}>
      {history.length > 0 ? (
        <ul className={styles.list}>
          {history.map((city: IHistory, index: number) => (
            <li key={index}>
              <div className={styles.item}>
                <p>{city.city}</p>
                <p>{city.temp} °C</p>
                <p>{city.date}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>no history</p>
      )}
      <Button>
        <Link to="/">go back</Link>
      </Button>
    </div>
  )
}

export default History
