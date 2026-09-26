import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

import "../styles/signin.css";

import googleIcon from "../assets/icons/google.jpg";
import appleIcon from "../assets/icons/apple.jpg";
import facebookIcon from "../assets/icons/facebook.jpg";

import { signinSchema } from "../schemas/signinSchema";

function SignIn() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const signIn = useAuthStore((state) => state.signIn);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    setError("");

    try {
      setLoading(true);

      const result = await signIn(data.email, data.password);

      if (!result.success) {
        setError(result.error);
        return;
      }

      const from = location.state?.from?.pathname || "/";

      navigate(from, { replace: true });
    } catch (error) {
      console.error("Login error:", error);
      setError("Unable to sign in. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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

          <form
            className="signin-form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            {error && <div className="signin-error">{error}</div>}

            <label htmlFor="email">Email</label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              {...register("email")}
            />

            {errors.email && (
              <small className="signin-error">{errors.email.message}</small>
            )}

            <label htmlFor="password">Password</label>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              {...register("password")}
            />

            {errors.password && (
              <small className="signin-error">{errors.password.message}</small>
            )}

            <button type="submit" className="signin-submit" disabled={loading}>
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
