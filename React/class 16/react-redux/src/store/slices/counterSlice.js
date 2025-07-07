import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        counter: 100
    },
    reducers: {
        addCounter: (state, action) => {
            // console.log("addCounter", state.counter, action.payload)
            state.counter = ++state.counter
        },
        minusCounter: (state) => {
            state.counter = --state.counter
        }
    }
})


const { actions, reducer } = counterSlice


const counterReducer = reducer
const { addCounter, minusCounter } = actions



export { counterReducer, addCounter, minusCounter }