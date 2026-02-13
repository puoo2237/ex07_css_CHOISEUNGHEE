import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    login: { username: "", password: "" },
    register: { username: "", password: "", role: "", file: "" },
    user: { id: "", username: "", password: "", role: "", file: "", fileName: "" }
}
const inputSlice = createSlice({
    name: 'input',
    initialState: initialState,
    reducers: {
        changeInput(state, action) {
            const { name, value, form, files, type } = action.payload;
            state[form][name] = type === "file" ? files?.[0] ?? null : value
        },
        resetInput(state, action) {
            const { form } = action.payload;
            state[form] = initialState[form];
        }
    }
})

export default inputSlice;
export const { changeInput, resetInput } = inputSlice.actions;