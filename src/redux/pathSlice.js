import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  history: [], // 이동 경로 기록
  current: "/" // 현재 경로
};

const pathSlice = createSlice({
  name: "path",
  initialState,
  reducers: {
    trackPage: (state, action) => {
      state.current = action.payload;
      state.history.push(action.payload);
    },
    clearHistory: (state) => {
      state.history = [];
      state.current = "/";
    }
  }
});

export const { trackPage, clearHistory } = pathSlice.actions;
export default pathSlice;