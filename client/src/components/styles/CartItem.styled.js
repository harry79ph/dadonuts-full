import styled from "styled-components";
import { CgTrash } from "react-icons/cg";

export const CartItemWrap = styled.li`
  display: flex;
  align-items: center;
  align-content: stretch;
  margin-bottom: 1.25rem;
  overflow: hidden;
  min-height: 100px;
  padding: 1rem;
  box-shadow: 1px 2px 1px 1px ${({theme}) => theme.colors.shadow};
  @media ${({theme}) => theme.mediaQueries['md']} {
    padding: 0;
  }
`;

export const ItemImg = styled.img`
  display: block;
  height: 100px;
  min-width: 60px;
  max-width: 100%;
  @media ${({theme}) => theme.mediaQueries['md']} {
    height: 70px;
  }
`;

export const InnerWrap = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 100px);
  span {
    margin: 0 min(0.6vw, 10px);
    font-size: clamp(1rem, 1.6vw, 1.4rem);
  }
  @media ${({theme}) => theme.mediaQueries['md']} {
    width: calc(100% - 80px);
  }
`;

export const ItemContent = styled.div`
  flex-grow: 1.8;
  max-width: 36%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-left: 1vw;
  h3 {
    font-size: clamp(1rem, 1.8vw, 1.5rem);
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-grow: 3.2;
  align-items: center;
  justify-content: space-between;
  margin-right: 1vw;
  span {
    font-size: clamp(1.2rem, 2vw, 1.6rem);
  }
`;

export const QuantityWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-grow: 3;
`;

export const ItemQuantity = styled.select`
  font-size: 1.2rem;
  background-color: ${props => props.theme.colors.light};
  color: inherit;
  border-radius: 3px;
  option {
    text-align: center;
  }
`;

export const ItemTotal = styled.div`
  min-width: 3rem;
  flex-grow: 4;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-left: 2px;
`;

export const ItemRemove = styled.div`
  padding-left: 0;
`;

export const RemoveIcon = styled(CgTrash)`
  display: inline;
  font-size: 2.2rem;
  color: inherit;
  cursor: pointer;
  @media ${({theme}) => theme.mediaQueries['md']} {
    display: ${({display}) => display || "none"};
    font-size: 2rem;
  }
`;
