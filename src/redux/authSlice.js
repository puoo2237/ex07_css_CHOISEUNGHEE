import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, registerThunk } from "../service/authThunk";
import { commonLoadingHandler } from "./commonLoadingHandlers";

const authSession = sessionStorage.getItem("auth")
const initialState = {
    login: authSession ?
        JSON.parse(sessionStorage.getItem("auth")) :
        { username: "", isLoggedIn: false, token: "", role: "", exp: "" },
    register: { username: "", password: "", role: "", file: "" },
    loading: false,
    error: null,
    result: 1
}
const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        onLogin(state, action) {
            state.login = {
                username: action.payload.username,
                isLoggedIn: true,
                token: action.payload.token,
                role: JSON.parse(atob(action.payload.token.split(".")[1]))['role'],
                exp: JSON.parse(atob(action.payload.token.split(".")[1]))['exp']
            }
            // console.log(state.login)
            sessionStorage.setItem("auth", JSON.stringify(state.login))


        },
        onLogout(state) {
            console.log("로그아웃을 하였습니다.")
            sessionStorage.removeItem("auth");
            // state.login = { username: "", isLoggedIn: false,  token: "", role: "", exp: ""};
            return initialState
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(loginThunk.fulfilled, (state) => {
                state['loading'] = false;
                state['error'] = null;
                state['result'] = 0; // 성공
            })
            .addCase(registerThunk.fulfilled, (state) => {
                state['loading'] = false;
                state['error'] = null;
                state['result'] = 0; // 성공
            })
        commonLoadingHandler(builder, registerThunk)
        commonLoadingHandler(builder, loginThunk)

    }
})

export default authSlice;
export const { onLogin, onLogout } = authSlice.actions;