import styles from './MobileFrame.module.css'

const surfaceClass = {
  login: styles.surfaceLogin,
  white: styles.surfaceWhite,
}

export function MobileFrame({ surface = 'white', children }) {
  return (
    <div className={`${styles.frame} ${surfaceClass[surface] ?? styles.surfaceWhite}`}>
      <div className={styles.inner}>{children}</div>
    </div>
  )
}
