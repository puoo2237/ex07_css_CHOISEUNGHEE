import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { onLogout } from "../../redux/authSlice";
import { useEffect } from "react";
import { StyleHeader, StyleNav, StyleTitle, WrapBlock } from "./StyleCom";


const HeaderCom = () => {
    const dispatch = useDispatch()
    const { username, isLoggedIn, role, exp } = useSelector((state) => state.auth.login);
    const nav = useNavigate();

    useEffect(() => {
        const currentTime = Date.now();
        const timeout = exp * 1000 - currentTime;
        if (timeout <= 0 || exp == "") return;

    const timer = setTimeout(() => {
        console.log(exp * 1000, currentTime, timeout)
        alert("로그아웃 됨")
        dispatch(onLogout());
        nav("/login");
    }, timeout)
    return () => clearTimeout(timer);

}, [isLoggedIn]);

return (<>
    <WrapBlock>
        <StyleHeader>
            <StyleTitle>
                <Link to='/' className="link">탱이냥</Link>
            </StyleTitle>
            <StyleNav>
                <ul className="menu">
                    <li><Link to="/">사료</Link></li>
                    <li><Link to="/">간식</Link></li>
                    <li><Link to="/list">LIST</Link></li>
                    {role === 'ROLE_ADMIN' && <><li><Link to="/admin">ADMIN</Link></li></>}
                </ul>

                {isLoggedIn ?
                    <ul>
                        <li><Link onClick={e => dispatch(onLogout())} to="/">로그아웃</Link></li>
                        <li>{username}님</li>
                    </ul>
                    :
                    <ul>
                        <li><Link to="/login">로그인</Link></li>
                        <li><Link to="/register">회원가입</Link></li>
                    </ul>
                }
            </StyleNav>
        </StyleHeader>
    </WrapBlock >
</>)
}
export default HeaderCom