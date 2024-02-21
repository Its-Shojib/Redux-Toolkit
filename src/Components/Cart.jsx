import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../Redux/Features/Cart/CartSlice';

const Cart = () => {
    const num = useSelector(state => state.cart.num);
    const dispatch = useDispatch();

    return (
        <div>
            <div className='flex gap-5'>
                <button className='bg-green-600 text-white px-3 py-1 rounded-md' onClick={() => dispatch(incrementByAmount(3))}>Increment by 3</button>
                <br />
                <button className='bg-green-400 text-white px-3 py-1 rounded-md' onClick={() => dispatch(increment())}>Increment</button>
            </div>
            <br />
            <div className='py-5 text-center'>{num}</div>
            <br />
            <button className='bg-red-600 text-white px-3 py-1 rounded-md' onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    )
}
export default Cart;