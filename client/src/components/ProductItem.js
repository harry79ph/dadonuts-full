import { ProductButton, ProductCard, ProductImg, ProductInfo, ProductPrice, ProductTitle } from "./styles/Products.styled";
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/actions/cart-actions'
import { useInView } from 'react-intersection-observer';

const ProductItem = ({ cart, product, addToCart, removeFromCart }) => {

    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true
    });

    return (
        <ProductCard ref={ref}>
            <ProductImg className={inView ? "active" : ""} src={product.img} alt={product.name} />
            <ProductInfo className={inView ? "product-info active" : "product-info"}>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductPrice>£{product.price}</ProductPrice>
                {cart.some((item) => item.id === product.id) ? (
                    <ProductButton className='active' onClick={() => removeFromCart(product)}>Remove<span> from Cart</span></ProductButton>
                ) : (
                    <ProductButton onClick={() => addToCart(product)}>Add to Cart</ProductButton>
                )}
            </ProductInfo>
        </ProductCard>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (product) => dispatch(addToCart(product)),
        removeFromCart: (product) => dispatch(removeFromCart(product))
    }
}

export default connect(null, mapDispatchToProps)(ProductItem);