import { Link } from "react-router-dom";
import "./css/LoginCom.css";

const LoginCom = ({ login, onSubmit, onChange, loading, error }) => {
  return (
    <div className="login-wrapper">
      <div className="login-card">

        {loading ? (
          <h2 className="loading-text">Login...</h2>
        ) : error ? (
          <h2 className="error-text">{error}</h2>
        ) : (
          <>
            <Link to="/" className="logo-link">
              탱이냥 이동
            </Link>

            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="username"
                  value={login.username}
                  onChange={onChange}
                  placeholder="input username"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  value={login.password}
                  onChange={onChange}
                  placeholder="input password"
                  className="form-input"
                  required
                />
              </div>

              <button type="submit" className="submit-btn">
                로그인
              </button>
            </form>
          </>
        )}

      </div>
    </div>
  );
};

export default LoginCom;