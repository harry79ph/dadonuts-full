import { NavContainer, NavLink, ItemWrapper, MenuIcon, MenuWrapper, ShoppingCart, AccountWrapper, AccountImg, AccountUser } from './styles/Navbar.styled';
import logo from '../images/logo.svg';
import { products } from "../data/itemLists";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

const Navbar = ({ handleToggle, user, totals }) => {

    return (
        <>
            <NavContainer>
                <NavLink activeClass="active" to="home" spy={true} smooth={true} offset={-120} duration={700}><img src={logo} alt="Dadonuts" role="button"/><p tabIndex="0">Dadonuts</p></NavLink>
                <ItemWrapper>
                    {products.map((product, i) => <NavLink activeClass="active" to={product} spy={true} smooth={true} offset={-120} duration={700} key={'nav' + i} role="button" tabIndex="0"><p>{product}</p></NavLink>)}
                </ItemWrapper>
                <AccountWrapper onClick={handleToggle} role="button" tabIndex="0">
                    <AccountImg />
                    {user ? <AccountUser>{user}</AccountUser> : <p>LOGIN</p>}
                </AccountWrapper>
                <MenuWrapper isPresent={totals.quantity === 0}>
                    <Link to="/cart" aria-label='your cart' tabIndex="0">
                        <ShoppingCart />
                    </Link>
                    <MenuIcon onClick={handleToggle} />
                    <span>
                        <p>{totals.quantity}</p>
                    </span>
                </MenuWrapper>
            </NavContainer>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
        totals: state.shop.totals
    };
};

export default connect(mapStateToProps)(Navbar);