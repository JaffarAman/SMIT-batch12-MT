import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        products: []
    },
    reducers: {
        getProductData: (state, action) => {
            // console.log("product data get", state, action)
            state.products = action.payload
        }
    }
})


const { actions, reducer } = productSlice



const productReducer = reducer

const { getProductData } = actions

export {
    productReducer,
    getProductData
}