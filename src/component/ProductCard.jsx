import PropTypes from 'prop-types';

const ProductCard = ({product, onClick}) => {
    return (
        <div
            onClick={() => onClick(product.id)}
            className="w-full max-w-sm mx-auto rounded-2xl shadow-md overflow-hidden bg-white cursor-pointer">
            <div className="relative flex h-28 w-full">
                <img src="https://picsum.photos/200" alt={product.name}
                     className="absolute inset-0 h-full w-full object-cover"/>
            </div>
            <div className="px-2.5 py-2.5">
                <h3 className="text-gray-700 font-bold text-sm uppercase">{product.name}</h3>
                <span
                    className="text-orange-600 font-medium text-sm mt-2">${product.price}</span>
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default ProductCard;
