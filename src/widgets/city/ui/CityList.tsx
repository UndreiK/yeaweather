import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import { useAppDispatch, useAppSelector } from '../../../app/api/hooks.ts'
import { clearHistory } from '../../../entities/weather/model/weatherSlice.ts'
import Button from '../../../shared/ui/Button/Button.tsx'

const CityList = () => {
  const history = useAppSelector((state) => state.weather.history)
  const dispatch = useAppDispatch()

  const handleReset = (): void => {
    dispatch(clearHistory())
  }

  return (
    <div className={styles.container}>
      <Button onClick={handleReset}>clear</Button>
      {history.length > 0 ? (
        <div className={styles.list}>
          <ul>
            {history.map((city: { city: string }, index: number) => (
              <li key={index}>{city.city}</li>
            ))}
          </ul>
        </div>
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
