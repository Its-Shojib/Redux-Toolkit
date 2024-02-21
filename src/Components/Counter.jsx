import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../Redux/Features/Counter/CounterSlice'

const Counter = () => {
    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch();
    
    return (
        <div>
            <button className='bg-green-600 text-white px-3 py-1 rounded-md' onClick={() => dispatch(increment())}>Increment</button>
            <div className='py-5 text-center'>{count}</div>
            <button className='bg-red-600 text-white px-3 py-1 rounded-md' onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    )
}
export default Counter;