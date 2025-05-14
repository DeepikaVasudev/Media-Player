import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'
import { addHistory, deleteVideoAPI } from '../services/allAPI';





const VideoCard = ({videos,setDeleteVideoRes,insideAllCategory}) => {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {

    const currentDate=new Date();
    const caption=videos.caption
    const link=videos.ytLink
    const reqObj={
        currentDate,caption,link
    }
    
    let result=await addHistory(reqObj)
    console.log(result)
    setShow(true)
};

    const deleteVideo=async(id)=>{
        let result=await deleteVideoAPI(id)
        setDeleteVideoRes(result)
        console.log(result)
        
      
}

const videoDrag=(e,id)=>{
    console.log(e)
    console.log(id)
    e.dataTransfer.setData('videoId',id)
}

  return (
    <>
        <Card draggable="true" onDragStart={(e)=>videoDrag(e,videos?.id)} className='border-light' style={{ width: '15rem',height:'18rem' }}>
    <Card.Img onClick={handleShow} variant="top" src={videos?.imageURL} height={'200px'} />
    <Card.Body className='text-center'>
      <div className="d-flex justify-content-between align-items-center">
          <h4>{videos?.caption}</h4>
          {
            insideAllCategory?<span></span>:<button className='btn'><i onClick={()=>deleteVideo(videos.id)} className="fa-solid fa-trash text-danger"></i></button>
          }
          
      </div>
     
    </Card.Body>
  </Card>
  <Modal centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={true}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>{videos?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315" src={`${videos?.ytLink}?autoplay=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>
  </>
  )
}

export default VideoCard