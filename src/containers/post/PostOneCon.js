import { useDispatch, useSelector } from "react-redux"
import PostOneCom from "../../components/post/PostOneCom"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { service_path } from "../../service/service_ip_port"
import { useEffect } from "react"
import { deletePostThunk, likePostThunk, postOneThunk } from "../../service/post/postThunk"
import { trackPage } from "../../redux/path/pathSlice"

const PostOneCon = () => {
    const { login } = useSelector(state => state.auth)
    const { post, loading, error } = useSelector(state => state.post)
    const params = useParams()
    const nav = useNavigate()
    const dispatch = useDispatch();
    const location = useLocation(); // 현재 URL 경로
    useEffect(()=>{
        dispatch(trackPage(location.pathname));
    }, [])

    const path = service_path;
    useEffect(() => {
        dispatch(postOneThunk({id: params.id, token: login.token}));
    }, [params.id])

    const onDelete = async (e) => {
        try {
            e.preventDefault()
            const res = await dispatch(deletePostThunk({ id: params.id, token: login.token }))
            if (res.payload.success === 0) {

                nav("/post")
            }
        }
        catch (error) {
        }
    }

    const toUpdate = async (e) => {
        nav(`/post/update/${params.id}`)
    }

    return (<>
        <PostOneCom post={post} loading={loading} error={error} onDelete={onDelete} toUpdate={toUpdate} />
    </>
    )
}
export default PostOneCon;