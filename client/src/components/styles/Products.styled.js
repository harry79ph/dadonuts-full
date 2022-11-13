import styled, { keyframes } from "styled-components";
import { buttonStyle } from "./Hero.styled";

export const ProductsContainer = styled.div`
  min-height: 100vh;
  padding: 2rem calc((100vw - 1300px) / 2);
  background: ${props => props.theme.colors.main};
  color: ${props => props.theme.colors.light};
`;

const loader = keyframes`
  0% { color: ${props => props.theme.colors.light}; }
  100% { color: ${props => props.theme.colors.golden}; }
`;

export const Loader = styled.p`
  padding: 2vw;
  font-size: 1.4rem;
  background: ${props => props.theme.colors.main};
  text-align: center;
  color: ${props => props.theme.colors.light};
  animation-name: ${loader};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-out;
`;

export const ProductSection = styled.section`
  padding-bottom: 2rem;
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.2vw, 3rem);
  font-size: 2.1rem;
  font-weight: 500;
  text-transform: capitalize;
  text-align: center;
  margin: 2rem 0;
`;

export const SortWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  padding-left: 20rem;
  @media ${({theme}) => theme.mediaQueries['md']} {
    margin-bottom: 0.5rem;
    padding-left: 0;
    text-align: start;
  }
`;

export const SortButtonsWrap = styled.div`
  &.list-btn {
    display: none;
    @media ${({theme}) => theme.mediaQueries['md']} {
      display: block;
      margin-right: 2vw;
    }
  }
`;

export const SortButton = styled.button`
  margin: 0.15rem;
  padding: 0.3rem 0.7rem;
  ${buttonStyle}
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  @media ${({theme}) => theme.mediaQueries['md']} {
    &.list > div {
      flex-direction: row;
      width: 90%;
      margin: 0.5rem;
      & img {
        height: 110px;
        margin-left: 7vw;
      }
      & .product-info {
        flex: 1;
        padding: 1rem 0;
        p {
          margin-bottom: 0;
          font-size: 17px;
        }
        button {
          padding: 0.4rem 0.9rem;
          font-size: 16px;
          span {
            display: none;
          }
        }
      }
    }
  }
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  width: 250px;
  box-shadow: 1px 2px 1px 1px ${({theme}) => theme.colors.shadow};
  transition: width 0.2s ease-out;
  @media ${({theme}) => theme.mediaQueries['md']} {
      margin: 1rem;
    }
`;

export const ProductImg = styled.img`
  height: 180px;
  display: block;
  max-width: 100%;
  margin: 0 auto;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0 2rem 0;
  text-align: center;
`;

export const ProductTitle = styled.h2`
  font-size: 1.2rem;
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 1.4rem;
`;

export const ProductButton = styled.button`
  font-size: 1.2rem;
  padding: 0.7rem 1.4rem;
  border: none;
  border-radius: 2px;
  ${buttonStyle}
`;
