import { Link } from "react-router-dom";
import { onClick } from "../redux/memberDataSlice";
import { useDispatch } from "react-redux";
import { StyleBlock, DivPage, ListBox, SpanPage, Table } from "./common/StyleCom";

const AdminCom = ({
    totalPage,
    pageNumber,
    data, loading, error }) => {
    // 로그인 상태면 상세 페이지(/one)로 이동
    // 로그인 상태가 아니면 로그인 페이지(/login)로 이동
    const pageNumbers = [];
    const dispatch = useDispatch();

    for (let i = 0; i < totalPage; i++) {
        pageNumbers.push(<SpanPage onClick={() => {
            dispatch(onClick({ value: i }));
        }} key={i} >{i + 1}&nbsp;</SpanPage>);
    }
    return (<StyleBlock>
        <ListBox>
            <div className="logo-area">회원목록</div>
            {loading ? <h2>Loading...</h2> :
                error ? <h2>{error}</h2> :
                    <Table>
                        <thead>
                            <tr>
                                <th>회원번호</th>
                                <th>회원 아이디</th>
                                <th>ROLE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.length > 0 ? data.map(d => (
                                <tr key={d.id}>
                                    <td><Link to={`/one/${d.id}`}>{d.id}</Link></td>
                                    <td>{d.username}</td>
                                    <td>{d.role}</td>
                                </tr>
                            )) : (
                                <tr><td colSpan={4}>데이터가 없습니다.</td></tr>
                            )}
                        </tbody>
                    </Table>}
            <DivPage>
                {Object.values(pageNumbers).length > 0 && pageNumbers} ({pageNumber + 1} / {totalPage})</DivPage>
        </ListBox>
    </StyleBlock >)
}
export default AdminCom;