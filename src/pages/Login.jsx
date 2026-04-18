import { useNavigate } from 'react-router-dom'
import { FloatingLabelField } from '../components/FloatingLabelField'
import { LOGIN_BODY } from '../content/appCopy'
import { ROUTES } from '../routes/paths'
import styles from './Login.module.css'

export default function Login() {
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    navigate(ROUTES.profile)
  }

  return (
    <main className={styles.screen}>
      <header className={styles.intro}>
        <h1 className={styles.title}>Sign in to your account</h1>
        <p className={styles.body}>{LOGIN_BODY}</p>
      </header>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <FloatingLabelField
          id="email"
          label="Email address"
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
