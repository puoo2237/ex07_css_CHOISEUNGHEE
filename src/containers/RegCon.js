import { useLocation, useNavigate } from "react-router-dom";
import RegCom from "../components/RegCom"
import { changeInput, resetInput } from "../redux/inputSlice";
import { useDispatch, useSelector } from "react-redux";
import { registerThunk } from "../service/authThunk";
import { useEffect } from "react";
import { trackPage } from "../redux/path/pathSlice";

const RegCon = () => {
    const dispatch = useDispatch();
    const nav = useNavigate();
    const location = useLocation(); // 현재 URL 경로
    useEffect(() => {
        dispatch(trackPage(location.pathname));
    }, [])

    const { register } = useSelector(state => state.input)
    const { loading, error } = useSelector(state => state.auth)
    const onChange = (e) => {
        const { name, value, type, files } = e.target;
        dispatch(changeInput({ name, value, form: "register", type, files }));
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        try {

            const res = await dispatch(registerThunk(register))
            const resRegThunk = res.payload
            if (resRegThunk.success === 0) {
                nav("/login") // login으로 이동
            } else {
                alert(resRegThunk.message)
            }
            dispatch(resetInput({ form: "register" })) // 초기화
        } catch (error) {

        }
    }

    return (<>
        <RegCom reg={register} onChange={onChange} onSubmit={onSubmit} loading={loading} error={error} />
    </>)
}
export default RegCon;