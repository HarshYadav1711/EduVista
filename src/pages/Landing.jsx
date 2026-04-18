import { Link } from 'react-router-dom'
import styles from '../styles/page.module.css'

export default function Landing() {
  return (
    <main className={styles.root}>
      <h1 className={styles.title}>Landing</h1>
      <p className={styles.lede}>
        PopX — placeholder screen matching the XD landing artboard.
      </p>
      <nav className={styles.nav} aria-label="Primary">
        <Link to="/signup">Create Account</Link>
        <Link to="/login">Already registered? Login</Link>
      </nav>
    </main>
  )
}
