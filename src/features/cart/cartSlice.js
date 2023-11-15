import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cart: [

    ],
}
const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addItem(state, action) {
            state.cart.push(action.payload)
        },
        deleteItem(state, action) {
            state.cart = state.cart.filter(item => item.pizzaId != action.payload)

        },
        increaseItemQuantity(state, action) {
            const item = state.cart.find(item => item.pizzaId === action.payload)
            item.totalPrice = ++item.quantity * item.unitPrice
        },
        decreaseItemQuantity(state, action) {
            const item = state.cart.find(item => item.pizzaId === action.payload)
            item.totalPrice = --item.quantity * item.unitPrice
        },
        clearCart(state, action) {
            state.cart = []
        }
    }
})
export const cartActions = cartSlice.actions
export default cartSlice.reducer