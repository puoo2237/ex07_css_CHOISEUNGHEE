import { createSlice } from "@reduxjs/toolkit";
import { likePostThunk, postOneThunk, postThunk } from "../../service/post/postThunk";
import { commonLoadingHandler } from "../commonLoadingHandlers";

const postSlice = createSlice({
    name: "post",
    initialState: {
        posts: { number: 0, totalPages: 1, content: [] },
        post: {
            id: 0,
            memUserId: 0,
            memUserName: "",
            postCount: 0,
            likeCount: 0,
            liked: false,
            title: "",
            content: "",
            createdAt: "",
            updateTime: ""
        },
        loading: false,
        error: null,
        result: 1
    },
    reducers: {
        changeInfo(state, action) {
            const { form, name, value } = action.payload;
            state[form][name] = value;

        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(postThunk.fulfilled, (state, action) => {
                state.posts = action.payload.data;
                // console.log("postThunk fulfilled:", action.payload.data);
                state.loading = false;
                state.result = 0;
                state.error = null;
            })
            .addCase(postOneThunk.fulfilled, (state, action) => {
                state.post = action.payload.data;
                // console.log("postOneThunk fulfilled:", action.payload.data);
                state.loading = false;
                state.result = 0;
                state.error = null;
            })
            .addCase(likePostThunk.fulfilled, (state, action) => {
                const { id, liked } = action.payload.success
                const post = state.posts.content.find(post => post.id === id)
                if (post) {
                    post.liked = liked;
                    post.likeCount += liked ? 1 : -1;
                }
                state.loading = false;
                state.result = 0;
                state.error = null;
            })
        commonLoadingHandler(builder, postThunk)
        commonLoadingHandler(builder, postOneThunk)
        commonLoadingHandler(builder, likePostThunk)
    }
})

export default postSlice;
export const { changeInfo } = postSlice.actions;
