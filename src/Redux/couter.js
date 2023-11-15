import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : 0
}

export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment : (state)=> state + 1,
        decrement : (state)=> state - 1
    }

})

export const {increment,decrement} = counterSlice.actions

export default counterSlice.reducer