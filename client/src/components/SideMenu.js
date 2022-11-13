import { CloseIcon, IconWrapper, SideMenuContainer, SideMenuLink, SidebarMenu, SidebarRoute, SideBtnWrapper, CartContent, CartHeader } from "./styles/SideMenu.styled";
import { products } from "../data/itemLists";
import SideMenuItem from "./SideMenuItem";
import { connect } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import UserAuth from "./UserAuth";
import UserLogin from "./UserLogin";
import UserRegister from "./UserRegister";
import UserAccount from "./UserAccount";
import PrivateRoute from "./PrivateRoute";

const SideMenu = ({ totals, isOpen, handleToggle, cart }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        handleToggle();
        navigate("/home");
    }

    return (
        <SideMenuContainer isOpen={isOpen} style={{visibility: isOpen ? "visible" : "hidden"}}>
            <IconWrapper onClick={handleClick}>
                <CloseIcon role="button" aria-label='close' tabIndex="0">Close<span>{'>>>'}</span></CloseIcon>
            </IconWrapper>
            <Routes>
                <Route path="/" element={<UserAuth />}/>
                <Route path="/login" element={<PrivateRoute restricted={false}><UserLogin /></PrivateRoute>} />
                <Route path="/register" element={<PrivateRoute restricted={false}><UserRegister /></PrivateRoute>} />
                <Route path="/account" element={<PrivateRoute restricted={true}><UserAccount /></PrivateRoute>} />
            </Routes>
            <SidebarMenu>
                {products.map((product, i) => <SideMenuLink activeClass="active" to={product} spy={true} smooth={true} offset={-120} duration={1000} key={'menu' + i}>{product}</SideMenuLink>)}
            </SidebarMenu>
            <CartHeader>Your Items</CartHeader>
            <CartContent>
                {totals.quantity > 0 ? (
                    <>
                        {cart.map(item => {
                            return (
                                <SideMenuItem item={item} key={'side' + item.id}/>
                            );
                        })}
                        <h3>Total: {totals.price}</h3>
                    </>
                ) : (
                    <li style={{ margin: "30px 0" }}>Cart is Empty!</li>
                )}
            </CartContent>
            <SideBtnWrapper>
                <SidebarRoute to="/cart">Go to Cart</SidebarRoute>
            </SideBtnWrapper>
        </SideMenuContainer>
    );
}

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart,
        totals: state.shop.totals
    };
};

export default connect(mapStateToProps)(SideMenu);