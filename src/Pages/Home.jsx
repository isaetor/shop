import Product from '../components/Product';
import {Products} from '../data/products'
const Home = () => {
    

    return(
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-4">
                {Products.map((product) => <Product key={product.id} product={product} /> )}
                </div>
            </div>
        </div>
    )
}
export default Home;