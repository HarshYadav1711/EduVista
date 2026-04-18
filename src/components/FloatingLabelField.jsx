import styles from './FloatingLabelField.module.css'

export function FloatingLabelField({
  id,
  label,
  type = 'text',
  placeholder,
  required,
  defaultValue,
  autoComplete,
  surface,
}) {
  const labelClass =
    surface === 'white'
      ? `${styles.label} ${styles.labelWhite}`
      : styles.label

  const inputClass =
    surface === 'white'
      ? `${styles.input} ${styles.inputWhite}`
      : styles.input

  return (
    <div className={styles.root}>
      <div className={styles.field}>
        <label className={labelClass} htmlFor={id}>
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
          className={inputClass}
          type={type}
          placeholder={placeholder}
          defaultValue={defaultValue}
          autoComplete={autoComplete}
          required={required}
        />
      </div>
    </div>
  )
}
