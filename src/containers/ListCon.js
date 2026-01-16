import { useDispatch, useSelector } from "react-redux";
import ListCom from "../components/ListCom";
import { listThunk } from "../service/authThunk";
import { useEffect } from "react";
import HeaderCom from "../components/common/HeaderCom";

const ListCon = () => {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector(state => state.list)
    
    useEffect(() => {
        dispatch(listThunk())
    }, [data])

    return (<>
        <HeaderCom/>
        <ListCom data={data} loading={loading} error={error} />
    </>)
}
export default ListCon;