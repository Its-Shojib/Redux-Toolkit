import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../Redux/Features/Counter/CounterSlice'

const Counter = () => {
    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <div className='py-5'>{count}</div>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    )
}
export default Counter;