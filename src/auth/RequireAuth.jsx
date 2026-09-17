import { Navigate, useLocation } from "react-router-dom";

function RequireAuth({ children }) {
  const isAuthenticated = localStorage.getItem("addisEatsUser") === "true";

  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;
