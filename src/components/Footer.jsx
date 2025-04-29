import React from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className='bg-light p-5 mt-5' style={{height:'350px'}}>
    <div className='container text-primary'>
      <div className='row'>

     <div className='col-lg-4'>
     <Link to="/" className='text-primary' style={{textDecoration:"none",fontSize:'30px'}}>
            <i class="fa-solid fa-headphones"></i>{" "}
            Melodify
            </Link>
      <p>Designed and built with all the love in the world by the Luminar team with the help of our contributers</p>
      <p>Code licensed Luminar, docs cc by 3.0</p>
      <p>Currently v5.3.2.0</p>

      </div>
      <div className='col-lg-2'>
        <p className='fs-3'>Links</p>
        <p>Landing page</p>
        <p>Home page</p>
        <p>History page</p>
      </div>
      <div className='col-lg-2'>
      <p className='fs-3'>Guides</p>
        <p>React</p>
        <p>React Router</p>
        <p>React Bootstrap</p>
      </div>
      <div className='col-lg-4'>
      <p className='fs-3'>Contact</p>
        <InputGroup className="mb-3" style={{height:'50px'}}>
        <Form.Control
          placeholder="Enter your email"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="secondary" id="button-addon2">
        <i class="fa-solid fa-arrow-right"></i>
        </Button>
      </InputGroup>
      <div className='mt-4' style={{display:'flex',justifyContent:'space-between',fontSize:'25px'}}>
      <i class="fa-brands fa-twitter"></i>
      <i class="fa-brands fa-instagram"></i>
      <i class="fa-brands fa-facebook"></i>
      <i class="fa-brands fa-linkedin"></i>
      <i class="fa-brands fa-github"></i>
      <i class="fa-solid fa-phone"></i>
      </div>
      </div>

      </div>







    </div>
    </div>
  )
}

export default Footer