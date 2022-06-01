
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axiosClient from "../api/AxiosClient"
import { asyncGetList, asyncWrapper, asyncCreate } from "../helper/asyncWrapper"


const getLogin = options => {
    let url = `/login`;
    return axiosClient.post(url, options);
};
export const fetchGetLogin = createAsyncThunk(
    'auth/fetchGetLogin',
    async options => {
        let res = await asyncWrapper(getLogin, options);
        return res;
    }
);
const resgister = options => {
    let url = `/register`;
    return axiosClient.post(url, options);
};
export const fetchResgiter = createAsyncThunk(
    'auth/fetchResgiter',
    async options => {
        let res = await asyncCreate(resgister, options, "Tạo tài khoản thành công");
        return res;
    }
);

const getInfor = options => {
    let url = `/user/get-info`;
    return axiosClient.get(url, options);
};
export const fetchgetInfor = createAsyncThunk(
    'auth/fetchgetInfor',
    async options => {
        let res = await asyncGetList(getInfor, options);
        return res;
    }
);
const refreshToken = options => {
    let url = `/refresh-token`;
    return axiosClient.post(url, options);
};
export const fetchrefreshToken = createAsyncThunk(
    'auth/fetchrefreshToken',
    async options => {
        let res = await asyncWrapper(refreshToken, options);
        return res;
    }
);
const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: []
    },
    reducers: {

        logout(state, { payload }) {
            localStorage.removeItem("token");
            return {
                ...state,
            }
        }
    },
    extraReducers: {
        [fetchGetLogin.fulfilled](state, { payload }) {
            localStorage.setItem("token", JSON.stringify(payload.data));

        },

    },
})
const { reducer, actions } = authSlice
export const { login, logout } = actions
export default reducer