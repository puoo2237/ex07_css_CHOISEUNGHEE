import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { deleteOneThunk, listOneThunk } from "../service/authThunk";
import ListOneCom from "../components/ListOneCom";
import { service_path } from "../service/service_ip_port";
import { trackPage } from "../redux/path/pathSlice";

const ListOneCon = () => {
    const { login } = useSelector(state => state.auth)
    const { user, loading, error } = useSelector(state => state.list)
    const params = useParams()
    const dispatch = useDispatch();
    const [imageUrl, setImageUrl] = useState(null);
    const nav = useNavigate()
    const location = useLocation(); // 현재 URL 경로
    useEffect(()=>{
        dispatch(trackPage(location.pathname));
    }, [])

    const path = service_path;
    useEffect(() => {
        const getList = async () => {
            const wrapRes = await dispatch(listOneThunk({ id: params.id, token: login.token })).unwrap();
            if (wrapRes.user?.fileName) {
                const res = await fetch(`${path}/members/${wrapRes.user.fileName}/image`)
                setImageUrl(URL.createObjectURL(await res.blob()))
            }
        }
        getList()
    }, [dispatch, params])


    const onDelete = async (e) => {
        try {
            e.preventDefault()
            const res = await dispatch(deleteOneThunk({ user, token: login.token }))
            if (res.payload.success === 0) {

                // alert(res.payload.message)
                nav("/list")
            }
        }
        catch (error) {
        }
    }

    const toUpdate = async (e) => {
        nav(`/list/update/${params.id}`)
    }

    return (<>
        <ListOneCom imageUrl={imageUrl} user={user}
            loading={loading} error={error}
            onDelete={onDelete} toUpdate={toUpdate} />
    </>)
}
export default ListOneCon;