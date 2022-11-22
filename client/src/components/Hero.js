import { memo } from "react";
import { useInView } from "react-intersection-observer";
import { H1Wrapper, HeroBtn, HeroContainer, HeroContent, HeroH1, HeroItems, HeroP } from "./styles/Hero.styled";

const Hero = () => {
    
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <HeroContainer id="home">
            <HeroContent ref={ref}>
                <HeroItems>
                    <H1Wrapper>
                        <HeroH1 className={inView ? "active" : ""}>Tastiest hand made doughnuts</HeroH1>
                    </H1Wrapper>
                    <HeroP className={inView ? "active" : ""}>Irresistibly delicious!!</HeroP>
                    <HeroBtn activeClass="active" to="donuts" spy={true} smooth={true} offset={-120} duration={1000} role="button" tabIndex="0">Shop Now</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    );
}

export default memo(Hero);