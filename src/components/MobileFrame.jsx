import styles from './MobileFrame.module.css'

/**
 * Fixed XD proportions (375×812 min). Not a fluid website layout.
 */
export function MobileFrame({ children }) {
  return (
    <div className={styles.frame}>
      <div className={styles.inner}>{children}</div>
    </div>
  )
}
