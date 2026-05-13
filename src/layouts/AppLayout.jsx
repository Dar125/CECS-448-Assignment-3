import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'My Plan', to: '/my-plan' },
  { label: 'Resources', to: '/resources' },
]

function AppLayout() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="/">
          Student Academic Planning
        </a>
        <nav className="primary-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main className="page-shell">
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout
