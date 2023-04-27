import styled, { keyframes, css } from "styled-components";
import { Link } from "react-scroll";
import BgImg from "../../images/doughnut-bg.png";
import Blobs from '../../images/blobs.svg'

export const buttonStyle = css`
  border: none;
  transition: 0.2s ease-out;
  background: ${(props) => props.theme.colors.golden};
  color: ${(props) => props.theme.colors.dark};
  &.active,
  &:hover,
  &:focus {
    background: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.light};
  }
`;

export const HeroContainer = styled.div`
  position: relative;
  background-image: url(${Blobs}), url(${BgImg});
  height: 100vh;
  background-position: center;
  background-size: cover;
  overflow: hidden;
  @media ${({ theme }) => theme.mediaQueries["lg"]} {
    background-position: 86% 50%;
    background-color: rgba(255, 68, 185, 0.1);
  }
`;

export const BlobBG = styled.div`
  background-image: linear-gradient(
      to right,
      rgba(255, 68, 185, 1),
      rgba(255, 68, 185, 0.3)
    );
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  //background-color: rgba(255, 68, 185, 0.4);  // If the images cannot be loaded, the background color will be used as fallback.
  height: 100vh;
  width: 100vw;
`;

export const HeroContent = styled.div`
  height: 100vh;
  padding: 0 calc((100vw - 1300px) / 2);
  @media ${({ theme }) => theme.mediaQueries["md"]} {
    padding: 20vh 0;
  }
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  max-height: 100%;
  padding: 0 2rem;
  width: 550px;
  color: ${(props) => props.theme.colors.light};
  line-height: 1;
  font-weight: bold;
  transition: all 0.2s ease-out;
  @media ${({theme}) => theme.mediaQueries["md"]} {
    width: 100%;
    justify-content: flex-start;
  }
`;

export const H1Wrapper = styled.div`
  margin-bottom: 1rem;
  box-shadow: 3px 5px 1px 1px ${({theme}) => theme.colors.shadow};
`;

const h1Animation = keyframes`
  0% { opacity: 0; transform: translateY(-10vh) skew(2deg); filter: blur(2px); }
  100% { opacity: 1; transform: translateY(0px) skew(0deg); filter: blur(0px); }
`;

const pAnimation = keyframes`
  0% { opacity: 0; transform: translateX(-20vh) skewX(30deg); }
  100% { opacity: 1; transform: translateX(0px) skewX(0deg); }
`;

export const HeroH1 = styled.h1`
  font-size: clamp(2rem, 5vw, 3rem);
  letter-spacing: 3px;
  text-transform: uppercase;
  opacity: ${({className}) => className && "0"};
  &.animate {
    animation-name: ${h1Animation};
    animation-duration: 2s;
    animation-fill-mode: forwards;
    animation-iteration-count: initial;
    animation-delay: 1s;
    animation-timing-function: ease-out;
  }
`;

export const HeroP = styled.p`
  font-size: clamp(1.5rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
  opacity: ${(props) => props.className && "0"};
  &.animate {
    animation-name: ${pAnimation};
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    animation-iteration-count: initial;
    animation-delay: 3s;
    animation-timing-function: cubic-bezier(0.4, 0.4, 0.8, 1.4);
  }
`;

export const HeroBtn = styled(Link)`
  font-size: 1.6rem;
  padding: 1rem 3rem;
  justify-self: flex-end;
  border-radius: 3px;
  ${buttonStyle}
  @media ${({theme}) => theme.mediaQueries["md"]} {
    margin-top: auto;
  }
`;
