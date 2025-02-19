import { Link } from 'react-router-dom'
import Button from '../../../shared/ui/Button/Button'
import { useAppSelector } from '../../../app/store/hooks.ts'
import { IHistory } from '../../../entities/weather/model/weatherSlice.ts'
import styles from './styles.module.css'
import City from '../../../entities/city/ui/City/City.tsx'

const History = () => {
  const history = useAppSelector((state) => state.weather.history)

  return (
    <div className={styles.container}>
      {history.length > 0 ? (
        <ul className={styles.list}>
          {history.map((city: IHistory, index: number) => (
            <li key={index} className={styles.item}>
              <City city={city.city} temp={city.temp} date={city.date} />
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
