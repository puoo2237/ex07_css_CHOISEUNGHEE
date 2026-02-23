import { useSelector } from "react-redux";
import "./css/ListOneCom.css";

const ListOneCom = ({ imageUrl, user, loading, error, onDelete, toUpdate }) => {
  const { role, username } = useSelector((state) => state.auth.login);
  const { history } = useSelector((state) => state.path);
  const path = history[history.length - 2]

  if (!user) return null;

  return (
    <div className="listone-wrapper">
      <div className="listone-card">

        <div className="listone-title">개인 정보</div>

        {loading ? (
          <h2 className="loading-text">Loading...</h2>
        ) : error ? (
          <h2 className="error-text">{error}</h2>
        ) : (
          <>
            {imageUrl && (
              <img
                src={imageUrl}
                alt="profile"
                width="100"
                height="100"
                className="profile-img"
              />
            )}

            <div className="form-group">
              <label className="form-label">Username</label>
              <input
                type="text"
                name="username"
                value={user.username}
                className="form-input"
                disabled
              />
            </div>

            {(username === user.username) && (path === "/list") && (
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

            {(role === "ROLE_ADMIN") && (path === "/admin") && (
            <div className="form-group">
              <label className="form-label">Role</label>
              <input
                type="text"
                name="role"
                value={user.role}
                className="form-input"
                disabled
              />
            </div>
            )}

            <div className="button-group">
              <button className="btn delete" onClick={onDelete}>
                삭제
              </button>
              <button className="btn edit" onClick={toUpdate}>
                수정
              </button>
            </div>
          </>
        )}

      </div>
    </div>
  );
};

export default ListOneCom;