import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteOneThunk, listOneThunk, updateOneThunk } from "../service/authThunk";
import ListOneCom from "../components/ListOneCom";
import HeaderCom from "../components/common/HeaderCom";
import { changeInfo } from "../redux/memberDataSlice";
import {service_path} from "../service/service_ip_port";
import { type } from "@testing-library/user-event/dist/type";

const ListOneCon = () => {
    const { user, loading, error } = useSelector(state => state.list)
    const params = useParams()
    const nav = useNavigate()
    const dispatch = useDispatch();
    const [imageUrl, setImageUrl] = useState(null);


    const path = service_path;
    useEffect(() => {
        const getList = async () => {
             const wrapRes = await dispatch(listOneThunk(params.id)).unwrap();
            if(wrapRes.user.fileName){
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
            const res = await dispatch(deleteOneThunk(user))
            if (res.payload.success === 0) {

                // alert(res.payload.message)
                nav("/list")
            }
        }
        catch (error) {
        }
    }
    const onChange = (e) => {
        const { name, value, type, files } = e.target
        // console.log(e.target)
        dispatch(changeInfo({ name, value, type, files, form: "user" }))
    }

    const onUpdate = async (e) => {
        // username은 고정한 상태에서 password, role 변경
        // 변경 후 List로 이동
        e.preventDefault()
        try {
            console.log("user to update:", user)
            const res = await dispatch(updateOneThunk(user))
            if (res.payload.success === 0) {
                // alert(res.payload.message)
                nav("/list")
            }
        } catch (error) {

        }

    }

    return (<>
        <HeaderCom />
        <ListOneCom imageUrl={imageUrl} user={user} loading={loading} error={error}
            onChange={onChange} onDelete={onDelete} onUpdate={onUpdate} />
    </>)
}
export default ListOneCon;