// import { configureStore } from "@reduxjs/toolkit";
// import { userReducer } from "./slices/userSlice"

import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slices/counterSlice";

// const store = configureStore({
//     reducer: {
//         // user: userReducer
//     }
// })

// export default store



// counter global state
// store create
// store bind on react app
// global state ==> CreateSlice
// Slice = reducer || Actions

// reducer k andar global state hoti hai  or yeh kissy connect hoti hai? 
// ANS => STORE


// UI global states => STORE




const store = configureStore({
    reducer: {
        counterSlice : counterReducer
    }
}) 

export default store