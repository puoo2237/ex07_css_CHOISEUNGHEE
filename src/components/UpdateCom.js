import StyleButton from "./common/StyleButton";
import StyleForm from "./common/StyleForm";
import StyleInput from "./common/StyleInput";
import { StyleBlock, ListBox } from "./common/StyleCom";
import { useSelector } from "react-redux";

const UpdateCom = ({ imageUrl, user, onChange, onUpdate, loading, error }) => {
    const {role} = useSelector((state) => state.auth.login);

    return (<StyleBlock>
        <ListBox>
            <div className="logo-area">회원 정보 수정</div>
            {loading ? <h2>Loading...</h2> :
                error ? <h2>{error}</h2> :
                    <StyleForm onSubmit={onUpdate}>
                        {imageUrl && <img src={imageUrl} name="file" alt="profile" width="100" height="100" />}
                        <input type="file" name="file" onChange={onChange} />
                        <StyleInput type="text" placeholder="username" name="username" value={user.username} onChange={onChange} disabled />
                        {role==="ROLE_ADMIN"
                            ? <StyleInput type="text" placeholder="role" name="role" value={user.role} onChange={onChange} required/>
                            : <><div>password</div><StyleInput name="password" value={user && user.password} disabled></StyleInput></>}
                        
                        <StyleButton width="100%" background={["178,235,244", 0.5]}>수정</StyleButton>
                    </StyleForm>}

        </ListBox>
    </StyleBlock>)
}
export default UpdateCom;