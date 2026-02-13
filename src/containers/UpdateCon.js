import { useDispatch, useSelector } from "react-redux";
import UpdateCom from "../components/UpdateCom";
import { useNavigate, useParams } from "react-router-dom";
import { listOneThunk, updateOneThunk } from "../service/authThunk";
import HeaderCom from "../components/common/HeaderCom";
import { changeInfo } from "../redux/memberDataSlice";
import { useEffect, useState } from "react";
import { service_path } from "../service/service_ip_port";

const UpdateCon = () => {
    const dispatch = useDispatch();
    const nav = useNavigate();
    const params = useParams()
    const { user, loading, error } = useSelector(state => state.list)
    const { login } = useSelector(state => state.auth)
    const [imageUrl, setImageUrl] = useState(null);

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
    }, [params.id])

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
            const res = await dispatch(updateOneThunk({ user, token: login.token }))
            if (res.payload.success === 0) {
                // alert(res.payload.message)
                nav("/list")
            }
        } catch (error) {

        }

    }
    return (
        <>
            <HeaderCom />
            <UpdateCom
                imageUrl={imageUrl}
                user={user}
                onChange={onChange}
                onUpdate={onUpdate}
                loading={loading} error={error}
            />
        </>
    );
}
export default UpdateCon;
