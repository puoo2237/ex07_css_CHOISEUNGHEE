import { createSlice } from "@reduxjs/toolkit";
import { postOneThunk, postThunk } from "../service/authThunk";
import { commonLoadingHandler } from "./commonLoadingHandlers";

const postSlice = createSlice({
    name: "post",
    initialState: {
        posts: { number: 0, totalPages: 1, content: [] },
        post: {
            id: 0,
            memUserId: 0,
            memUserName: "",
            postCount: 0,
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
                state.loading = false;
                state.result = 0;
                state.error = null;
            })
            .addCase(postOneThunk.fulfilled, (state, action) => {
                state.post = action.payload.data;
                state.loading = false;
                state.result = 0;
                state.error = null;
            })
        commonLoadingHandler(builder, postThunk)
        commonLoadingHandler(builder, postOneThunk)
    }
})

export default postSlice;
export const { changeInfo } = postSlice.actions;
