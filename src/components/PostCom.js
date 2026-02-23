import { useNavigate } from "react-router-dom";
import { onClick } from "../redux/memberDataSlice";
import { useDispatch } from "react-redux";
import "./css/PostCom.css";

const PostCom = ({ posts, pageNumber, totalPage, loading, error }) => {
  const sessionNow = JSON.parse(sessionStorage.getItem("auth"));
  const dispatch = useDispatch();
  const nav = useNavigate();

  const pageNumbers = [];
  for (let i = 0; i < totalPage; i++) {
    pageNumbers.push(
      <span
        key={i}
        className="page-number"
        onClick={() => dispatch(onClick({ value: i }))}
      >
        {i + 1}
      </span>
    );
  }

  return (
    <div className="post-list-wrapper">
      <div className="post-list-container">

        <div className="post-add-area">
          <button
            className="post-add-btn"
            onClick={() => {
              sessionNow?.isLoggedIn ?
                nav("/post/add") : nav("/login")
            }}
          >
            게시글 등록
          </button>
        </div>

        <table className="post-table">
          <thead>
            <tr>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
              <th>수정일</th>
              <th>조회수</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="4">로딩 중...</td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan="4">에러가 발생했습니다.</td>
              </tr>
            ) : (
              posts?.map((post) => (
                <tr
                  key={post.id}
                  className="post-row"
                  onClick={() => {
                    sessionNow?.isLoggedIn ?
                      nav(`/post/one/${post.id}`) : nav("/login")
                  }
                  }
                >
                  <td className="post-title-cell">{post.title}</td>
                  <td>{post.memUserName}</td>
                  <td>{new Date(post.createdAt).toLocaleDateString()}</td>
                  <td>{new Date(post.updateTime).toLocaleDateString()}</td>
                  <td>{post.postCount}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        <div className="pagination">
          {pageNumbers} ({pageNumber + 1} / {totalPage})
        </div>

      </div>
    </div>
  );
};

export default PostCom;