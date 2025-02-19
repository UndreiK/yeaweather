import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import styles from './styles.module.css'
import { SerializedError } from '@reduxjs/toolkit'

type Props = {
  error: FetchBaseQueryError | SerializedError
}

const ErrorMessage = ({ error }: Props) => {
  let errorMessage
  if (error) {
    if ('status' in error) {
      errorMessage = `Ошибка ${error.status}: ${
        'data' in error &&
        error.data &&
        typeof error.data === 'object' &&
        'message' in error.data
          ? error.data.message
          : 'Что-то пошло не так'
      }`
    } else {
      errorMessage = error.message || 'Неизвестная ошибка'
    }
  }

  return <p className={styles.error}>{errorMessage}</p>
}

export default ErrorMessage
