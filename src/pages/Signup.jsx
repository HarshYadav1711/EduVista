import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FloatingLabelField } from '../components/FloatingLabelField'
import { signupFields } from '../data/signupFields'
import { ROUTES } from '../routes/paths'
import styles from './Signup.module.css'

const AGENCY_OPTIONS = [
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'No' },
]

export default function Signup() {
  const navigate = useNavigate()
  const [agency, setAgency] = useState('yes')

  function handleSubmit(e) {
    e.preventDefault()
    navigate(ROUTES.profile)
  }

  return (
    <main className={styles.screen}>
      <header className={styles.pageHeader}>
        <h1 className={styles.title}>
          Create your{' '}
          <span className={styles.stepBadge} aria-label="Step 1">
            <span aria-hidden="true">1</span>
          </span>{' '}
          PopX account
        </h1>
      </header>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.fields}>
          {signupFields.map((field) => (
            <FloatingLabelField
              key={field.id}
              id={field.id}
              label={field.label}
              type={field.type}
              placeholder={field.placeholder}
              defaultValue={field.defaultValue}
              required={field.required}
              autoComplete={field.autoComplete}
              surface="white"
            />
          ))}
        </div>

        <fieldset className={styles.agency}>
          <legend className={styles.agencyLegend}>
            Are you an Agency?
            <span className={styles.asterisk} aria-hidden="true">
              *
            </span>
          </legend>
          <div className={styles.radioRow}>
            {AGENCY_OPTIONS.map(({ value, label }) => (
              <label key={value} className={styles.radioLabel}>
                <input
                  className={styles.radioInput}
                  type="radio"
                  name="agency"
                  value={value}
                  checked={agency === value}
                  onChange={() => setAgency(value)}
                />
                <span
                  className={
                    agency === value
                      ? `${styles.radioUi} ${styles.radioUiOn}`
                      : styles.radioUi
                  }
                  aria-hidden="true"
                />
                {label}
              </label>
            ))}
          </div>
        </fieldset>

        <button type="submit" className={styles.submit}>
          Create Account
        </button>
      </form>
    </main>
  )
}
