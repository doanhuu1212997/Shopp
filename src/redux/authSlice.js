import { createSlice } from "@reduxjs/toolkit"
let user = JSON.parse(localStorage.getItem("login"));
const authSlice = createSlice({
    name: "auth",
    initialState: {
        login: !!user,
        user: ""
    },
    reducers: {
        login(state, { payload }) {
            localStorage.setItem("login", JSON.stringify({
                login: true,
                user: "Đoàn Hữu"
            }));
            return {
                ...state,
                login: true
            }
        },
        logout(state, { payload }) {
            localStorage.removeItem("login");
            return {
                ...state,
                login: false
            }
        }
    }
})
const { reducer, actions } = authSlice
export const { login, logout } = actions
export default reducer