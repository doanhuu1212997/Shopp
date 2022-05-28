
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axiosClient from "../api/AxiosClient"
import { asyncGetList, asyncWrapper } from "../helper/asyncWrapper"
let token = JSON.parse(localStorage.getItem("login"));

const getLogin = options => {
    let url = `/login`;
    return axiosClient.post(url, options);
};
export const fetchGetLogin = createAsyncThunk(
    'product/fetchGetLogin',
    async options => {
        let res = await asyncWrapper(getLogin, options);
        return res;
    }
);
const authSlice = createSlice({
    name: "auth",
    initialState: {
        login: !!token,
    },
    reducers: {

        logout(state, { payload }) {
            localStorage.removeItem("login");
            return {
                ...state,
                login: false
            }
        }
    },
    extraReducers: {
        [fetchGetLogin.fulfilled](state, { payload }) {
            localStorage.setItem("login", JSON.stringify(payload.data));
            state.login = true

        }
    },
})
const { reducer, actions } = authSlice
export const { login, logout } = actions
export default reducer