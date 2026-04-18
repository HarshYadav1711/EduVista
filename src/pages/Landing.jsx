import { Link } from 'react-router-dom'
import styles from './Landing.module.css'

const LOREM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,'

export default function Landing() {
  return (
    <main className={styles.screen}>
      {/* Section 1: top whitespace (XD pushes content to lower third) */}
      <div className={styles.topSpace} aria-hidden="true" />

      {/* Section 2: headline, body, CTAs */}
      <div className={styles.block}>
        <h1 className={styles.title}>Welcome to PopX</h1>
        <p className={styles.body}>{LOREM}</p>

        <div className={styles.actions}>
          <Link className={styles.btnPrimary} to="/signup">
            Create Account
          </Link>
          <Link className={styles.btnSecondary} to="/login">
            Already Registered? Login
          </Link>
        </div>
      </div>
    </main>
  )
}
