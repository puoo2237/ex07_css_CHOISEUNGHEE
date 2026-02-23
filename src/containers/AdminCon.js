import { useDispatch, useSelector } from "react-redux";
import { listThunk } from "../service/authThunk";
import { useEffect } from "react";
import AdminCom from "../components/AdminCom";
import { useLocation } from "react-router-dom";
import { trackPage } from "../redux/pathSlice";

const AdminCon = () => {
    const dispatch = useDispatch();
    const location = useLocation(); // 현재 URL 경로
    useEffect(()=>{
        dispatch(trackPage(location.pathname));
    }, [])

    const {data, loading, error } = useSelector(state => state.list)
    
    useEffect(() => {
        dispatch(listThunk(data.number))
    }, [dispatch, data.number]);

    return (<>
        <AdminCom pageNumber={data.number} 
        // isFirstPage={data.first} 
        totalPage={data.totalPages} 
        data={data.content} 
        loading={loading} error={error} />
    </>)
}
export default AdminCon;