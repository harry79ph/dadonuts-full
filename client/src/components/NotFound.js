import CartNav from "./CartNav";
import { CartButton, CartContainer, CartContent, SubtotalWrap } from "./styles/Cart.styled";
import { Link } from "react-router-dom";
import CopyRight from "./CopyRight";

const NotFound = () => {
    return (
        <>
            <CartContainer>
                <CartNav />
                <CartContent>
                    <h1>Sorry</h1>
                    <h3>That page cannot be found</h3>
                    <SubtotalWrap>
                        <CartButton><Link to="/">Back to the homepage...</Link></CartButton>
                    </SubtotalWrap>
                </CartContent>
            </CartContainer>
            <CopyRight />
        </>
    );
}
 
export default NotFound;