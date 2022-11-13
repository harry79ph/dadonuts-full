import CartNav from "./CartNav";
import { CartButton, CartContainer, CartContent, CartList, SubtotalWrap } from "./styles/Cart.styled";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { connect } from 'react-redux';
import CopyRight from "./CopyRight";

const Cart = ({ cart, totals }) => {

    let cartContent;

    if (!cart.length) {
        cartContent = <h3 style={{ margin: "50px 0" }}>Cart is Empty!</h3>;
    } else {
        cartContent = cart.map(item => {
            return (
                <CartItem key={'cart' + item.id} item={item} />
            );
        });
    }

    return (
        <>
            <CartContainer>
                <CartNav totals={totals}/>
                <CartContent>
                    <h1>Your Cart</h1>
                    <CartList>
                        {cartContent}
                    </CartList>
                    <SubtotalWrap>
                        <h2>Subtotal: £{totals.price}</h2>
                        <div>
                            <CartButton disabled={Number(totals.price) === 0}>Proceed to Checkout</CartButton>
                            <CartButton><Link to="/">Continue Shopping</Link></CartButton>
                        </div>
                    </SubtotalWrap>
                </CartContent>
            </CartContainer>
            <CopyRight />
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart,
        totals: state.shop.totals
    };
};

export default connect(mapStateToProps)(Cart);