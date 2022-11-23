import styles from './index.module.css'

interface IError {
  error: Error | unknown
}

const Error = ({ error }: IError) => (
  <div className={styles.error_main}>
    <div className={styles.error_error}>Error</div>
    <div className={styles.error_description}>{String(error)}</div>
    <div className={styles.error_advice}>Please, reload the page after a while ...</div>
  </div>
)

export default Error
