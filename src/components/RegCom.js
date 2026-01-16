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

const RegBox = styled.div`
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
const RegCom = ({ reg, onChange, onSubmit, loading, error }) => {
    return (<AuthBlock>
        <RegBox>
            <div className="logo-area">회원가입</div>
            {loading ? <h2>Register...</h2> :
                error ? <h2>{error}</h2> : <StyleForm onSubmit={onSubmit}>
                    <StyleInput type="text" placeholder="username" name="username" value={reg.username} onChange={onChange} required />
                    <StyleInput type="text" placeholder="password" name="password" value={reg.password} onChange={onChange} required />
                    <StyleInput type="text" placeholder="role" name="role" value={reg.role} onChange={onChange} required />
                    <StyleButton width="100%" background={["178,235,244", 0.5]}>REGISTER</StyleButton>
                </StyleForm>}

        </RegBox>
    </AuthBlock>)
}
export default RegCom;