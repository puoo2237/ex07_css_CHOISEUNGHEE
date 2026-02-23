import { useSelector } from "react-redux";
import "./css/UpdateCom.css";

const UpdateCom = ({ imageUrl, user, onChange, onUpdate, loading, error }) => {
  const { role, username } = useSelector((state) => state.auth.login);
  const { history } = useSelector((state) => state.path);
  const path = history[history.length - 3]

  if (!user) return null;

  return (
    <div className="update-wrapper">
      <div className="update-card">

        <div className="update-title">회원 정보 수정</div>

        {loading ? (
          <h2 className="loading-text">Loading...</h2>
        ) : error ? (
          <h2 className="error-text">{error}</h2>
        ) : (
          <form onSubmit={onUpdate}>

            {
              imageUrl && (
                <img
                  src={imageUrl}
                  alt="profile"
                  width="100"
                  height="100"
                  className="profile-img"
                />
              )}

          { (path === "/list") && <div className="form-group">
              <input
                type="file"
                name="file"
                onChange={onChange}
                className="file-input"
              />
            </div>}

            <div className="form-group">
              <input
                type="text"
                name="username"
                value={user.username}
                onChange={onChange}
                className="form-input"
                placeholder="username"
                disabled
              />
            </div>

            {role === "ROLE_ADMIN" ? (user.username === username) && (path === "/list") ? (
              <div className="form-group">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  className="form-input"
                />
              </div>)
              :
              <div className="form-group">
                <input
                  type="text"
                  name="role"
                  value={user.role}
                  onChange={onChange}
                  className="form-input"
                  placeholder="role"
                  required
                />
              </div>
              : (
                <div className="form-group">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={user.password}
                    className="form-input"
                    disabled
                  />
                </div>
              )}

            <button type="submit" className="submit-btn">
              수정
            </button>

          </form>
        )}

      </div>
    </div>
  );
};

export default UpdateCom;