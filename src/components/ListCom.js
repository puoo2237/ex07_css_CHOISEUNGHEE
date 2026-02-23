import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onClick } from "../redux/memberDataSlice";
import "./css/ListCom.css";

const ListCom = ({ totalPage, pageNumber, data, loading, error }) => {
  const sessionNow = JSON.parse(sessionStorage.getItem("auth"));
  const dispatch = useDispatch();
  const nav = useNavigate();

  const pageNumbers = [];
  for (let i = 0; i < totalPage; i++) {
    pageNumbers.push(
      <span key={i} onClick={() => dispatch(onClick({ value: i }))}>
        {i + 1}
      </span>
    );
  }

  return (
    <div className="list-wrapper">
      <div className="list-card">
        <div className="list-title">회원목록</div>

        {loading ? (
          <h2 className="loading-text">Loading...</h2>
        ) : error ? (
          <h2 className="error-text">{error}</h2>
        ) : (
          <>
            <table className="list-table">
              <thead>
                <tr>
                  <th>회원번호</th>
                  <th>회원 아이디</th>
                  <th>ROLE</th>
                </tr>
              </thead>
              <tbody>
                {data && data.length > 0 ? (
                  data.map((d) => {
                    const linkPath =
                      sessionNow && sessionNow.isLoggedIn
                        ? sessionNow.username === d.username
                          ? `/list/one/${d.id}`
                          : "/list"
                        : "/login";
                    return (
                      <tr key={d.id} onClick={() => nav(`${linkPath}`)}>
                        <td>{d.id}</td>
                        <td>{d.username}</td>
                        <td>{d.role}</td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={3}>데이터가 없습니다.</td>
                  </tr>
                )}
              </tbody>
            </table>

            <div className="pagination">
              {pageNumbers} ({pageNumber + 1} / {totalPage})
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ListCom;