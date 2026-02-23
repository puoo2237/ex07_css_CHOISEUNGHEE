import { configureStore } from '@reduxjs/toolkit';
import inputSlice from './inputSlice';
import authSlice from './authSlice';
import memberDataSlice from './memberDataSlice';
import postSlice from './postSlice';
import pathSlice from './pathSlice';

const store = configureStore({
    reducer: {
        input: inputSlice.reducer,
        auth: authSlice.reducer,
        list: memberDataSlice.reducer,
        post: postSlice.reducer,
        path: pathSlice.reducer
    }
})
export default store;