import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks.ts'
import {
  clearHistory,
  getCity,
  IHistory,
} from '../../../entities/weather/model/weatherSlice.ts'
import Button from '../../../shared/ui/Button/Button.tsx'
import City from '../../../entities/city/ui/City/City.tsx'

const CityList = () => {
  const history = useAppSelector((state) => state.weather.history)
  const dispatch = useAppDispatch()

  const handleReset = (): void => {
    dispatch(clearHistory())
  }
  const handleClick = (city: IHistory) => {
    dispatch(getCity(city.city))
  }

  return (
    <div className={styles.container}>
      <Button onClick={handleReset}>clear</Button>
      {history.length > 0 ? (
        <ul className={styles.list}>
          {history.map((city: IHistory, index: number) => (
            <li
              key={index}
              onClick={() => handleClick(city)}
              className={styles.item}
            >
              <City city={city.city} temp={city.temp} />
            </li>
          ))}
        </ul>
      ) : (
        <p>no history</p>
      )}
      <Button>
        <Link to="/history">see history</Link>
      </Button>
    </div>
  )
}

export default CityList
