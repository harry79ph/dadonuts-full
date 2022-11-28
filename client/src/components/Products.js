import { useState } from 'react';
import { ProductsContainer, ProductSection, ProductWrapper, ProductsHeading, SortWrap, SortButton, SortButtonsWrap } from './styles/Products.styled';
import ProductItem from './ProductItem';
import { connect } from 'react-redux';
import { sortByName, sortByPrice, addActive } from '../redux/actions/cart-actions';
import { InView } from 'react-intersection-observer';

const Products = ({ shop: { sections, titles }, cart, sortByName, sortByPrice, addActive }) => {

    const [isList, setIsList] = useState([true, true, true]);
    const products = Object.keys(titles);

    const handleList = (i) => {
        setIsList((prev) => prev.map((bool, idx) => idx === i ? !bool : bool));
    }

    return (
        <ProductsContainer>
            {sections.map((section, i) => {
                return (
                    <ProductSection id={products[i]} key={"section" + i}>
                        <InView onChange={(inView) => {
                            if (inView && !titles[products[i]]) addActive(products[i])
                        }}>
                            <ProductsHeading className={titles[products[i]] ? "active" : ""}>{products[i]}</ProductsHeading>
                        </InView>
                        <SortWrap>
                            <SortButtonsWrap className="list-btn">
                                <span>List View:</span>
                                <SortButton onClick={() => handleList(i)}>{isList[i] ? "on" : "off"}</SortButton>
                            </SortButtonsWrap>
                            <SortButtonsWrap>
                                <span>Sort By:</span>
                                <SortButton onClick={() => sortByName(i)}>name</SortButton>
                                <SortButton onClick={() => sortByPrice(i)}>price</SortButton>
                            </SortButtonsWrap>
                        </SortWrap>
                        <ProductWrapper className={isList[i] ? "list" : ""}>
                            {section.map((product, i) => {
                                return (
                                    <ProductItem key={'product' + i} product={product} cart={cart} />
                                );
                            })}
                        </ProductWrapper>
                    </ProductSection>
                );
            })}
        </ProductsContainer>
    );
}

const mapStateToProps = state => {
    return {
        shop: state.shop,
        cart: state.shop.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sortByName: (index) => dispatch(sortByName(index)),
        sortByPrice: (index) => dispatch(sortByPrice(index)),
        addActive: (title) => dispatch(addActive(title)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);