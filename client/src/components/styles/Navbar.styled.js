import styled from "styled-components";
import { Link } from "react-scroll";
import { CgMenuCake } from "react-icons/cg";
import { CgShoppingCart } from "react-icons/cg";
import { BiUser } from "react-icons/bi";

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
    background: linear-gradient(
      to bottom,
      hsl(202.97, 92.89%, 55.88%) 0%,
      hsl(205.15, 78.79%, 64.93%) 10.5%,
      hsl(204.21, 62.85%, 68.99%) 19.4%,
      hsl(200.49, 46.05%, 71.5%) 27%,
      hsl(190.79, 29.19%, 73.17%) 33.5%,
      hsl(162.3, 19.29%, 75.69%) 39%,
      hsl(110.55, 18.1%, 78.37%) 44%,
      hsl(80.88, 27.86%, 77.74%) 48.5%,
      hsl(68.82, 36.12%, 77.11%) 53%,
      hsl(62.53, 43.08%, 76.51%) 57.5%,
      hsl(58.82, 50.42%, 76.17%) 62.3%,
      hsl(56.6, 59.04%, 76.18%) 67.7%,
      hsl(55.18, 66.53%, 76.15%) 74%,
      hsl(54.22, 73.04%, 76.08%) 81.3%,
      hsl(53.53, 78.72%, 75.99%) 89.9%,
      hsl(53.01, 83.74%, 75.88%) 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
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

export const AccountImg = styled(BiUser)`
  display: inline;
  position: relative;
  font-size: 2rem;
  transition: color .3s ease-out;
  &:hover {
    color: ${props => props.theme.colors.shadow};
  }
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
  transition: color .3s ease-out;
  &:hover {
    color: ${props => props.theme.colors.golden};
    color: ${props => props.cursor ? "inherit" : props.theme.colors.shadow};
  }
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
