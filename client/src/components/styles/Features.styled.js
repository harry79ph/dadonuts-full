import styled from 'styled-components';

export const FeatureCard = styled.div`
    margin: 2rem;
    width: 24%;
    box-shadow: 3px 5px 1px 0px ${({theme}) => theme.colors.shadow};
    transition: all 0.2s ease-out;
    &:hover {
      transform: scale(1.01);
      box-shadow: 2px 2px 2px 3px rgba(242, 229, 158, 0.95);
    }
    @media ${({theme}) => theme.mediaQueries['lg']} {
      width: 100%;
    }
`;

export const FeatureWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
`;

export const FeatureInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 100%;
    svg{
      font-size: 6rem;
      margin: 3rem;
    }
`;

export const FeatureDesc = styled.p`
  margin: 0.8rem 0.5rem;
  margin-top: 0.5rem;
  line-height: 1.2;
  font-size: 1.2rem;
`;

export const FeatureButton = styled.button`
display: block;
  font-size: 1.1rem;
  padding: 0.8rem 1.2rem;
  margin: 1.4rem;
  margin-top: auto;
  border: none;
  border-radius: 2px;
  background: ${props => props.theme.colors.golden};
  color: ${props => props.theme.colors.dark};
  cursor: pointer;
  transition: 0.2s ease-out;
  &:hover {
    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.light};
  }
`;