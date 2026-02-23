import "./css/PostAddCom.css";

const PostAddCom = ({ post, onChange, onClick }) => {
  return (
    <div className="post-add-wrapper">
      <div className="post-add-card">

        <div className="post-add-title">게시글 작성</div>

        <div className="form-group">
          <label className="form-label">제목</label>
          <input
            type="text"
            name="title"
            value={post.title}
            onChange={onChange}
            placeholder="제목을 입력하세요"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">내용</label>
          <textarea
            name="content"
            value={post.content}
            onChange={onChange}
            placeholder="내용을 입력하세요"
            className="form-textarea"
          />
        </div>

        <div className="submit-area">
          <button className="submit-btn" onClick={onClick}>
            등록
          </button>
        </div>

      </div>
    </div>
  );
};

export default PostAddCom;