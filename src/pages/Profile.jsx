import { CameraIcon } from '../components/CameraIcon'
import styles from './Profile.module.css'

const PROFILE_IMAGE_SRC = '/profile.jpg'

const BIO_TEXT =
  'Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam'

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
            alt=""
            width={72}
            height={72}
          />
          <button type="button" className={styles.camera} aria-label="Change profile photo">
            <CameraIcon className={styles.cameraIcon} />
          </button>
        </div>
        <div className={styles.meta}>
          <p id="profile-name" className={styles.name}>
            Marry Doe
          </p>
          <p className={styles.email}>Marry@Gmail.Com</p>
        </div>
      </section>

      <p className={styles.bio}>{BIO_TEXT}</p>

      <div className={styles.rule} aria-hidden="true" />
    </main>
  )
}
