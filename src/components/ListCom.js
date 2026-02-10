import styled from "styled-components";
import StyleButton from "./common/StyleButton";
import StyleForm from "./common/StyleForm";
import StyleInput from "./common/StyleInput";
import { Link } from "react-router-dom";
import { onClick } from "../redux/memberDataSlice";
import { useDispatch } from "react-redux";
import { listThunk } from "../service/authThunk";

const AuthBlock = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.1);
`;

const ListBox = styled.div`
    position: absolute;
    width: 400px;
    min-height: 220px;
    top: 150px;
    left: calc(50% - 180px);
    background-color: white;
    padding-top: 20px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    .logo-area{
        color: chocolate;
        text-align: center;
        font-weight: bold;
        letter-spacing: 5px;
        font-size: 20px;
        border-bottom: 1px dotted olive;
        padding-bottom: 5px;
        width: 50%;
        margin: 0 auto;
        a {
            color: darkcyan;

            &:hover {
                color: cyan;
            }
        }
    }
`;

const Table = styled.table`
    width: 100%;
    font-size: 15px;
    border-collapse: collapse;
    text-align: center;
    th, td {
        border-top: 1px solid black;
        border-bottom: 1px solid black;
        padding: 8px;
        }
        
    td{
    font-size: 13px;
    }
`;

const DivPage = styled.div`
    text-align: center;
    margin-top: 20px;
`;
const SpanPage = styled.div`
    width: 30px;
    display: inline-block;
    cursor:pointer;
    color ${(props)=>(props.$active ? "red":"black")};
    &:hover{font-weight:bold;}`

const ListCom = ({
    totalPage,
    pageNumber,
    data, loading, error }) => {
    // 로그인 상태면 상세 페이지(/one)로 이동
    // 로그인 상태가 아니면 로그인 페이지(/login)로 이동
    const sessionNow = sessionStorage.getItem("auth")
    const pageNumbers = [];
    const dispatch = useDispatch();

    for (let i = 0; i < totalPage; i++) {
        pageNumbers.push(<SpanPage onClick={() => {
                        dispatch(onClick({ value: i }));
                    }} key={i} >{i + 1}&nbsp;</SpanPage>);
    }
    return (<AuthBlock>
        <ListBox>
            <div className="logo-area">회원목록</div>
            {loading ? <h2>Register...</h2> :
                error ? <h2>{error}</h2> :
                    <Table>
                        <thead>
                            <tr>
                                <th>아이디</th>
                                <th>이용자</th>
                                <th>비밀번호</th>
                                <th>ROLE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.length > 0 ? data.map(d => (
                                <tr key={d.id}>
                                    <td><Link to={sessionNow ? `/one/${d.id}` : "/login"}>{d.id}</Link></td>
                                    <td>{d.username}</td>
                                    <td>{d.password}</td>
                                    <td>{d.role}</td>
                                </tr>
                            )) : (
                                <tr><td colSpan={4}>데이터가 없습니다.</td></tr>
                            )}
                        </tbody>
                    </Table>}
            <DivPage>
                {Object.values(pageNumbers).length > 0 && pageNumbers} ({pageNumber + 1 } / {totalPage})</DivPage>
        </ListBox>
    </AuthBlock >)
}
export default ListCom;