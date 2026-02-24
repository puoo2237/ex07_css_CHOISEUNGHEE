import { useDispatch, useSelector } from "react-redux";
import PostCom from "../../components/post/PostCom";
import { likePostThunk, postThunk } from "../../service/post/postThunk";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPage } from "../../redux/path/pathSlice";

const PostCon = () => {
    const dispatch = useDispatch();
    const { posts, loading, error } = useSelector(state => state.post)
    const { login } = useSelector(state => state.auth)

    const location = useLocation(); // 현재 URL 경로
    useEffect(() => {
        dispatch(trackPage(location.pathname));
    }, [])

    useEffect(() => {
        dispatch(postThunk({ page: posts.number, token: login.token }));
    }, [dispatch]);

    const onLike = (like) => {
        dispatch(likePostThunk({ like, token: login.token }))
    }

    return (
        <>
            <PostCom
                onLike={onLike}
                posts={posts.content}
                pageNumber={posts.number}
                totalPage={posts.totalPages}
                loading={loading} error={error} />
        </>
    )
}
export default PostCon;