import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'



const Header = () => {
  return (
    <Navbar style={{zIndex:'1'}} className="bg-light sticky-top w-100">       
        <Container>
          <Navbar.Brand  className='fw-bolder '>
            <Link to="/" className='text-primary' style={{textDecoration:"none",fontSize:'30px'}}>
            <i class="fa-solid fa-headphones"></i>{" "}
            Melodify
            </Link>
          
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header