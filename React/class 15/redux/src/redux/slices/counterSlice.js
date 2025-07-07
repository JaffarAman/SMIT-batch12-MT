import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        counter: 100
    },
    reducers: {
        addCounter: (state, action) => {
            console.log("state, action", state.counter, action)
            state.counter = ++state.counter
        },
        minusCounter: (state) => {
            state.counter = --state.counter

        }
    }
})


const { actions, reducer } = counterSlice

const { addCounter, minusCounter } = actions

// actions => UI k liye
// reducer => STORE k liye


const counterReducer = reducer
export { counterReducer, addCounter, minusCounter }