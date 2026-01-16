import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const initialState = {
    login: { username: "", password: "" },
    register: { username: "", password: "", role: "" },
}
const inputSlice = createSlice({
    name: 'input',
    initialState: initialState,
    reducers: {
        changeInput(state, action) {
            const { name, value, form } = action.payload;
            state[form][name] = value;
        },
        resetInput(state, action) {
            const { form } = action.payload;
            state[form] = initialState[form];
        }
        }
})

export default inputSlice;
export const { changeInput, resetInput } = inputSlice.actions;