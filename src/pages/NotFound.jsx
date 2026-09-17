import { Link } from "react-router-dom";
import "../styles/not-found.css";

function NotFound() {
  return (
    <section className="not-found-page">
      <div className="container">
        <div className="not-found-card">
          <span className="not-found-label">ADDIS EATS</span>

          <div className="not-found-number">404</div>

          <h1>Page Not Found</h1>

          <p>
            Sorry, we couldn't find the page you're looking for. Let's get you
            back to something delicious.
          </p>

          <div className="not-found-actions">
            <Link to="/" className="btn btn-primary">
              Back Home
            </Link>

            <Link to="/menu" className="btn btn-secondary">
              Browse Menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
