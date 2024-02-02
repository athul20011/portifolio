import React,{useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import ModeSwitch from './DarkModeSwitch';
import { MDBNavbarBrand} from 'mdb-react-ui-kit'
import { motion } from "framer-motion"


function Header({mode,setMode}) {

  const [active,setActive] = useState('Home');


  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop =()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <motion.div whileInView={{x:0,opacity:1,scale:.9}} style={{width:'100%'}} initial={{x:-100,opacity:0,scale:0.8}} transition={{duration:.4}} >
        <Navbar data-bs-theme="dark">
        <MDBNavbarBrand href='#'>
            <img
              src='https://th.bing.com/th/id/R.1e6a619b39732da7561dab32eac1ef9c?rik=wXbUnFBzM7tYYg&riu=http%3a%2f%2fjasmintavi.com%2fwp-content%2fuploads%2f2017%2f08%2fMyportfolio-KKDS.png&ehk=onTnnBmMBX7O2LMP4z%2bR0Fv4BeoY144BDQuf5JnIgv4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1'
              width='200'
              alt=''
              loading='lazy'
            />
          </MDBNavbarBrand>
        <Container className=''>
          <Nav className=" nn m-4 ">
            <Nav.Link className='n1 text-primary' href="home">Home</Nav.Link>
            <Nav.Link className='n1' href="about">About</Nav.Link>
            <Nav.Link className='n2' href="education">Education</Nav.Link>
            <Nav.Link className='n3' href="skill">Skills</Nav.Link>
            <Nav.Link className='n4' href="project">Projects</Nav.Link>
            <Nav.Link className=' btn text-primary' href="contact">Contact</Nav.Link>
          </Nav>
        </Container>
        
        <ModeSwitch setMode={setMode} mode={mode} />

      </Navbar>
      
    </motion.div>
  )
}

export default Header