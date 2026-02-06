import { createSlice } from "@reduxjs/toolkit";
import { listOneThunk, listThunk } from "../service/authThunk";
import { commonLoadingHandler } from "./commonLoadingHandlers";

const memberDataSlice = createSlice({
    name: "member",
    initialState: {
        data: { number: 0, first: true, totalPages: 1, content: [] },
        user: null,
        loading: false,
        error: null,
        result: 1
    },
    reducers: {
        changeInfo(state, action) {
            const { name, value } = action.payload;
            state.user[name] = value;
        },
        onClick(state, action){
            state.data.number = action.payload.value}
        }
    ,
    extraReducers: (builder) => {
        builder
            .addCase(listThunk.fulfilled, (state, action) => {
                state.data.content = action.payload.data.content;
                state.data.number = action.payload.data.number;
                state.data.first = action.payload.data.first;
                state.data.totalPages = action.payload.data.totalPages;
                state.loading = false;
                state.result = 0;
                state.error = null;
            })
            .addCase(listOneThunk.fulfilled, (state, action) => {
                state.user = action.payload.user
                state.loading = false;
                state.result = 0;
                state.error = null;
                console.log("state.user:", state.user)
            })
        commonLoadingHandler(builder, listThunk)
        commonLoadingHandler(builder, listOneThunk)
    }
})

export default memberDataSlice;
export const { changeInfo, onClick } = memberDataSlice.actions;