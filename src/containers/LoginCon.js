import LoginCom from "../components/LoginCom"
import { useDispatch, useSelector } from "react-redux"
import { changeInput, resetInput } from "../redux/inputSlice";
import { loginThunk } from "../service/authThunk";
import { useLocation, useNavigate } from "react-router-dom";
import { onLogin } from "../redux/authSlice";
import { useEffect } from "react";
import { trackPage } from "../redux/path/pathSlice";

const LoginCon = () => {
    const dispatch = useDispatch();
    const nav = useNavigate();
    const { login } = useSelector(state => state.input)
    const { loading, error } = useSelector(state => state.auth)
    const location = useLocation(); // 현재 URL 경로
    useEffect(()=>{
        dispatch(trackPage(location.pathname));
    }, [])

    const onChange = (e) => {
        const { name, value } = e.target;
        dispatch(changeInput({ name, value, form: "login" }));
    }

    const onSubmit = async (e) => {
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
        <LoginCom login={login} onSubmit={onSubmit} onChange={onChange} loading={loading} error={error} />
    </>)
}
export default LoginCon
