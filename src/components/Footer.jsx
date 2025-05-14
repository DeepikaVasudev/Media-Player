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
            <i className="fa-solid fa-headphones"></i>{" "}
            Melodify
            </Link>
      <p>Designed and built with all the love in the world by the Luminar team with the help of our contributers</p>
      <p>Code licensed Luminar, docs cc by 3.0</p>
      <p>Currently v5.3.2.0</p>

      </div>
      <div className='col-lg-2'>
        <p className='fs-3'>Links</p>
        <Link to={'/'} className='text-primary' style={{textDecoration:'none'}}>Landing page</Link> <br />
        <Link to={'/home'} className='text-primary' style={{textDecoration:'none'}}>Home page</Link> <br />
        <Link to={'/history'} className='text-primary' style={{textDecoration:'none'}}>History page</Link> <br />
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
        <i className="fa-solid fa-arrow-right"></i>
        </Button>
      </InputGroup>
      <div className='mt-4' style={{display:'flex',justifyContent:'space-between',fontSize:'25px'}}>
      <i className="fa-brands fa-twitter"></i>
      <i className="fa-brands fa-instagram"></i>
      <i className="fa-brands fa-facebook"></i>
      <i className="fa-brands fa-linkedin"></i>
      <i className="fa-brands fa-github"></i>
      <i className="fa-solid fa-phone"></i>
      </div>
      </div>

      </div>







    </div>
    </div>
  )
}

export default Footer