import styles from './FloatingLabelField.module.css'

function labelClassFor(surface) {
  if (surface === 'login') return `${styles.label} ${styles.labelLogin}`
  return `${styles.label} ${styles.labelWhite}`
}

function inputClassFor(surface) {
  if (surface === 'login') return `${styles.input} ${styles.inputLogin}`
  return `${styles.input} ${styles.inputWhite}`
}

export function FloatingLabelField({
  id,
  label,
  type = 'text',
  placeholder,
  required,
  defaultValue,
  autoComplete,
  surface = 'white',
}) {
  return (
    <div className={styles.root}>
      <div className={styles.field}>
        <label className={labelClassFor(surface)} htmlFor={id}>
          {label}
          {required ? (
            <span className={styles.asterisk} aria-hidden="true">
              *
            </span>
          ) : null}
        </label>
        <input
          id={id}
          name={id}
          className={inputClassFor(surface)}
          type={type}
          placeholder={placeholder}
          defaultValue={defaultValue}
          autoComplete={autoComplete}
          required={required}
          aria-required={required ? true : undefined}
        />
      </div>
    </div>
  )
}
