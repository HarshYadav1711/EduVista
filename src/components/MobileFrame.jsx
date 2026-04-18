import styles from './MobileFrame.module.css'

const surfaceClass = {
  landing: styles.surfaceLanding,
  white: styles.surfaceWhite,
  form: styles.surfaceForm,
}

export function MobileFrame({ surface = 'white', children }) {
  return (
    <div className={`${styles.frame} ${surfaceClass[surface]}`}>
      <div className={styles.inner}>{children}</div>
    </div>
  )
}
