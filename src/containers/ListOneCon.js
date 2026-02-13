import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteOneThunk, listOneThunk } from "../service/authThunk";
import ListOneCom from "../components/ListOneCom";
import HeaderCom from "../components/common/HeaderCom";
import { service_path } from "../service/service_ip_port";

const ListOneCon = () => {
    const { login } = useSelector(state => state.auth)
    const { user, loading, error } = useSelector(state => state.list)
    const params = useParams()
    const nav = useNavigate()
    const dispatch = useDispatch();
    const [imageUrl, setImageUrl] = useState(null);


    const path = service_path;
    useEffect(() => {
        const getList = async () => {
            const wrapRes = await dispatch(listOneThunk({id: params.id, token: login.token})).unwrap();
            if (wrapRes.user?.fileName) {
                const res = await fetch(`${path}/members/${wrapRes.user.fileName}/image`)
                setImageUrl(URL.createObjectURL(await res.blob()))
            }
        }
        getList()
    }, [dispatch, params])


    const onDelete = async (e) => {
        // 정보가 같은지 확인 후 해당 username 정보 삭제
        // 삭제 후 List로 이동
        try {
            e.preventDefault()
            const res = await dispatch(deleteOneThunk({user, token: login.token}))
            if (res.payload.success === 0) {

                // alert(res.payload.message)
                nav("/list")
            }
        }
        catch (error) {
        }
    }

    const toUpdate = async (e) => {
        // 회원 여부 체크 후 회원 가입
        // 모든 값들이 기입되었는지 확인
        // 회원 가입 후 로그인 화면으로 이동
        nav(`/update/${params.id}`)
    }

    return (<>
        <HeaderCom />
        <ListOneCom imageUrl={imageUrl} user={user} 
            loading={loading} error={error}
             onDelete={onDelete} toUpdate={toUpdate}/>
    </>)
}
export default ListOneCon;