import Cart from "../Components/Cart";
import Counter from "../Components/Counter";


const Home = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-20">
            <Counter />
            <Cart />
        </div>
    )
}
export default Home;