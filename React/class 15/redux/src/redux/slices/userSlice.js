import { createSlice } from "@reduxjs/toolkit";



const userSlice = createSlice({
    name: "user",
    initialState: {
        userName: "JAFFAR AMAN"  //global state
    },
    reducers: {}
})

const { actions, reducer } = userSlice
const userReducer = reducer

export { userReducer }