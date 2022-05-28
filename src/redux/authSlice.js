
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axiosClient from "../api/AxiosClient"
import { asyncGetList, asyncWrapper, asyncCreate } from "../helper/asyncWrapper"


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
const resgister = options => {
    let url = `/register`;
    return axiosClient.post(url, options);
};
export const fetchResgiter = createAsyncThunk(
    'product/fetchResgiter',
    async options => {
        let res = await asyncCreate(resgister, options);
        return res;
    }
);
const authSlice = createSlice({
    name: "auth",
    initialState: {
    },
    reducers: {

        logout(state, { payload }) {
            localStorage.removeItem("login");
            return {
                ...state,
            }
        }
    },
    extraReducers: {
        [fetchGetLogin.fulfilled](state, { payload }) {
            localStorage.setItem("login", JSON.stringify(payload.data));

        }
    },
})
const { reducer, actions } = authSlice
export const { login, logout } = actions
export default reducer