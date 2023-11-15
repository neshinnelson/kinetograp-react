import { createSlice } from "@reduxjs/toolkit"
import { cart } from "../DATA_BASE"

const initialState = {
    cart:cart
}

const cartSlice = createSlice({
    name:'user-cart',
    initialState,
    reducers:{
        addToCart : (state,action)=>{
            const exist = state.cart.find(mov=>mov.name === action.payload.name)
            if(!exist){
                const newItem = {...action.payload,date:new Date().toJSON().slice(0,10)}
                state.cart = [...state.cart,newItem]
                // state.cart.push(action.payload)
            }else{
                alert('already exist')
            }    
        }, 
        removeFromCart : (state,action)=>{
            const indx= state.cart.findIndex(mov=>mov.name === action.payload.name)
            console.log(indx);
            if(indx===undefined || indx===null) return alert('nothing to remove')
            state.cart.splice(indx,1)
        }
    }
})

export const {addToCart,removeFromCart} = cartSlice.actions
export default cartSlice.reducer

