import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { loginUser } from "../../api/authApi";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./LoginPage.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await loginUser(email, password);

    const token = response.data.token;

    Cookies.set("jwt_token", token);

    navigate("/");
  } catch (error) {
    setErrorMsg(
      error.response?.data?.message || "Login failed"
    );
  }
};

  return (
    <div className="login-page">
  <div className="login-card">
    <h1 className="brand-title">Go Business</h1>

    <p className="tagline">
      Sign in to open your referral dashboard.
    </p>

    <form className="login-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor="email">Email</label>

        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label htmlFor="password">Password</label>

        <input
          id="password"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button className="signin-btn" type="submit">
        Sign in
      </button>

      {errorMsg && (
        <p className="error-msg">{errorMsg}</p>
      )}
    </form>
  </div>
</div>
  );
}

export default LoginPage;