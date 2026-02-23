import { useDispatch, useSelector } from "react-redux";
import PostCom from "../components/PostCom";
import { postThunk } from "../service/authThunk";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPage } from "../redux/pathSlice";

const PostCon = () => {
    const dispatch = useDispatch();
    const { posts, loading, error } = useSelector(state => state.post)

    const location = useLocation(); // 현재 URL 경로
    useEffect(()=>{
        dispatch(trackPage(location.pathname));
    }, [])

    useEffect(() => {
        dispatch(postThunk(posts.number));
    }, [dispatch, posts.number]);

    return (
        <>
            <PostCom posts={posts.content}
                pageNumber={posts.number}
                totalPage={posts.totalPages}
                loading={loading} error={error} />
        </>
    )
}
export default PostCon;