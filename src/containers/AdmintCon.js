import { useDispatch, useSelector } from "react-redux";
import { listThunk } from "../service/authThunk";
import { useEffect } from "react";
import HeaderCom from "../components/common/HeaderCom";
import { onClick } from "../redux/memberDataSlice";
import AdminCom from "../components/AdminCom";

const AdminCon = () => {
    const dispatch = useDispatch();
    const {data, loading, error } = useSelector(state => state.list)
    
    useEffect(() => {
        dispatch(listThunk(data.number))
    }, [dispatch, data.number]);

    return (<>
        <HeaderCom/>
        <AdminCom pageNumber={data.number} 
        // isFirstPage={data.first} 
        totalPage={data.totalPages} 
        data={data.content} 
        loading={loading} error={error} />
    </>)
}
export default AdminCon;