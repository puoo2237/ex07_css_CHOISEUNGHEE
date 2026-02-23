import "./css/PostUpdateCom.css";

const PostUpdateCom = ({ post, onChange, onUpdate }) => {
  if (!post) return null;

  return (
    <div className="post-update-wrapper">
      <div className="post-update-card">

        <div className="post-update-title">게시글 수정</div>

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

        <div className="update-area">
          <button className="update-btn" onClick={onUpdate}>
            수정
          </button>
        </div>

      </div>
    </div>
  );
};

export default PostUpdateCom;