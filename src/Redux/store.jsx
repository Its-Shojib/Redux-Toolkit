import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Features/Counter/CounterSlice'
import cartReducer from './Features/Cart/CartSlice'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        cart: cartReducer,
    }
})
export default store;

