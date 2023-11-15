import { createSlice } from "@reduxjs/toolkit"
import { wishlist } from "../DATA_BASE"

const initialState = {
    wishlist:wishlist
}

const wishlistSlice = createSlice({
    name:'user-wishlist',
    initialState,
    reducers:{
        addToWishlist : (state,action)=>{
            const exist = state.wishlist.find(mov=>mov.name===action.payload.name)
            if(exist) return alert('alerady added')
            const update = {...action.payload,date:new Date().toJSON().slice(0,10)}
            state.wishlist = [...state.wishlist,update]
        },
        removeFromWishlist : (state,action)=>{
            const indx = state.wishlist.findIndex(mov=>mov.name === action.payload.name)
            if(indx){
                state.wishlist.splice(indx,1)
            }else{
                alert('not found')
            }
        }

    }
})

export const {addToWishlist,removeFromWishlist} = wishlistSlice.actions
export default wishlistSlice.reducer