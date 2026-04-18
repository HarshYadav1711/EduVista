import { Outlet } from 'react-router-dom'
import { MobileFrame } from './MobileFrame'
import styles from './AppShell.module.css'

/**
 * Desktop “canvas”: neutral full-viewport background with the phone preview centered.
 */
export function AppShell() {
  return (
    <div className={styles.canvas}>
      <MobileFrame>
        <Outlet />
      </MobileFrame>
    </div>
  )
}
