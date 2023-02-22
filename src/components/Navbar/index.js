import React, {useEffect, useState} from 'react'
import {FaBars} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink} from './NavbarElements';
    import Logo from '../Logo';
import LogoSmall from '../LogoSmall';
import LogoText from '../LogoText';

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () =>{
        if(window.scrollY >= 80){
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }}

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () =>{
        scroll.scrollToTop()
    }

  return (
   <>
   <IconContext.Provider value={{color: '#fff'}}>
    <Nav scrollNav={scrollNav}>
        <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}><LogoText /></NavLogo>
            
            {/* <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to='about' smooth={true} duration={1000} spy={true} exact='true' offset={-80}>
                        About
                    </NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='discover' smooth={true} duration={1000} spy={true} exact='true' offset={-80}>
                        Why?
                    </NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='services' smooth={true} duration={1000} spy={true} exact='true' offset={-80}>
                    Benefits
                    </NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='signup' smooth={true} duration={1000} spy={true} exact='true' offset={-80}>
                        Sign Up
                    </NavLinks>
                </NavItem> 
            </NavMenu>
            <NavBtn>
                <NavBtnLink to='/waitlist'>Join Waitlist</NavBtnLink>
            </NavBtn> */}
        </NavbarContainer>
    </Nav>
    </IconContext.Provider>
   </>
  )
}


export default Navbar
