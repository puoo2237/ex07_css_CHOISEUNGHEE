import { useNavigate } from "react-router-dom";
import RegCom from "../components/RegCom"
import { changeInput, resetInput } from "../redux/inputSlice";
import { useDispatch, useSelector } from "react-redux";
import { registerThunk } from "../service/authThunk";
import HeaderCom from "../components/common/HeaderCom";

const RegCon = () => {
    const dispatch = useDispatch();
    const nav = useNavigate();
    let num = 4;

    const { register } = useSelector(state => state.input)
    const { loading, error } = useSelector(state => state.auth)
    const onChange = (e) => {
        const { name, value } = e.target;
        dispatch(changeInput({ name, value, form: "register" }));
    }

    const onSubmit = async (e) => {
        // 회원 여부 체크 후 회원 가입
        // 모든 값들이 기입되었는지 확인
        // 회원 가입 후 로그인 화면으로 이동
        e.preventDefault();

        try {

            const res = await dispatch(registerThunk({ ...register, id: num++ }))
            const resRegThunk = res.payload
            if (resRegThunk.success === 0) {
                nav("/login") // login으로 이동
            } else {
                alert(resRegThunk.message)
                dispatch(resetInput({ form: "register" })) // 초기화
            }
        } catch (error) {

        }
    }

    return (<>
        <HeaderCom />
        <RegCom reg={register} onChange={onChange} onSubmit={onSubmit} loading={loading} error={error} />
    </>)
}
export default RegCon;