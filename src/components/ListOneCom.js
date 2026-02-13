import StyleButton from "./common/StyleButton";
import StyleForm from "./common/StyleForm";
import StyleInput from "./common/StyleInput";
import { StyleBlock, ListBox } from "./common/StyleCom";
import { useSelector } from "react-redux";


const ListOneCom = ({ imageUrl, user, loading, error, onDelete, toUpdate }) => {
    const {role, username} = useSelector((state) => state.auth.login);

    return (<StyleBlock>
        <ListBox>
            <div className="logo-area">개인 정보</div>
            {loading ? <h2>Loading...</h2> :
                error ? <h2>{error}</h2> :
                    <StyleForm>
                        {imageUrl && <img src={imageUrl} name="file" alt="profile" width="100" height="100" />}
                        <div>username</div>
                        <StyleInput name="username" value={user && user.username} disabled></StyleInput>
                        {(role==="ROLE_ADMIN") && (username !== user.username) ? <></>: <><div>password</div><StyleInput name="password" value={user && user.password} disabled></StyleInput></>}
                        <div>role</div>
                        <StyleInput name="role" value={user && user.role} disabled></StyleInput>
                        <StyleButton width="50%" onClick={onDelete}>삭제</StyleButton><StyleButton width="50%" onClick={toUpdate}>수정</StyleButton>
                    </StyleForm>
            }

        </ListBox>
    </StyleBlock>)
}
export default ListOneCom;