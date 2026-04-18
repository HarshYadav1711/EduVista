import { Link } from 'react-router-dom'
import { LOREM_SUBTITLE } from '../content/xdCopy'
import { ROUTES } from '../routes/paths'
import styles from './Landing.module.css'

export default function Landing() {
  return (
    <main className={styles.screen}>
      <div className={styles.topSpace} aria-hidden="true" />

      <div className={styles.block}>
        <h1 className={styles.title}>Welcome to PopX</h1>
        <p className={styles.body}>{LOREM_SUBTITLE}</p>

        <nav className={styles.actions} aria-label="Sign up or sign in">
          <Link className={styles.btnPrimary} to={ROUTES.signup}>
            Create Account
          </Link>
          <Link className={styles.btnSecondary} to={ROUTES.login}>
            Already Registered? Login
          </Link>
        </nav>
      </div>
    </main>
  )
}
