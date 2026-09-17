import { Link, NavLink, Outlet } from "react-router-dom";
import { useCart } from "./context/CartContext";
import { useFavorites } from "./context/FavoritesContext";

import "./styles/header.css";
import "./styles/footer.css";

import footerLogo from "./assets/icons/addis-footer-logo.jpg";

function Layout() {
  const { cart } = useCart();
  const { favorites } = useFavorites();

  const cartCount = cart.reduce((sum, item) => sum + Number(item.quantity), 0);

  return (
    <div className="app">
      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" className="logo">
            Addis<span>Eats</span>
          </Link>

          <nav className="main-nav">
            <NavLink to="/">Home</NavLink>

            <NavLink to="/menu">Menu</NavLink>

            <NavLink to="/favorites" className="favorites-nav-link">
              Favorites
              {favorites.length > 0 && (
                <span className="favorites-count">{favorites.length}</span>
              )}
            </NavLink>

            <NavLink to="/cart" className="cart-nav-link">
              Cart
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </NavLink>

            <NavLink to="/signin" className="nav-signin">
              Sign In
            </NavLink>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="footer-container">
          {/* Logo */}
          <div className="footer-brand">
            <Link to="/">
              <img
                src={footerLogo}
                alt="Addis Eats"
                className="footer-logo-image"
              />
            </Link>

            <p>
              Authentic Ethiopian flavors,
              <br />
              delivered with love.
            </p>
          </div>

          {/* Links */}
          <div className="footer-column">
            <h3>Links</h3>

            <Link to="/signup">Sign up</Link>
            <Link to="/signin">Login</Link>
            <Link to="/feedback">Feedback</Link>
          </div>

          {/* Social */}
          <div className="footer-column">
            <h3>Social</h3>

            <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
              X
            </a>

            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tiktok
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </div>

          {/* Company */}
          <div className="footer-column">
            <h3>Company</h3>

            <Link to="/terms">Terms</Link>
            <Link to="/privacy">Privacy</Link>
          </div>

          {/* Copyright */}
          <div className="footer-copyright">© 2026 Addis Eats</div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
