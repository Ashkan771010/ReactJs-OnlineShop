import ProductCard from '../component/ProductCard';
import Slider from '../component/Slider';


const Home = () => {
    // const { data } = useFetchApi("https://fakestoreapi.com/products/");

    return (
        <div>
            <Slider />
            <ProductCard />
        </div>
    );
}
 
export default Home;