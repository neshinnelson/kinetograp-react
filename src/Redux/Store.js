import {configureStore} from '@reduxjs/toolkit'
import movieReducer from './movies'
import countReducer from './couter'
import cartReducer from './cart'
import wishlistReducer from './wishlist'
import checkoutReducer from './Checkout'
import usersReducer from './users'
import tesReducer from './test'

export const store = configureStore({
    reducer:{
        movies : movieReducer,
        counterA : countReducer,
        cart: cartReducer,
        wishlist: wishlistReducer,
        checkout: checkoutReducer,
        users: usersReducer,
        test: tesReducer
    }
})