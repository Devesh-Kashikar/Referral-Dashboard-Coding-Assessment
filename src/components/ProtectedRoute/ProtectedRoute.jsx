import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const token = Cookies.get("jwt_token");

  if (token) {
    return children;
  }

  return <Navigate to="/login" replace />;
}

export default ProtectedRoute;