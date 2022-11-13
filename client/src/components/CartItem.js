import { CartItemWrap, InnerWrap, ItemContent, ItemImg, ItemInfo, ItemQuantity, ItemRemove, ItemTotal, QuantityWrap, RemoveIcon } from "./styles/CartItem.styled";
import { connect } from "react-redux";
import { changeItemQty, removeFromCart } from '../redux/actions/cart-actions';
import { useState } from "react";

const CartItem = ({ item, changeItemQty, removeFromCart }) => {

    const [input, setInput] = useState(item.qty);
    
    return (
        <CartItemWrap>
            <ItemImg src={item.img} alt={item.name} />
            <InnerWrap>
                <ItemContent>
                    <h3>{item.name}</h3>
                    <span>Price £{item.price}</span>
                </ItemContent>
                <ItemInfo>
                    <QuantityWrap>
                        <span>Quantity</span>
                        <ItemQuantity value={input} onChange={(e) => {
                            const qty = e.target.value;
                            setInput(e.target.value);
                            changeItemQty(item, qty);
                        }}>
                            {
                                [...new Array(5)].map((_, i) => <option value={i + 1} key={'option' + i}>{i + 1}</option>)
                            }
                        </ItemQuantity>
                    </QuantityWrap>
                    <ItemTotal><span>Total</span><h3>£{(Number(item.price) * Number(item.qty)).toFixed(2)}</h3></ItemTotal>
                    <ItemRemove>
                        <RemoveIcon display="inline" onClick={() => {
                            removeFromCart(item);
                        }} />
                    </ItemRemove>
                </ItemInfo>
            </InnerWrap>
        </CartItemWrap>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeItemQty: (item, qty) => dispatch(changeItemQty(item, qty)),
        removeFromCart: (product) => dispatch(removeFromCart(product))
    };
};

export default connect(null, mapDispatchToProps)(CartItem);