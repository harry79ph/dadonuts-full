import { memo, useCallback, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { H1Wrapper, HeroBtn, HeroContainer, HeroContent, HeroH1, HeroItems, HeroP } from "./styles/Hero.styled";

const Hero = () => {
    
    const { ref: contentRef, inView: contentInView } = useInView({ triggerOnce: true });
    const { ref: h1Ref, inView: h1InView } = useInView();
    const [y, setY] = useState(0);
    const [direction, setDirection] = useState("");
    const [speed, setSpeed] = useState("");
    const timerRef = useRef();
    const prevRef = useRef();
    prevRef.current = y;

    const handleAnimation = useCallback((e) => {
        if (!h1InView) return;
        const window = e.currentTarget;
        
        if (y > window.scrollY) {
            setDirection("up")
        } else if (y < window.scrollY) {
            setDirection("down");
        }
        setY(window.scrollY);
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            if (prevRef.current === window.scrollY) {
                setDirection("");
            }
        }, 300);
        
        let speedValue = Math.abs(prevRef.current - y);
        setSpeed(speedValue > 2 ? "fast" : "slow");
    },[h1InView, y]);

    useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", handleAnimation);
        return () => window.removeEventListener("scroll", handleAnimation);
    }, [handleAnimation]);

    return (
        <HeroContainer id="home">
            <HeroContent ref={contentRef}>
                <HeroItems ref={h1Ref}>
                    <H1Wrapper speed={speed} className={`${direction}`}>
                        <HeroH1 className={contentInView ? "active" : ""}>Tastiest hand made doughnuts</HeroH1>
                    </H1Wrapper>
                    <HeroP className={contentInView ? "active" : ""}>Irresistibly delicious!!</HeroP>
                    <HeroBtn activeClass="active" to="donuts" spy={true} smooth={true} offset={-120} duration={1000} role="button" tabIndex="0">Shop Now</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    );
}

export default memo(Hero);