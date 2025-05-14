import React, { useState } from 'react'
import Add from '../components/Add'
import AllVideos from '../components/AllVideos'
import AllCategories from '../components/AllCategories'
import { Link } from 'react-router-dom'


const Home = () => {
  const [addVidResponse,setAddVidResponse]=useState([])
  const [deleteVideoResponse,setDeleteVideoResponse]=useState([])  // to delete video from allvideos and to move  to categry section
  return (
    <div className='mt-5'>
    <div className='container d-flex justify-content-between'>
      <Add setAddVidResponse={setAddVidResponse} />

      <Link to='/history'>Watch History</Link>

    </div>

    <div className='container-fluid row'>
      <div className="col-lg-6">
        <AllVideos addVidResponse={addVidResponse} deleteVideoResponse={deleteVideoResponse} />

      </div>

      <div className="col-lg-6">
        <AllCategories setDeleteVideoResponse={setDeleteVideoResponse}/>

      </div>

    </div>
    </div>
  )
}

export default Home