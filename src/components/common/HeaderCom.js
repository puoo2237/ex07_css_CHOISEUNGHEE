import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components"
import { onLogout } from "../../redux/authSlice";
import { useEffect } from "react";
const WrapBlock = styled.div`
    position: fixed;
    z-index: 1;
    background-color: white;
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
const StyleHeader = styled.header`
    // background-color: gold;
    margin: 0 auto;
    width: 1100px;
    height: 100px;
    align-items: center;
    display: flex;
`;
const StyleTitle = styled.h1`
   width: 200px;
    .link {
        color: black;

        &:hover {
            color: grey;
        }
    }
`;
const StyleNav = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 100%;
    ul {
        display: flex;
        li{
            margin-right: 30px;
        }
    }
    .menu li a {
        font-size: 20px;
        font-weight: bold;
    }
    a {
        color: black;
        &:hover{
            color: gray;
        }
    }
`;
const HeaderCom = () => {
    const dispatch = useDispatch()
    const { username, isLoggedIn, role, exp } = useSelector((state) => state.auth.login);

    const currentTime = Date.now();
    const timeout = exp * 1000 - currentTime;
    useEffect(() => {
        setTimeout(() => {
            alert("로그아웃 됨")
            dispatch(onLogout());
        }, timeout)
    }, [dispatch]);

    // useEffect(() => {
    // }, [isLoggedIn]);

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
                        {role === 'ROLE_ADMIN' && <><li><Link to="/list">ADMIN</Link></li></>}
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