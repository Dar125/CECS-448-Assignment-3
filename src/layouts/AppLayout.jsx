import { Link, Outlet, useLocation } from 'react-router-dom'
import Icon from '../components/Icon.jsx'

const navItems = [
  { label: 'Dashboard', to: '/dashboard', icon: 'home', match: (path) => path === '/dashboard' },
  { label: 'My Plan', to: '/my-plan', icon: 'map', match: (path) => path === '/my-plan' },
  {
    label: 'Courses',
    to: '/plan-courses',
    icon: 'bookOpen',
    match: (path) => path === '/plan-courses' || path.startsWith('/courses/'),
  },
  { label: 'Resources', to: '/resources', icon: 'support', match: (path) => path === '/resources' },
]

function AppLayout() {
  const location = useLocation()

  return (
    <div className="app-shell">
      <aside className="site-sidebar">
        <Link className="brand" to="/">
          <span className="brand-mark">
            <Icon name="cap" size={22} />
          </span>
          <span>
            <span className="brand-title">Academic Planner</span>
            <span className="brand-subtitle">First-Gen Success</span>
          </span>
        </Link>

        <nav className="primary-nav" aria-label="Primary navigation">
          {navItems.map((item) => {
            const active = item.match(location.pathname)

            return (
              <Link
                key={item.to}
                aria-current={active ? 'page' : undefined}
                className={active ? 'nav-link active' : 'nav-link'}
                to={item.to}
              >
                <Icon name={item.icon} size={20} />
                {item.label}
              </Link>
            )
          })}
        </nav>
      </aside>

      <div className="content-shell">
        <main className="page-shell">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AppLayout
