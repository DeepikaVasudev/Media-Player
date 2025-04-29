import React from 'react'
import { Link } from 'react-router-dom'
import musicGif from '../assets/musicGif.gif'
import { Card } from 'react-bootstrap'
import category from '../assets/category.jpg'
import manage from '../assets/managing.jpg'
import time from '../assets/time.webp'

const Landing = () => {
  return (
    <div className='container'>
  
      <div className='row align-items-center'>
        <div className='col-lg-5'>
          <h1 className='text-primary'>Welcome to <span className='text-light fw-bold'> Melodify </span></h1>
          <p className='text-primary' style={{textAlign:'justify',fontSize:'18px'}}>Melodify will allow user to add or remove their uploaded videos from youTube and also allow them to arrange it in different categories by drag and drop. User can also have the provision to manage their watch history as well. What are you waiting for, let starts exploring our site!!!</p> <br />
          <Link to={"/home"} className='btn btn-light text-dark'>Get Started</Link>

        </div>

        <div className="col-lg-1"></div>
        
      <div className="col-lg-6 pt-5">
        <img src={musicGif} alt="" width={'650px'} height={'600px'} />
      </div>

      </div>


      <div className='my-5'>
        <h1 className='text-center fw-bold text-light'>Features</h1>
        <div className='row mt-5'>
          <div className="col-lg-4">
          <Card className='border-light' style={{ width: '20rem',height:'30rem' }}>
      <Card.Img variant="top" src={manage}   />
      <Card.Body className='text-center'>
        <Card.Title className='text-light fs-4'>Manage videos</Card.Title>
        <Card.Text className='text-primary fs-5'>
          Users can upload, view and remove the videos.
        </Card.Text>
       
      </Card.Body>
    </Card>
          </div>
          <div className="col-lg-4">
          <Card className='border-light' style={{ width: '20rem',height:'30rem' }}>
      <Card.Img variant="top" src={category} height={'300px'} />
      <Card.Body className='text-center'>
        <Card.Title className='text-light fs-4'>Categorize videos</Card.Title>
        <Card.Text className='text-primary fs-5'>
          Users can categorize videos upon their interests.
        </Card.Text>
       
      </Card.Body>
    </Card>
          </div>
          <div className="col-lg-4">
          <Card className='border-light' style={{ width: '20rem',height:'30rem' }}>
      <Card.Img variant="top" src={time} height={'300px'} />
      <Card.Body className='text-center'>
        <Card.Title className='text-light fs-4'>Managing History</Card.Title>
        <Card.Text className='text-primary fs-5'>
          Users can manage watch history of all videos.
        </Card.Text>
       
      </Card.Body>
    </Card>
          </div>

        </div>
      </div>



      <div className='row border-primary p-5' style={{minHeight:'500px',border:'2px solid'}}  >
        <div className='col-lg-5 ' style={{textAlign:'justify'}}>
          <h1 className='ms-4 text-primary '> Simple, Fast and Powerful</h1>
         <p className='ms-4 '><span className='fs-3'>Play Everything: </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sed aspernatur quia, velit neque alias velit neque alias.</p>
         <p className='ms-4 '><span className='fs-3'>Categorize Videos: </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sed aspernatur quia, velit neque alias.</p>
         <p className='ms-4 '><span className='fs-3'>Manage History: </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sed aspernatur quia, velit neque alias velit neque alias velit neque alias</p>
        </div>
        <div className='col-lg-1'></div>
        <div className='col-lg-6'>
        <iframe width="550" height="350" src="https://www.youtube.com/embed/LkKChCQnjB4?si=5uSyBqsTZvFOj9B1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
      
    </div>
  )
}

export default Landing