import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import {FooterContainer, FooterWrap, FooterLinksContainer,
        FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink,
        SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons,
        SocialIconLink }
        from './FooterElements'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
import LogoText from '../LogoText';

const Footer = () => {
    const toggleHome = () =>{
        scroll.scrollToTop()
    }
  return (
    <FooterContainer>
        <FooterWrap>
            <SocialMedia>
                <SocialMediaWrap>
                    <WebsiteRights>Poker Analytica © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="https://www.facebook.com/pokeranalytica" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="YouTube">
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href="//www.twitter.com/gtoexplorer" target="_blank" aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
