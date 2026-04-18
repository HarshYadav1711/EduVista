import { Outlet, useLocation } from 'react-router-dom'
import { MobileFrame } from './MobileFrame'
import styles from './AppShell.module.css'

const FRAME_SURFACE = {
  '/login': 'login',
}

export function AppShell() {
  const { pathname } = useLocation()
  const surface = FRAME_SURFACE[pathname] ?? 'white'

  return (
    <div className={styles.canvas}>
      <MobileFrame surface={surface}>
        <Outlet />
      </MobileFrame>
    </div>
  )
}
