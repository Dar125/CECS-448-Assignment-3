import { Link } from "react-router-dom";

function PlaceholderScreen({ title, eyebrow, description, nextActions = [] }) {
  return (
    <section className="placeholder-screen" aria-labelledby="page-title">
      <p className="eyebrow">{eyebrow}</p>
      <h1 id="page-title">{title}</h1>
      <p className="screen-description">{description}</p>
      <div className="placeholder-note">
        <strong>Scaffold placeholder:</strong> replace this with the final
        design and content for this screen.
      </div>
      {nextActions.length > 0 && (
        <div className="action-row" aria-label="Related routes">
          {nextActions.map((action) => (
            <Link key={action.to} className="button-link" to={action.to}>
              {action.label}
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}

export default PlaceholderScreen;
