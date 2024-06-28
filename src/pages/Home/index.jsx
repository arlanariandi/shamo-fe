import {useDispatch, useSelector} from "react-redux";
import {useContext, useEffect} from "react";
import {ServiceContext} from "../../context/ServiceContext.jsx";
import {productAction} from "../../slices/productSlice.js";
import Navbar from "../../component/Navbar.jsx";
import Footer from "../../component/Footer.jsx";

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

            <div className="my-4">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 items-end">
                        <h3 className="text-gray-600 text-sm uppercase font-medium">New Product</h3>
                        <h3 className="text-fuchsia-500 text-xs uppercase font-medium text-right">See All</h3>
                    </div>

                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 mt-4">
                        {products.map((product, index) => (
                            <div key={index}
                                 className="w-full max-w-sm mx-auto rounded-2xl shadow-md overflow-hidden bg-white">
                                <div className="relative flex h-28 w-full">
                                    <img src="https://picsum.photos/id/55/200" alt={product.name}
                                         className="absolute inset-0 h-full w-full object-cover"/>
                                </div>
                                <div className="px-2.5 py-2.5">
                                    <h3 className="text-gray-700 font-bold text-sm uppercase">{product.name}</h3>
                                    <span
                                        className="text-orange-600 font-medium text-sm mt-2">${product.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Home
