import { useDispatch, useSelector } from "react-redux";
import ListCom from "../components/ListCom";
import { listThunk } from "../service/authThunk";
import { useEffect } from "react";
import { trackPage } from "../redux/path/pathSlice";
import { useLocation } from "react-router-dom";

const ListCon = () => {
    const dispatch = useDispatch();
    const {data, loading, error } = useSelector(state => state.list)
    const location = useLocation(); // 현재 URL 경로
    useEffect(()=>{
        dispatch(trackPage(location.pathname));
    }, [])

    useEffect(() => {
        dispatch(listThunk(data.number))
    }, [dispatch, data.number]);

    return (<>
        <ListCom 
        data={data.content} 
        pageNumber={data.number} 
        totalPage={data.totalPages} 
        loading={loading} error={error} 
        />
    </>)
}
export default ListCon;