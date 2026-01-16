import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteOneThunk, listOneThunk, updateOneThunk } from "../service/authThunk";
import ListOneCom from "../components/ListOneCom";
import HeaderCom from "../components/common/HeaderCom";
import { changeInfo } from "../redux/memberDataSlice";

const ListOneCon = () => {
    const { user, loading, error } = useSelector(state => state.list)
    const params = useParams()
    const nav = useNavigate()
    const dispatch = useDispatch();

    useEffect(() => {
        const getList = async () => {
            await dispatch(listOneThunk(params.username))
        }
        getList()
        // console.log("params.username", params.username)
    }, [])


    const onDelete = async (e) => {
        // 정보가 같은지 확인 후 해당 username 정보 삭제
        // 삭제 후 List로 이동
        try {
            const res = await dispatch(deleteOneThunk(user))
            if (res.payload.success === 0) {
                e.preventDefault()

                alert(res.payload.message)
                nav("/list")
            }
        }
        catch (error) {
        }
    }
    const onChange = (e) => {
        const { name, value } = e.target
        // console.log(e.target)
        dispatch(changeInfo({ name, value }))
    }

    const onUpdate = async (e) => {
        // username은 고정한 상태에서 password, role 변경
        // 변경 후 List로 이동
        e.preventDefault()
        try {
            const res = await dispatch(updateOneThunk(user))
            if (res.payload.success === 0) {
                alert(res.payload.message)
                nav("/list")
            }
        } catch (error) {

        }

    }

    return (<>
        <HeaderCom />
        <ListOneCom user={user} loading={loading} error={error}
            onChange={onChange} onDelete={onDelete} onUpdate={onUpdate} />
    </>)
}
export default ListOneCon;