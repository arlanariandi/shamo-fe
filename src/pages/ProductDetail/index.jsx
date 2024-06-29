import {useContext, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {ServiceContext} from "../../context/ServiceContext.jsx";
import {useDispatch, useSelector} from "react-redux";
import {selectProductAction} from "../../slices/productSlice.js";
import Header from "../../component/Header.jsx";
import Footer from "../../component/Footer.jsx";

const ProductDetail = () => {
    const {id} = useParams();

    const dispatch = useDispatch();
    const product = useSelector(state => state.product.selectedProduct);
    const {productService} = useContext(ServiceContext)

    useEffect(() => {
        const onGetProductById = () => {
            dispatch(selectProductAction(() => productService.fetchProductById(id)))
        }
        onGetProductById()
    }, [dispatch, id, productService]);

    return (
        <div className="min-h-full">
            <Header/>
            <h2>Product Detail</h2>
            <p>{product?.name}</p>
            <Footer/>
        </div>
    );
};

export default ProductDetail;

