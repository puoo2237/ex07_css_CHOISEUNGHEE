import StyleButton from "./common/StyleButton";
import StyleForm from "./common/StyleForm";
import StyleInput from "./common/StyleInput";
import { StyleBlock, ListBox } from "./common/StyleCom";

const RegCom = ({ reg, onChange, onSubmit, loading, error }) => {
    return (<StyleBlock>
        <ListBox>
            <div className="logo-area">회원가입</div>
            {loading ? <h2>Register...</h2> :
                error ? <h2>{error}</h2> : <StyleForm onSubmit={onSubmit}>
                    <StyleInput type="text" placeholder="username" name="username" value={reg.username} onChange={onChange} required />
                    <StyleInput type="text" placeholder="password" name="password" value={reg.password} onChange={onChange} required />
                    <StyleInput type="text" placeholder="role" name="role" value={reg.role} onChange={onChange} />
                    <StyleInput type="file" name="file" onChange={onChange} />
                    <StyleButton width="100%" background={["178,235,244", 0.5]}>REGISTER</StyleButton>
                </StyleForm>}

        </ListBox>
    </StyleBlock>)
}
export default RegCom;