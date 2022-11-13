import styled from 'styled-components';

export const FooterWrapper = styled.div`
  padding: 0.5em 6vw 0;
  color: ${props => props.theme.colors.light};
  background-color: ${props => props.theme.colors.secondary};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
`;

export const FollowWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0.3rem;
`;

export const SocialIconLink = styled.a`
  color: inherit;
  font-size: 24px;
  padding-right: 10px;
  transition: 0.2s ease-out;
  &:hover {
    color: ${props => props.theme.colors.golden};
  }
`;

export const HelpWrap = styled.div`
  a {
    color: inherit;
  }
`;

export const ContactWrap = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  svg {
    font-size: 20px;
    margin-right: 5px;
  }
`;

export const CRWrap = styled.p`
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.light};
  width: 100vw;
  padding: 5px 0 8px;
  text-align: center;
  a {
    color: ${props => props.theme.colors.golden};
    text-decoration: underline;
    cursor: pointer;
  }
`;