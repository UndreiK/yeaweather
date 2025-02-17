import styles from './styles.module.css'

interface IInputProps {
  type: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
}

const Input = ({ type, value, onChange, placeholder }: IInputProps) => {
  return (
    <>
      <input
        className={styles.input}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  )
}

export default Input
