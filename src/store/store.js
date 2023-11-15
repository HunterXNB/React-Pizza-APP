import { configureStore } from "@reduxjs/toolkit"
import user from "../features/user/userSlice"
import cartReducer from "../features/cart/cartSlice"

const store = configureStore({
    reducer: {
        user: user,
        cart: cartReducer
    }
})

export default store