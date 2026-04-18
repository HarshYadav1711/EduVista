import { Link } from 'react-router-dom'
import styles from './Landing.module.css'

const LOREM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,'

export default function Landing() {
  return (
    <main className={styles.screen}>
      <div className={styles.topSpace} aria-hidden="true" />

      <div className={styles.block}>
        <h1 className={styles.title}>Welcome to PopX</h1>
        <p className={styles.body}>{LOREM}</p>

        <nav className={styles.actions} aria-label="Sign up or sign in">
          <Link className={styles.btnPrimary} to="/signup">
            Create Account
          </Link>
          <Link className={styles.btnSecondary} to="/login">
            Already Registered? Login
          </Link>
        </nav>
      </div>
    </main>
  )
}
