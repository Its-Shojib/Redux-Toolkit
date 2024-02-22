import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Features/Counter/CounterSlice'
import cartReducer from './Features/Cart/CartSlice'
// import logger from 'redux-logger';

import logger from './Middlewares/logger';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
export default store;

