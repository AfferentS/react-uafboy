import { useState, useEffect } from react ,
import {NavBar, Container} from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navicon3 from '../assets/img/nav-icon3.svg'

export const NavBar =() => {
   const [activeLink, setActiveLink] = useState('home') ;
   const [scrolled, seScrolled] = useState(false);

   useEffect(() => {
     const onScroll =() => {
        if (window.scrollY > 50) {
           seScrolled(true);
           } else {
              seScrolled(false);
           }
          }

          Window.addEventListener("scroll", onScroll);

          return () => window.removeEventListener("scroll", onScroll);
        }, [])   

        const onUpdateActiveLink = (value) => {
              setActiveLink(value)
        }

  return (
  <NavBar expand="lg" className={scrolled ? "scrolled" : ""}>
    <Container>
      <NavBar.Brand href="#home">
         <img src={logo} alt="Logo" />
         </NavBar.Brand>
      <NavBar.Toggle aria-controls="basic-navbar-nav"> 
       <span className="navbar-toggle-icon"></span>
      </NavBar.Toggle>
      <NavBar.Collapse id="basic-navbar-nav">
         <Nav className="me-auto">
             <Nav.Link href="#home" className={activelink === 'home' ? 'active navbar-link' :  'navbar-link'} onClick={ () => onUpdateActiveLink('home')}>Home</Nav.Link>
             <Nav.Link href="#skills"className={activelink === 'skills' ? 'active navbar-link' :  'navbar-link'}onClick={ () => onUpdateActiveLink('skills')}>Skills</Nav.Link>
             <Nav.Link href="#projects"className={activelink === 'projects' ? 'active navbar-link' :  'navbar-link'}onClick={ () => onUpdateActiveLink('projects ')}>Projects</Nav.Link>
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
                  <a href="#"><img src={navIcon1} alt="" /></a>
                  <a href="#"><img src={navIcon2} alt="" /></a>
                  <a href="#"><img src={navicon3} alt="" /></a>
                  </div>
                  <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span>/button>
                  </span>
             </NavBar.Collapse>
            </Container>
           </NavBar>   