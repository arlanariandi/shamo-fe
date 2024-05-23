import {useDispatch, useSelector} from "react-redux";
import {useContext, useEffect} from "react";
import {ServiceContext} from "../../context/ServiceContext.jsx";
import {productAction} from "../../slices/productSlice.js";
import Navbar from "../../component/Navbar.jsx";

function Home() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.product.products);
    const {productService} = useContext(ServiceContext);

    useEffect(() => {
        const onGetProducts = () => {
            dispatch(productAction(() => productService.fetchProducts()));
        }
        onGetProducts();
    }, [dispatch, productService]);

    return (
        <div>
            <Navbar/>

            <div className="my-8">
                <div className="container mx-auto px-6">
                    <div className="mt-10">
                        <h3 className="text-gray-600 text-2xl font-medium">New Arrivals</h3>

                        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                            {products.map((product, index) => (
                                <div key={index}
                                     className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">

                                    <div className="relative flex items-end justify-end h-56 w-full">
                                        <img src="https://picsum.photos/id/55/200" alt="Background"
                                             className="absolute inset-0 h-full w-full object-cover"/>
                                        <button
                                            className="relative p-2 rounded-full bg-teal-600 text-white mx-5 -mb-4 hover:bg-teal-800">
                                            <svg className="h-5 w-5" fill="none" strokeLinecap="round"
                                                 strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"
                                                 stroke="currentColor">
                                                <path
                                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="px-5 py-3">
                                        <h3 className="text-gray-400 text-ms">{product.category.name}</h3>
                                        <h3 className="text-gray-700 uppercase">{product.name}</h3>
                                        <span className="text-gray-500 mt-2">${product.price}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home
