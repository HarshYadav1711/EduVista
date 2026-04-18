import { CameraIcon } from '../components/CameraIcon'
import { PROFILE_BIO, SAMPLE_DISPLAY_NAME, SAMPLE_EMAIL } from '../content/appCopy'
import styles from './Profile.module.css'

const PROFILE_IMAGE_SRC = '/profile.svg'

export default function Profile() {
  return (
    <main className={styles.screen}>
      <header className={styles.screenHeader}>
        <h1 className={styles.screenTitle}>Account Settings</h1>
      </header>

      <section className={styles.identity} aria-labelledby="profile-name">
        <div className={styles.profileMedia}>
          <img
            className={styles.profileImage}
            src={PROFILE_IMAGE_SRC}
            alt={SAMPLE_DISPLAY_NAME}
            width={72}
            height={72}
            decoding="async"
          />
          <button type="button" className={styles.camera} aria-label="Change profile photo">
            <CameraIcon className={styles.cameraIcon} />
          </button>
        </div>
        <div className={styles.meta}>
          <p id="profile-name" className={styles.name}>
            {SAMPLE_DISPLAY_NAME}
          </p>
          <p className={styles.email}>{SAMPLE_EMAIL}</p>
        </div>
      </section>

      <p className={styles.bio}>{PROFILE_BIO}</p>

      <div className={styles.rule} aria-hidden="true" />
    </main>
  )
}
