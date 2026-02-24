import { useDispatch, useSelector } from "react-redux";
import PostAddCom from "../../components/post/PostAddCom";
import { useLocation, useNavigate } from "react-router-dom";
import { changeInput, resetInput } from "../../redux/inputSlice";
import { uploadPostThunk } from "../../service/post/postThunk";
import { useEffect } from "react";
import { trackPage } from "../../redux/path/pathSlice";

const PostAddCon = () => {
    const dispatch = useDispatch();
    const nav = useNavigate();
    const { post } = useSelector(state => state.input)
    const { login } = useSelector(state => state.auth)
    const location = useLocation(); // 현재 URL 경로
    useEffect(() => {
        dispatch(trackPage(location.pathname));
    }, [])

    const onChange = (e) => {
        const { name, value } = e.target;
        dispatch(changeInput({ name, value, form: "post" }));
    }

    const onClick = async () => {
        const res = await dispatch(uploadPostThunk({ post, token: login.token }))
        const resUploadPostThunk = res.payload
        if (resUploadPostThunk.success === 0) {
            nav("/post") // post로 이동
        } else {
            alert(resUploadPostThunk.message)
        }
        dispatch(resetInput({ form: "post" }))
    }



    return (
        <>
            <PostAddCom post={post} onChange={onChange} onClick={onClick} />
        </>
    )
}
export default PostAddCon;