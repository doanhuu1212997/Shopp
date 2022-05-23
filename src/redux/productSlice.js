import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axiosClient from "../api/AxiosClient"
import { asyncGetList, asyncWrapper } from "../helper/asyncWrapper"
const getProduct = options => {
    let url = `/product`;
    return axiosClient.get(url, options);
};
export const fetchGetProduct = createAsyncThunk(
    'product/getProduct',
    async options => {
        let res = await asyncWrapper(getProduct, options);
        return res;
    }
);

const productSlice = createSlice({
    name: "product",
    initialState: {
        list: []
    },
    reducers: {
    },
    extraReducers: {
        [fetchGetProduct.fulfilled](state, { payload }) {
            localStorage.setItem("product", JSON.stringify(payload.data));
            state.list = payload.data
        }
    },



})
const { reducer, action } = productSlice

export default reducer