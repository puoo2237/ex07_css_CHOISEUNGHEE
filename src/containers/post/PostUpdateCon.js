import { useDispatch, useSelector } from "react-redux";
import PostUpdateCom from "../../components/post/PostUpdateCom";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { postOneThunk, updatePostThunk } from "../../service/post/postThunk";
import { useEffect } from "react";
import { changeInfo } from "../../redux/post/postSlice";
import { trackPage } from "../../redux/path/pathSlice";

const PostUpdateCon = () => {
    const dispatch = useDispatch();
    const nav = useNavigate();
    const params = useParams()
    const { post } = useSelector(state => state.post)
    const { login } = useSelector(state => state.auth)
    const location = useLocation(); // 현재 URL 경로
    useEffect(()=>{
        dispatch(trackPage(location.pathname));
    }, [])

    useEffect(() => {
        dispatch(postOneThunk(params.id));
    }, [params.id])

    const onChange = (e) => {
        const { name, value } = e.target
        dispatch(changeInfo({ name, value, form: "post" }))
    }
    const onUpdate = async (e) => {
        e.preventDefault()

        try {
            console.log("post to update:", post)
            const res = await dispatch(updatePostThunk({ id:params.id, post, token: login.token }))
            if (res.payload.success === 0) {
                nav("/post")
            }
        } catch (error) {
        }

    }

    return (
        <>
            <PostUpdateCom post={post} onChange={onChange} onUpdate={onUpdate}/>
        </>
    )
}
export default PostUpdateCon;