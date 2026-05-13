import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'

function PageHeader({ title, description, actions = [], aside }) {
  return (
    <section className="screen-header" aria-labelledby="page-title">
      <div>
        <h1 id="page-title">{title}</h1>
        {description && <p>{description}</p>}
      </div>
      {(actions.length > 0 || aside) && (
        <div className="screen-header-actions">
          {actions.map((action) => (
            <Link
              key={`${action.label}-${action.to}`}
              className={action.variant === 'primary' ? 'button-primary' : 'button-secondary'}
              to={action.to}
            >
              {action.icon && <Icon name={action.icon} size={16} />}
              {action.label}
            </Link>
          ))}
          {aside}
        </div>
      )}
    </section>
  )
}

export default PageHeader
