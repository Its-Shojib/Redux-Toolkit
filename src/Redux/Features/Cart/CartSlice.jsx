import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        num: 0
    },
    reducers: {
        increment: (state) => {
            state.num += 1;
        },
        decrement: (state) => {
            state.num -= 1;
        },
        incrementByAmount: (state, action) => {
            state.num += action.payload;
        }
    }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = cartSlice.actions;

export default cartSlice.reducer;