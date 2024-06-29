import {useDispatch, useSelector} from "react-redux";
import {useContext, useEffect} from "react";
import {ServiceContext} from "../../context/ServiceContext.jsx";
import {productAction} from "../../slices/productSlice.js";
import Header from "../../component/Header.jsx";
import Footer from "../../component/Footer.jsx";
import {useNavigate} from "react-router-dom";
import ProductList from "../../component/ProductList.jsx";

function Home() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const products = useSelector(state => state.product.products);
    const {productService} = useContext(ServiceContext);

    useEffect(() => {
        const onGetProducts = () => {
            dispatch(productAction(() => productService.fetchProducts()));
        }
        onGetProducts();
    }, [dispatch, productService]);

    const handleProductClick = (id) => {
        navigate(`/product/${id}`);
    }

    return (
        <div>
            <Header/>

            <div className="my-4">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 items-end">
                        <h3 className="text-gray-600 text-sm uppercase font-medium">New Product</h3>
                        <h3 className="text-fuchsia-500 text-xs uppercase font-medium text-right">See All</h3>
                    </div>

                    <ProductList products={products} onProductClick={handleProductClick}/>

                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Home
