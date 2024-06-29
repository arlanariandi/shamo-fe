import PropTypes from "prop-types";
import ProductCard from "./ProductCard.jsx";

const ProductList = ({products, onProductClick}) => {
    return (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 mt-4">
            {products.map((product, index) => (
                <ProductCard key={index} product={product} onClick={onProductClick}/>
            ))}
        </div>
    )
}

ProductList.propTypes = {
    products: PropTypes.array.isRequired,
    onProductClick: PropTypes.func.isRequired
}

export default ProductList;
