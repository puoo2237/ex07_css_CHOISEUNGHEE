import { Link } from "react-router-dom";
import StyleInput from "./common/StyleInput";
import StyleForm from "./common/StyleForm";
import StyleButton from "./common/StyleButton";
import { StyleBlock, ListBox } from "./common/StyleCom";

const LoginCom = ({ login, onSubmit, onChange, loading, error }) => {
    return (<>
        <StyleBlock> {
            loading ?
                <h2>Login...</h2> :
                error ?
                    <h2>{error}</h2> :
                    <ListBox LoginBox >
                        <div className="logo-area">
                            <Link to='/'>탱이냥 이동</Link>
                        </div>
                        <StyleForm onSubmit={onSubmit}>
                            <StyleInput onChange={onChange} name="username" value={login.username} placeholder="input username" />
                            <StyleInput onChange={onChange} name="password" value={login.password} placeholder="input password" />
                            <StyleButton width="100%" background={["178,235,244", 0.5]}>로그인</StyleButton>
                        </StyleForm>
                    </ListBox>
                    }
        </StyleBlock >
    </>)
}
export default LoginCom
