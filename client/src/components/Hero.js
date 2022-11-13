import { memo } from "react";
import { H1Wrapper, HeroBtn, HeroContainer, HeroContent, HeroH1, HeroItems, HeroP } from "./styles/Hero.styled";

const Hero = ({ animation }) => {
    
    return (
        <HeroContainer id="home">
            <HeroContent>
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