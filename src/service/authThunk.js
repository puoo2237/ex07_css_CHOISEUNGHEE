import { createAsyncThunk } from "@reduxjs/toolkit"
import { service_path } from "./service_ip_port"

// let data_set = [
//     { username: "aaa", password: "aaa", role: "USER" },
//     { username: "bbb", password: "bbb", role: "USER" },
//     { username: "ccc", password: "ccc", role: "USER" },
// ]

const path = service_path + "/members";
export const loginThunk = createAsyncThunk(
    "loginThunk",
    async (user) => {
        const loginRes = await fetch(path + "/login", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        })
        if (loginRes.ok) {
            // const res = await loginRes.json();
            return { success: 0, message: "로그인 성공" };
        } else {
            const error = await loginRes.text();
            return { success: 1, message: error };
        }
    }
)

export const registerThunk = createAsyncThunk(
    "registerThunk",
    async (user) => {
        const regRes = await fetch(path, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        })
        if (regRes.ok) {
            // const res = await regRes.json();
            // username이 있으면
            return { success: 0, message: "회원가입 성공" };
        } else {
            const error = await regRes.text();
            return { success: 1, message: error };
        }
    }
)

export const listThunk = createAsyncThunk(
    "listThunk",
    async (page) => {
        console.log("listThunk page:", page);
        const getRes = await fetch(path + "?start=" + page);
        if (getRes.ok) {
            const res = await getRes.json();
            // console.log("listThunk res:", res);
            return { data: res, message: null };
        }else{
            const error = await getRes.text();
            return { data: null, message: error };
        }
    }
)

export const listOneThunk = createAsyncThunk(
    "listOneThunk",
    async (id) => {
        const getOneRes = await fetch(`${path}/${id}`);

        if (getOneRes.ok) {
            const res = await getOneRes.json();
            return { user: res, message: null };
        }else{
            const error = await getOneRes.text();
            return { user: null, message: error };

        }

    }
)

export const deleteOneThunk = createAsyncThunk(
    "deleteOneThunk",
    async (user) => {
        console.log("deleteOneThunk user:" + user);
        const delRes = await fetch(`${path}/${user.id}`, { method: "delete" })
        if (delRes.ok) {
            // const res = await delRes.json();
            return { success: 0, message: null };
        }else{
            const error = await delRes.text();
            return { success: 1, message: error };

        }
    }
)

export const updateOneThunk = createAsyncThunk(
    "updateOneThunk",
    async (user) => {
        const updateRes = await fetch(`${path}/${user.id}`, {
            method: "put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        })
        if (updateRes.ok) {
            // const res = await updateRes.json();
            return { success: 0, message: null };
        }else{
            const error = await updateRes.text();
            return { success: 1, message: error };

        }
    }
)