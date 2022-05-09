import { createSlice } from "@reduxjs/toolkit";


const loadingSlice = createSlice({
    name: 'loading',
    initialState: {
        loading: false
    },
    reducers: {
        show(state, { payload }) {
            state.loading = true;
        },
        hide(state, { payload }) {
            state.loading = false;
        }
    }
});

const { actions, reducer } = loadingSlice;

export const { show, hide } = actions;

export default reducer;