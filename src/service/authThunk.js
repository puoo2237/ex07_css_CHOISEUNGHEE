import { createAsyncThunk } from "@reduxjs/toolkit"

let data_set = [
    { username: "aaa", password: "aaa", role: "USER" },
    { username: "bbb", password: "bbb", role: "USER" },
    { username: "ccc", password: "ccc", role: "USER" },
]

export const loginThunk = createAsyncThunk(
    "loginThunk",
    async (user) => {
        const res = data_set.filter(d => user.username === d.username)[0]
        if (res) {
            /// username이 있으면
            return user.password === res.password ?
                { success: 0, message: "로그인에 성공하였습니다." } :
                { success: 1, message: "비밀번호가 틀렸습니다." }
        } else {
            // username이 없음
            return { success: 1, message: "username이 없습니다." }
        }
    }
)

export const registerThunk = createAsyncThunk(
    "registerThunk",
    async (user) => {
        const res = data_set.filter(d => user.username === d.username)[0]
        if (res) {
            // username이 있으면
            return { success: 1, message: "이미 가입된 회원입니다." }
        } else {
            data_set = data_set.concat(user)
            return { success: 0, message: "회원가입이 완료되었습니다." }
        }
    }
)

export const listThunk = createAsyncThunk(
    "listThunk",
    async () => {
        if (data_set) {
            // data_set이 존재한다면
            return { data: data_set, message: "회원 목록을 출력합니다." }
        } else {
            return { data: null, message: "회원 목록이 없습니다." }
        }
    }
)

export const listOneThunk = createAsyncThunk(
    "listOneThunk",
    async (username) => {
        const res = data_set.filter(d => d.username === username)[0]
        if (res) {
            //  회원이 존재한다면
            return { user: res, message: `${username}님을 출력합니다.` }
        } else {
            return { user: null, message: "회원 목록이 없습니다." }
        }
    }
)

export const deleteOneThunk = createAsyncThunk(
    "deleteOneThunk",
    async (user) => {
        try {
            data_set = data_set.filter(d => d !== user)
            console.log(data_set)
            return { success: 0, message: `${user.username}님을 삭제하였습니다.` }
        } catch (error) {
            return { success: 1, message: error }
        }
    }
)

export const updateOneThunk = createAsyncThunk(
    "updateOneThunk",
    async (user) => {
        try {
            data_set = data_set.map(d => d.username === user.username ? user : d)
            return { success: 0, message: `${user.username}님의 개인정보를 수정하였습니다.` }
        } catch (error) {
            return { success: 1, message: error }
        }
    }
)