import { IHistory } from '../../../weather/model/weatherSlice'

const City = (props: IHistory) => {
  return (
    <article>
      <p>{props.city}</p>
      <p>{props.temp} °C</p>
      <p>{props.date}</p>
    </article>
  )
}

export default City
