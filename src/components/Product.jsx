import { useDispatch, useSelector } from 'react-redux'
import { addToCart, decreaseItemCart } from '../store'
const Product = ({product}) => {
    const dispatch = useDispatch()
    const itemsCart = useSelector((state) => state.cart.itemsCart)
    return (
        <div className="group border border-neutral-200 p-4 rounded-lg">
            <div className="relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                </div>
                <div className="mt-4">
                    <div className="mb-4">
                        <h3 className="text-sm text-gray-700">
                            <a href={product.href}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product.name}
                            </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <p className="text-xl font-bold text-gray-900">${product.price}</p>
                {
                    !itemsCart.some((item) => item.id === product.id)
                    ? <button onClick={() => dispatch(addToCart({id:product.id}))} className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 h-10 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Add to cart</button>
                    : <div className="flex h-10">
                        <button onClick={() => dispatch(decreaseItemCart({id:product.id}))} className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 w-10 rounded cursor-pointer flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                            </svg>
                        </button>
                        <p  className="min-w-fit w-10 flex items-center justify-center text-gray-700 font-bold">{itemsCart?.filter((row) => row.id === product.id)[0]?.count}</p>
                        <button onClick={() => dispatch(addToCart({id:product.id}))} className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 w-10 rounded cursor-pointer flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </button>
                    </div>
                }
            </div>
        </div>
    )
}
export default Product;