import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    test:[]
}

const testSlice =createSlice({
    name:'test',
    initialState,
    reducers:{
        testFn: (state,action)=>{
            return '100'
        },
        testFn2: (state,action)=>{
            return '200'
        }
    }
})

export const {testFn,testFn2} = testSlice.actions
export default testSlice.reducer