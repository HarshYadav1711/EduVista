import { Link } from 'react-router-dom'
import styles from '../styles/page.module.css'

export default function Login() {
  return (
    <main className={styles.root}>
      <h1 className={styles.title}>Login</h1>
      <p className={styles.lede}>
        Placeholder for the sign-in screen from the XD prototype.
      </p>
      <nav className={styles.nav} aria-label="Screen">
        <Link to="/profile">Continue to profile</Link>
        <Link to="/">Back to landing</Link>
      </nav>
    </main>
  )
}
