import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    checkout : []
}

const checkoutSlice =createSlice({
    name:'checkout',
    initialState,
    reducers:{
        addToCheckout : (state,action)=>{
            const exist = state.checkout.find(mov=>mov.name===action.payload.name)
            if(exist){return alert('already added')}
            const idUpdated = {...action.payload,userId:sessionStorage.getItem('userId')}
            state.checkout = [...state.checkout,idUpdated]
        },
        removeFromCheckout : (state,action)=>{
            const update = state.checkout.filter(mov=>mov.name !==action.payload)
            state.checkout = update
        }
    }
})

export const {addToCheckout} = checkoutSlice.actions
export default checkoutSlice.reducer