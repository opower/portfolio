import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import '../styles/nav.css'


export default function NavMenu(){

  return(
    <Navbar className='nav' sticky='top' expand='lg'>
      <Nav className="right">
        <Nav.Link href="#About">About</Nav.Link>
        <Nav.Link href="#Projects">Projects</Nav.Link>
        <Nav.Link href="#Contact">Contact</Nav.Link>
      </Nav>
    </Navbar>
  );
}