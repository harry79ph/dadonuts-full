import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import {
  FooterWrapper,
  SocialMediaWrapper,
  SocialIconLink,
  FollowWrap,
  ContactWrap,
  ContactItem,
  HelpWrap
} from "./styles/Footer.styled";

const Footer = () => {
  return (
    <FooterWrapper>
      <FollowWrap>
        <h3>Follow Us</h3>
        <SocialMediaWrapper>
          <SocialIconLink href="/" target="_blank" aria-label="Facebook">
            <FaFacebook />
          </SocialIconLink>
          <SocialIconLink href="/" target="_blank" aria-label="Instagram">
            <FaInstagram />
          </SocialIconLink>
          <SocialIconLink href="/" target="_blank" aria-label="Youtube">
            <FaYoutube />
          </SocialIconLink>
          <SocialIconLink href="/" target="_blank" aria-label="Twitter">
            <FaTwitter />
          </SocialIconLink>
          <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
            <FaLinkedin />
          </SocialIconLink>
        </SocialMediaWrapper>
      </FollowWrap>
      <HelpWrap>
        <h3>Need Help</h3>
        <li><a href="/">Allergens</a></li>
        <li><a href="/">Delivery</a></li>
        <li><a href="/">FAQ's</a></li>
        <li><a href="/">Terms & Conditions</a></li>
      </HelpWrap>
      <ContactWrap>
        <h3>Contact Us</h3>
        <ContactItem><MdLocationOn /><span>123 Lorem Ipsum Street London N4 6EY</span></ContactItem>
        <ContactItem><MdPhone /><span>07455854578</span></ContactItem>
        <ContactItem><MdEmail /><span>info@dadonuts.co.uk</span></ContactItem>
      </ContactWrap>
    </FooterWrapper>
  );
};

export default Footer;
