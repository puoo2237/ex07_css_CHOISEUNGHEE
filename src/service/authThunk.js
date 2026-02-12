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
        const formData = new FormData();
        formData.append("username", user.username);
        formData.append("password", user.password);
        const loginRes = await fetch(service_path + "/auth/login", {
            method: "post",
            body: formData
        })
        if (loginRes.ok) {
            const res = await loginRes.json();
            return { success: res, message: "로그인 성공" };
        } else {
            const error = await loginRes.text();
            return { success: null, message: error };
        }
    }
)

export const registerThunk = createAsyncThunk(
    "registerThunk",
    async (user) => {
        const formData = new FormData();
        formData.append("username", user.username);
        formData.append("password", user.password);
        formData.append("role", user.role);
        if (user.file) formData.append("file", user.file);
        const regRes = await fetch(path, {
            method: "post",
            body: formData
        });

        if (regRes.ok) {
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
        const getRes = await fetch(path + "?start=" + page);
        if (getRes.ok) {
            const res = await getRes.json();
            return { data: res, message: null };
        } else {
            const error = await getRes.text();
            return { data: { number: 0, first: true, totalPages: 1, content: [] }, message: error };
        }
    }
)

export const listOneThunk = createAsyncThunk(
    "listOneThunk",
    async ({id, token}) => {
        const getOneRes = await fetch(`${path}/${id}`,
            {
                headers: {
                    "Authorization": `Bearer ${token}`,
                }
            },
        );

        if (getOneRes.ok) {
            const res = await getOneRes.json();
            return { user: res, message: null };
        } else {
            const error = await getOneRes.text();
            return { user: null, message: error };

        }

    }
)

export const deleteOneThunk = createAsyncThunk(
    "deleteOneThunk",
    async ({ user, token }) => {
        const delRes = await fetch(`${path}/${user.id}`, {
            method: "delete",
            headers: {
                "Authorization": `Bearer ${token}`,
            },
            body: user.fileName
        })
        if (delRes.ok) {
            return { success: 0, message: null };
        } else {
            const error = await delRes.text();
            return { success: 1, message: error };

        }
    }
)

export const updateOneThunk = createAsyncThunk(
    "updateOneThunk",
    async ({ user, token }) => {
        const formData = new FormData();
        formData.append("username", user.username);
        formData.append("password", user.password);
        formData.append("role", user.role);
        formData.append("fileName", user.fileName);
        if (user.file) formData.append("file", user.file);
        console.log(user.id)
        const updateRes = await fetch(`${path}/${user.id}`, {
            method: "put",
            headers: {
                "Authorization": `Bearer ${token}`,
            },
            body: formData
        })
        if (updateRes.ok) {
            return { success: 0, message: null };
        } else {
            const error = await updateRes.text();
            return { success: 1, message: error };

        }
    }
)