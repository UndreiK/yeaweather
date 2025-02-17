import styles from './styles.module.css'

const ErrorMessage = ({ error }: any) => {
  let errorMessage
  if (error) {
    if (error.status) {
      errorMessage = `Ошибка ${error.status}: ${
        error.data?.message || 'Что-то пошло не так'
      }`
    } else {
      errorMessage = error.error || 'Неизвестная ошибка'
    }
  }

  return (
    <>
      <p className={styles.error}>{errorMessage}</p>
    </>
  )
}

export default ErrorMessage
