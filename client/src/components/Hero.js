import { memo } from "react";
import blobs from "../images/blobs.svg"
import { BlobBG, H1Wrapper, HeroBtn, HeroContainer, HeroContent, HeroH1, HeroItems, HeroP } from "./styles/Hero.styled";

const Hero = ({ animation }) => {
    
    return (
        <HeroContainer id="home">
            <HeroContent>
            <BlobBG src={blobs} alt="Dadonuts" />
                <HeroItems>
                    <H1Wrapper>
                        <HeroH1 className={animation}>Tastiest hand made doughnuts</HeroH1>
                    </H1Wrapper>
                    <HeroP className={animation}>Irresistibly delicious!!</HeroP>
                    <HeroBtn activeClass="active" to="donuts" spy={true} smooth={true} offset={-120} duration={1000} role="button" tabIndex="0">Shop Now</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    );
}

export default memo(Hero);