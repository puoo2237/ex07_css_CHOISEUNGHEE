import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { onLogout } from "../../redux/authSlice";
import { useEffect } from "react";
import "../css/HeaderCom.css";
import { clearHistory } from "../../redux/path/pathSlice";

const HeaderCom = () => {
    const dispatch = useDispatch();
    const { username, isLoggedIn, role, exp } = useSelector((state) => state.auth.login);
    const nav = useNavigate();

    useEffect(() => {
        const currentTime = Date.now();
        const timeout = exp * 1000 - currentTime;
        if (timeout <= 0 || !exp) return;

        const timer = setTimeout(() => {
            alert("로그아웃 됨");
            dispatch(onLogout());
            nav("/login");
        }, timeout);

        return () => clearTimeout(timer);
    }, [isLoggedIn]);

    return (
        <>
            <header className="header-wrapper">
                <div className="header-container">
                    <div className="header-title">
                        <Link to="/" className="link">탱이냥</Link>
                    </div>

                    <nav className="header-nav">
                        <ul className="menu">
                            <li><Link to="/">사료</Link></li>
                            <li><Link to="/">간식</Link></li>
                            <li><Link to="/post">커뮤니티</Link></li>
                            <li><Link to="/list">회원 목록</Link></li>
                            {role === 'ROLE_ADMIN' && <li><Link to="/admin">ADMIN</Link></li>}
                        </ul>

                        {isLoggedIn ? (
                            <ul className="user-nav">
                                <li><Link onClick={() => {
                                    dispatch(onLogout())
                                    dispatch(clearHistory())
                                }} to="/">로그아웃</Link></li>
                                <li>{username}님</li>
                            </ul>
                        ) : (
                            <ul className="user-nav">
                                <li><Link to="/login">로그인</Link></li>
                                <li><Link to="/register">회원가입</Link></li>
                            </ul>
                        )}
                    </nav>
                </div>
            </header>

            <main className="main-content">
                <Outlet />
            </main>
        </>
    );
};

export default HeaderCom;