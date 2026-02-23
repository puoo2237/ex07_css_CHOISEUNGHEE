import { createAsyncThunk } from "@reduxjs/toolkit"
import { service_path } from "./service_ip_port"


const path = service_path + "/members";

export const postThunk = createAsyncThunk(
    "postThunk",
    async (page) => {
        const postRes = await fetch(service_path + "/posts?start=" + page);
        if (postRes.ok) {
            const res = await postRes.json();
            return { data: res, message: null };
        } else {
            const error = await postRes.text();
            return { data: [], message: error };
        }
    }
)

export const postOneThunk = createAsyncThunk(   
    "postOneThunk",
    async (id) => {
        const postOneRes = await fetch(`${service_path}/posts/${id}`);
        if (postOneRes.ok) {
            const res = await postOneRes.json();
            return { data: res, message: null };
        } else {    
            const error = await postOneRes.text();
            return { data: null, message: error };
        }
    }
)

export const uploadPostThunk = createAsyncThunk(
    "uploadPostThunk",
    async ({ post, token }) => {
        const formData = new FormData();
        formData.append("title", post.title);
        formData.append("content", post.content);
        const UploadPostRes = await fetch(`${service_path}/posts`, {
            method: "post",
            headers: {
                "Authorization": `Bearer ${token}`,
            },
            body: formData
        })
        if (UploadPostRes.ok) {
            return { success: 0, message: "게시글 등록 성공" };
        } else {
            const error = await UploadPostRes.text();
            return { success: 1, message: error };
        }
    }
)

export const deletePostThunk = createAsyncThunk(
    "deletePostThunk",
    async ({ id, token }) => {
        const delPostRes = await fetch(`${service_path}/posts/${id}`, {
            method: "delete",
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        })
        if (delPostRes.ok) {
            return { success: 0, message: "게시글 삭제 성공" };
        } else {
            const error = await delPostRes.text();
            return { success: 1, message: error };
        }
    }
)

export const updatePostThunk = createAsyncThunk(
    "updatePostThunk",
    async({id, post, token}) => {
        const formData = new FormData();
        formData.append("title", post.title);
        formData.append("content", post.content);
        const updatePostRes = await fetch(`${service_path}/posts/${id}`, {
            method: "put",
            headers: {
                "Authorization": `Bearer ${token}`,
            },
            body: formData
        })
        if (updatePostRes.ok) {
            return { success: 0, message: "게시글 수정 성공" };
        } else {
            const error = await updatePostRes.text();
            return { success: 1, message: error };
        }
    }
)


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