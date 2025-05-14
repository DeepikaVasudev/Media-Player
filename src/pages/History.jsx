import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { deleteHistoryAPI, getHistoryAPI } from '../services/allAPI'




const History = () => {

  const [historyData,setHistoryData]=useState()
  useEffect(()=>{
    getHistoryData()
  },[])

  const getHistoryData=async()=>{

   let result= await getHistoryAPI()
   setHistoryData(result.data)
   console.log(result.data)

  }

  const deleteHistory=async(id)=>
  {
    await deleteHistoryAPI(id)
    getHistoryData()  //to delete without refresh
    console.log(id)
  }
  return (
    <div className='container'>
      <div className="d-flex justify-content-between">
        <h1>Watch History</h1>
        <Link to={'/home'}>Back to Home</Link>
      </div>

      <Table  hover className='table-primary '>
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>Link</th>
          <th>Time stamp</th>
          <th>...</th>
        </tr>
      </thead>
      <tbody>
        {
          historyData?.map((eachHistory,index)=>(
            <tr key={index}>
          <td>{index+1}</td>
          <td>{eachHistory.caption}</td>
          <td>{eachHistory.link}</td>
          <td>{eachHistory.currentDate}</td>
          <td><button onClick={()=>deleteHistory(eachHistory.id)} className='btn'><i className="fa-solid fa-trash text-danger"></i></button></td>
        </tr>

          ))
        }
        
       
      </tbody>
    </Table>
    </div>
  )
}

export default History