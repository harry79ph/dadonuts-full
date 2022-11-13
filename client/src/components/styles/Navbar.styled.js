import styled from "styled-components";
import { Link } from "react-scroll";
import { CgMenuCake } from "react-icons/cg";
import { CgShoppingCart } from "react-icons/cg";
import { RiAccountCircleLine } from "react-icons/ri";

export const NavContainer = styled.nav`
  background: ${({theme}) => theme.colors.navbar};
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  position: ${(props) => props.position || "fixed"};
  width: 100%;
  z-index: 1;
  @media ${({theme}) => theme.mediaQueries['md']} {
    height: 60px;
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-left: 2em;
  font-size: 1.6rem;
  img {
    width: 32px;
    margin-right: 5px;
  }
  p {
    color: ${props => props.theme.colors.light};
  }
  &:hover,
  &.active > p {
    background: -webkit-linear-gradient(#ccc1b8, #fff1a6);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media ${({theme}) => theme.mediaQueries['md']} {
    margin-left: 1em;
    font-size: 1.5rem;
    img {
      width: 27px;
      margin-right: 4px;
    }
  }
  @media ${({theme}) => theme.mediaQueries['sm']} {
    margin-left: 0.6em;
    font-size: 1.5rem;
    img {
      width: 24px;
      margin-right: 3px;
    }
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-transform: capitalize;
  @media ${({theme}) => theme.mediaQueries['lg']} {
    display: ${(props) => props.display || "none"};
  }
`;

export const AccountWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.light};
  margin-left: auto;
  margin-right: 0.3em;
  p {
    font-weight: bold;
    font-size: 1.2rem;
  }
  cursor: ${(props) => props.cursor || "pointer"};
  @media ${({theme}) => theme.mediaQueries['md']} {
    display: none;
  }
`;

export const AccountImg = styled(RiAccountCircleLine)`
  display: inline;
  position: relative;
  font-size: 2.2rem;
  @media ${({theme}) => theme.mediaQueries['md']} {
    font-size: 3rem;
  }
  @media ${({theme}) => theme.mediaQueries['sm']} {
    font-size: 2.4rem;
  }
`;

export const AccountUser = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 7rem;
`;

export const MenuWrapper = styled.div`
  display: flex;
  position: relative;
  color: ${props => props.theme.colors.light};
  a {
    display: block;
    color: inherit;
  }
  span {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.colors.dark};
    background-color: ${props => props.theme.colors.golden};
    border-radius: 50%;
    width: 17px;
    height: 17px;
    top: ${(props) => props.right ? "24px" : "16px"};
    left: ${(props) => props.right ? "36px" : "26px"};
    font-weight: bold;
    cursor: pointer;
    opacity: ${(props) => (props.isPresent ? "0" : "1")};
    transition: all 0.3s ease-out;
    @media ${({theme}) => theme.mediaQueries['md']} {
      width: 20px;
      height: 20px;
      top: 24px;
      left: 34px;
    }
  }
`;

export const ShoppingCart = styled(CgShoppingCart)`
  display: inline;
  font-size: ${(props) => props.fontSize || "2.2rem"};
  margin-right: 1.6em;
  height: 100%;
  cursor: ${(props) => props.cursor || "pointer"};
  @media ${({theme}) => theme.mediaQueries['md']} {
    display: ${(props) => props.display || "none"};
    font-size: 3rem;
    margin-right: 0.6em;
  }
`;

export const MenuIcon = styled(CgMenuCake)`
  display: none;
  margin-right: 1.6em;
  cursor: pointer;
  @media ${({theme}) => theme.mediaQueries['md']} {
    display: inline;
    font-size: 3rem;
    margin-right: 0.6em;
  }
  @media ${({theme}) => theme.mediaQueries['sm']} {
    font-size: 2.7rem;
  }
`;
