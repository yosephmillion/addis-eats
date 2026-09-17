import "../styles/signin.css";

import googleIcon from "../assets/icons/google.jpg";
import appleIcon from "../assets/icons/apple.jpg";
import facebookIcon from "../assets/icons/facebook.jpg";

function SignIn() {
  return (
    <section className="signin-page">
      <div className="signin-container">
        <div className="signin-card">
          <span className="signin-eyebrow">WELCOME BACK</span>

          <h1>Sign In</h1>

          <p className="signin-description">
            Sign in to continue to your Addis Eats account.
          </p>

          <div className="social-signin">
            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noreferrer"
              className="social-signin-button"
            >
              <img src={googleIcon} alt="" />
              <span>Sign in with Google</span>
            </a>

            <a
              href="https://www.apple.com/"
              target="_blank"
              rel="noreferrer"
              className="social-signin-button"
            >
              <img src={appleIcon} alt="" />
              <span>Sign in with Apple</span>
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="social-signin-button"
            >
              <img src={facebookIcon} alt="" />
              <span>Sign in with Facebook</span>
            </a>
          </div>

          <div className="signin-divider">
            <span>OR</span>
          </div>

          <form className="signin-form">
            <label htmlFor="email">Email</label>

            <input id="email" type="email" placeholder="Enter your email" />

            <label htmlFor="password">Password</label>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
            />

            <button type="submit" className="signin-submit">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
