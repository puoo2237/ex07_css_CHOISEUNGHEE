import styled from "styled-components";
import StyleButton from "./common/StyleButton";
import StyleForm from "./common/StyleForm";
import StyleInput from "./common/StyleInput";

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
    min-height: 300px;
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
const ListOneCom = ({ user, loading, error, onDelete, onChange, onUpdate }) => {
    // console.log("ListOneCom user", user)
    return (<AuthBlock>
        <ListBox>
            <div className="logo-area">개인 정보</div>
            {loading ? <h2>Loading...</h2> :
                error ? <h2>{error}</h2> :
                    <StyleForm>
                        <div>username</div>
                        <StyleInput name="username" value={user && user.username} onChange={onChange} disabled></StyleInput>
                        <div>password</div>
                        <StyleInput name="password" value={user && user.password} onChange={onChange}></StyleInput>
                        <div>role</div>
                        <StyleInput name="role" value={user && user.role} onChange={onChange}></StyleInput>
                        <StyleButton width="50%" onClick={onDelete}>삭제</StyleButton>
                        <StyleButton width="50%" onClick={onUpdate}>수정</StyleButton>
                    </StyleForm>
            }

        </ListBox>
    </AuthBlock>)
}
export default ListOneCom;