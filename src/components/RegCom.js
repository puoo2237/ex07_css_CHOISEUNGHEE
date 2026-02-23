import "./css/RegCom.css";

const RegCom = ({ reg, onChange, onSubmit, loading, error }) => {
  return (
    <div className="reg-wrapper">
      <div className="reg-card">

        <div className="reg-title">회원가입</div>

        {loading ? (
          <h2 className="loading-text">Register...</h2>
        ) : error ? (
          <h2 className="error-text">{error}</h2>
        ) : (
          <form onSubmit={onSubmit}>

            <div className="form-group">
              <input
                type="text"
                placeholder="username"
                name="username"
                value={reg.username}
                onChange={onChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                placeholder="password"
                name="password"
                value={reg.password}
                onChange={onChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                placeholder="role"
                name="role"
                value={reg.role}
                onChange={onChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <input
                type="file"
                name="file"
                onChange={onChange}
                className="file-input"
              />
            </div>

            <button type="submit" className="submit-btn">
              REGISTER
            </button>

          </form>
        )}

      </div>
    </div>
  );
};

export default RegCom;