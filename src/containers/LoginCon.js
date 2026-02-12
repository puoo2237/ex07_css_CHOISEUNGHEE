import HeaderCom from "../components/common/HeaderCom"
import LoginCom from "../components/LoginCom"
import { useDispatch, useSelector } from "react-redux"
import { changeInput, resetInput } from "../redux/inputSlice";
import { loginThunk } from "../service/authThunk";
import { useNavigate } from "react-router-dom";
import { onLogin } from "../redux/authSlice";

const LoginCon = () => {
    const dispatch = useDispatch();
    const nav = useNavigate();
    const { login } = useSelector(state => state.input)
    const { loading, error } = useSelector(state => state.auth)

    const onChange = (e) => {
        const { name, value } = e.target;
        dispatch(changeInput({ name, value, form: "login" }));
    }

    const onSubmit = async (e) => {
        // 로그인이 완료되면 메뉴 상태 변경
        // LOGIN 버튼 누르면 정보 출력
        // home으로 이동
        e.preventDefault();
        try {
            const res = await dispatch(loginThunk(login))
            const resLoginThunk = res.payload;
            if (resLoginThunk.success !== null) {
                const token = resLoginThunk.success.token;
                dispatch(onLogin({ username: login.username, token }))
                console.log("username: ", login.username)
                console.log("password: ", login.password)
                console.log("token: ", token)
                nav("/")

            } else {
                alert(resLoginThunk.message)
            }
            dispatch(resetInput({ form: "login" }))
        } catch (error) {

        }


    }

    return (<>
        <HeaderCom />
        <LoginCom login={login} onSubmit={onSubmit} onChange={onChange} loading={loading} error={error} />
    </>)
}
export default LoginCon
