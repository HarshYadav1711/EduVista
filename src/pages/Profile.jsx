import styles from './Profile.module.css'

const AVATAR_SRC = '/avatar.jpg'

const BIO =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

export default function Profile() {
  return (
    <main className={styles.screen}>
      <header className={styles.screenHeader}>
        <h1 className={styles.screenTitle}>Account Settings</h1>
      </header>

      <section
        className={styles.identity}
        aria-labelledby="profile-name"
      >
        <div className={styles.avatarWrap}>
          <img
            className={styles.avatar}
            src={AVATAR_SRC}
            alt="Marry Doe"
            width={72}
            height={72}
          />
          <button type="button" className={styles.camera} aria-label="Change profile photo">
            <svg
              className={styles.cameraIcon}
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M9 4L7.17 6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-3.17L15 4H9zm3 13a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
          </button>
        </div>
        <div className={styles.meta}>
          <p id="profile-name" className={styles.name}>
            Marry Doe
          </p>
          <p className={styles.email}>Marry@Gmail.Com</p>
        </div>
      </section>

      <p className={styles.bio}>{BIO}</p>

      <div className={styles.rule} aria-hidden="true" />
    </main>
  )
}
