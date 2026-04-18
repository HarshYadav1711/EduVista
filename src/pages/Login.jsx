import { useNavigate } from 'react-router-dom'
import { FloatingLabelField } from '../components/FloatingLabelField'
import styles from './Login.module.css'

const LOREM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,'

export default function Login() {
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    navigate('/profile')
  }

  return (
    <main className={styles.screen}>
      <header className={styles.intro}>
        <h1 className={styles.title}>Signin to your PopX account</h1>
        <p className={styles.body}>{LOREM}</p>
      </header>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <FloatingLabelField
          id="email"
          label="Email Address"
          type="email"
          placeholder="Enter email address"
          autoComplete="email"
          surface="login"
        />
        <FloatingLabelField
          id="password"
          label="Password"
          type="password"
          placeholder="Enter password"
          autoComplete="current-password"
          surface="login"
        />
        <button type="submit" className={styles.submit}>
          Login
        </button>
      </form>
    </main>
  )
}
