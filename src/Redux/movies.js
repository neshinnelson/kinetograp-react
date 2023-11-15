import { createSlice } from "@reduxjs/toolkit";
import { movies } from "../DATA_BASE";

const initialState = {
    array : movies
}

export const movieSlice = createSlice({
    name:'movieArray',
    initialState,

    reducers:{
        add : (state)=>{state.array.push({id:'movie10',link:'sdsgdsgdsgdsgdgsg'})},
        shift : (state,action)=>{
            state.array.shift()
        }
    }

})

export const {add,shift} = movieSlice.actions

export default movieSlice.reducer