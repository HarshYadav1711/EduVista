import { Outlet, useLocation } from 'react-router-dom'
import { MobileFrame } from './MobileFrame'
import styles from './AppShell.module.css'

function surfaceForPath(pathname) {
  if (pathname === '/') return 'landing'
  if (pathname === '/signup') return 'form'
  return 'white'
}

export function AppShell() {
  const { pathname } = useLocation()
  const surface = surfaceForPath(pathname)

  return (
    <div className={styles.canvas}>
      <MobileFrame surface={surface}>
        <Outlet />
      </MobileFrame>
    </div>
  )
}
