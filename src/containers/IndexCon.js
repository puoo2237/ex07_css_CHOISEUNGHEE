import { useLocation } from "react-router-dom";
import IndexCom from "../components/IndexCom"
import { trackPage } from "../redux/pathSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const IndexCon = () => {
    const dispatch = useDispatch();
    const location = useLocation(); // 현재 URL 경로
    useEffect(()=>{
        dispatch(trackPage(location.pathname));
    }, [])


    return (<>
        <IndexCom />
    </>)
}
export default IndexCon
