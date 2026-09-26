import { Link } from "react-router-dom";
import "../styles/not-found.css";

function NotFound() {
  return (
    <section className="not-found-page">
      <div className="container">
        <div className="not-found-content">
          <span className="not-found-eyebrow">404 ERROR</span>

          <h1>Page Not Found</h1>

          <p>
            Sorry, the page you are looking for does not exist or may have been
            moved.
          </p>

          <Link to="/" className="not-found-button">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
