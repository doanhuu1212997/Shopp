import { configureStore } from "@reduxjs/toolkit"
import thunk from "redux-thunk"
import authReducer from "../redux/authSlice"
import productReducer from "../redux/productSlice"
import loadingReducer from "../components/Loading/loadingSlice"
const store = configureStore({
    reducer: {
        auth: authReducer,
        product: productReducer,
        loading: loadingReducer
    },
    middleware: [thunk]

})
export default store