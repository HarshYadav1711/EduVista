import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FloatingLabelField } from '../components/FloatingLabelField'
import { signupFields } from '../data/signupFields'
import styles from './Signup.module.css'

export default function Signup() {
  const navigate = useNavigate()
  const [agency, setAgency] = useState('yes')

  function handleSubmit(e) {
    e.preventDefault()
    navigate('/profile')
  }

  return (
    <main className={styles.screen}>
      <header className={styles.pageHeader}>
        <h1 className={styles.title}>Create your PopX account</h1>
        <div className={styles.stepBadge} aria-label="Step 1">
          <span aria-hidden="true">1</span>
        </div>
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
              surface="form"
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
            <label className={styles.radioLabel}>
              <input
                className={styles.radioInput}
                type="radio"
                name="agency"
                value="yes"
                checked={agency === 'yes'}
                onChange={() => setAgency('yes')}
              />
              <span
                className={
                  agency === 'yes'
                    ? `${styles.radioUi} ${styles.radioUiOn}`
                    : styles.radioUi
                }
                aria-hidden="true"
              />
              Yes
            </label>
            <label className={styles.radioLabel}>
              <input
                className={styles.radioInput}
                type="radio"
                name="agency"
                value="no"
                checked={agency === 'no'}
                onChange={() => setAgency('no')}
              />
              <span
                className={
                  agency === 'no'
                    ? `${styles.radioUi} ${styles.radioUiOn}`
                    : styles.radioUi
                }
                aria-hidden="true"
              />
              No
            </label>
          </div>
        </fieldset>

        <button type="submit" className={styles.submit}>
          Create Account
        </button>
      </form>
    </main>
  )
}
