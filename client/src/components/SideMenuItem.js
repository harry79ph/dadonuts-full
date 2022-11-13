import { SideItemWrapper, SideImg, SideItemContent } from "./styles/SideMenu.styled";
import { ItemRemove, RemoveIcon } from "./styles/CartItem.styled";
import { connect } from "react-redux";
import { removeFromCart } from '../redux/actions/cart-actions';

const SideMenuItem = ({ item, removeFromCart }) => {
    return (
        <SideItemWrapper>
            <SideImg src={item.img} alt={item.name} />
            <SideItemContent>
                <span>{item.price}</span>
                <span className="times">X</span>
                <span>{item.qty}</span>
            </SideItemContent>
            <ItemRemove>
                <RemoveIcon display="inline" onClick={() => removeFromCart(item)} />
            </ItemRemove>
        </SideItemWrapper>
    );
}

const mapStateToProps = (dispatch) => {
    return {
        removeFromCart: (product) => dispatch(removeFromCart(product))
    };
};

export default connect(null, mapStateToProps)(SideMenuItem);