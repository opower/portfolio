import React,{ useState, useEffect, useRef }from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import '../styles/nav.css'


export default function NavMenu(){

  const [color, setColor] = useState();
  const navRef = useRef()
  navRef.current = color;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250  ) {
        setColor(true)
      } else {
        setColor(false)
      }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const styles = {
    background:{
      backgroundColor:`${ color ? 'mistyrose' : 'transparent' }`,
      transition:'1s ease'  
    }
  }

  return(
    <Navbar className='nav' sticky='top' expand='lg' style={styles.background}>
      <Nav className="right">
        <Nav.Link href="#About">ABOUT</Nav.Link>
        <Nav.Link href="#Projects">PROJECTS</Nav.Link>
        <Nav.Link href="#Contact">CONTACT</Nav.Link>
      </Nav>
    </Navbar>
  );
}