import { createAsyncThunk } from "@reduxjs/toolkit"
import { service_path } from "../service_ip_port"


const path = service_path + "/members";

export const postThunk = createAsyncThunk(
    "postThunk",
    async ({page, token}) => {
        const postRes = await fetch(service_path + "/posts?start=" + page,
            token!==""?
                        {
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            }:{}
        );
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
    async ({ id, token }) => {
        const postOneRes = await fetch(`${service_path}/posts/${id}`,
            {
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            }
        );
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
        const uploadPostRes = await fetch(`${service_path}/posts`, {
            method: "post",
            headers: {
                "Authorization": `Bearer ${token}`,
            },
            body: formData
        })
        if (uploadPostRes.ok) {
            return { success: 0, message: "게시글 등록 성공" };
        } else {
            const error = await uploadPostRes.text();
            return { success: 1, message: error };
        }
    }
)

export const likePostThunk = createAsyncThunk(
    "likePostThunk",
    async ({ like, token }) => {
        const likePostRes = await fetch(`${service_path}/posts/${like.id}/like`, {
            method: `${like.liked? "delete" : "post"}`,
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        })
        if (likePostRes.ok) {
            return { success: {liked: !like.liked, id: like.id}, message: "좋아요 처리 성공" };
        } else {
            const error = await likePostRes.text();
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
    async ({ id, post, token }) => {
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
