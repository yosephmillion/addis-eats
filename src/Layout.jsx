import { Link, NavLink, Outlet } from "react-router-dom";
import { useCartStore } from "./store/cartStore";
import { useFavoritesStore } from "./store/favoritesStore";

import "./styles/header.css";
import "./styles/footer.css";

import footerLogo from "./assets/icons/addis-footer-logo.jpg";

function Layout() {
  const cartCount = useCartStore((state) => state.getCartCount());
  const favorites = useFavoritesStore((state) => state.favorites);

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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="#FFFFFF"
              >
                <path d="M213-117.21q-21-21.21-21-51T213.21-219q21.21-21 51-21T315-218.79q21 21.21 21 51T314.79-117q-21.21 21-51 21T213-117.21Zm432 0q-21-21.21-21-51T645.21-219q21.21-21 51-21T747-218.79q21 21.21 21 51T746.79-117q-21.21 21-51 21T645-117.21ZM253-696l83 192h301l82-192H253Zm-31-72h570q14 0 20.5 11t1.5 23L702.63-476.14Q694-456 676.5-444T637-432H317l-42 72h493v72H276q-43 0-63.5-36.15-20.5-36.16.5-71.85l52-90-131-306H48v-72h133l41 96Zm114 264h301-301Z" />
              </svg>
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

          <div className="footer-column">
            <h3>Links</h3>

            <Link to="/signup">Sign up</Link>
            <Link to="/signin">Login</Link>
            <Link to="/feedback">Feedback</Link>
          </div>

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

          <div className="footer-column">
            <h3>Company</h3>

            <Link to="/terms">Terms</Link>
            <Link to="/privacy">Privacy</Link>
          </div>

          <div className="footer-copyright">© 2026 Addis Eats</div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
