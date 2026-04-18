import styles from './FloatingLabelField.module.css'

const LABEL_MODIFIER = {
  login: styles.labelLogin,
  white: styles.labelWhite,
}

const INPUT_MODIFIER = {
  login: styles.inputLogin,
  white: styles.inputWhite,
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
  const labelExtra = LABEL_MODIFIER[surface] ?? styles.labelWhite
  const inputExtra = INPUT_MODIFIER[surface] ?? styles.inputWhite

  return (
    <div className={styles.root}>
      <div className={styles.field}>
        <label className={`${styles.label} ${labelExtra}`} htmlFor={id}>
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
          className={`${styles.input} ${inputExtra}`}
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
