import React, {useState} from 'react'
import Video from '../../videos/video2.mp4'
import Image from '../../images/bg.png'
import { Button } from '../buttonelement'
import { HeroContainer, HeroBg, VideoBg, ImageBg,
    HeroContent, HeroH1, HeroP, HeroBtnWrapper,
    ArrowForward, ArrowRight} from './HeroElements'
import Signin from '../Signin'
import LogoText from '../LogoText';
import {FooterContainer, FooterWrap, FooterLinksContainer,
    FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink,
    SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons,
    SocialIconLink, TextLink }
    from '../Footer/FooterElements'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
import PrivPolicy from '../PrivPolicy'

const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }
    const [policyOpen, setPolicyOpen] = useState(false)

    const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);

    const handlePrivacyPolicyClick = () => {
      setIsPrivacyPolicyOpen(true);
    };
  
    const handlePrivacyPolicyClose = () => {
      setIsPrivacyPolicyOpen(false);
    };

  return (
    <HeroContainer id='home'>
        <HeroBg>
            <VideoBg autoPlay loop muted playsInline src={Video} type='video/mp4' /> 
            {/* <ImageBg src={Image} /> */}
        </HeroBg>
        <HeroContent id='content'>
            <LogoText />
            <HeroH1>Unleash Optimal Gameplay!</HeroH1>
            <HeroH1>GTO poker solver arriving soon</HeroH1>
            <Signin />
        {isPrivacyPolicyOpen && <PrivPolicy onClose={handlePrivacyPolicyClose} />}
        <SocialMedia>
                <SocialMediaWrap>
                    <WebsiteRights>Poker Analytica © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                    <TextLink onClick={handlePrivacyPolicyClick}>Privacy Policy</TextLink>
                    <SocialIcons>
                        <SocialIconLink href="//www.facebook.com/pokeranalytica" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="YouTube">
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href="//twitter.com/pokeranalytica" target="_blank" aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </HeroContent>

            

    </HeroContainer>
  )
}

export default HeroSection
