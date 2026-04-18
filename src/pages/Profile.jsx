import { Link } from 'react-router-dom'
import styles from '../styles/page.module.css'

export default function Profile() {
  return (
    <main className={styles.root}>
      <h1 className={styles.title}>Profile</h1>
      <p className={styles.lede}>
        Placeholder for the account settings / profile screen from the XD
        prototype.
      </p>
      <nav className={styles.nav} aria-label="Screen">
        <Link to="/">Back to landing</Link>
      </nav>
    </main>
  )
}
