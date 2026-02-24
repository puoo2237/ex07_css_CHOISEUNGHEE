import "../css/post/PostOneCom.css";

const PostOneCom = ({ post, loading, error, onDelete, toUpdate }) => {
  if (loading) return <div className="post-wrapper"><h2>Loading...</h2></div>;
  if (error) return <div className="post-wrapper"><h2>{error}</h2></div>;
  if (!post) return null;

  return (
    <div className="post-wrapper">
      <div className="post-card">
        <div className="post-header">
          <h2 className="post-title">{post.title}</h2>
          <div className="post-meta">
            <span><b>작성자</b> {post.memUserName}</span>
            <span><b>작성일</b> {post.createdAt?.split("T")[0]}</span>
            <span><b>수정일</b> {post.updateTime?.split("T")[0]}</span>
            <span><b>조회수</b> {post.postCount}</span>
            <span><b>좋아요수</b> {post.likeCount}</span>
          </div>
        </div>

        <div className="post-content">
          {post.content}
        </div>

        <div className="post-buttons">
          <button className="btn delete" onClick={onDelete}>
            삭제
          </button>
          <button className="btn edit" onClick={toUpdate}>
            수정
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostOneCom;