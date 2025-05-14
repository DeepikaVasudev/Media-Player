import React, { useEffect, useState } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import {
  addCategoryAPI,
  deleteCategoryAPI,
  deleteVideoAPI,
  getCategoryAPI,
  getSingleVideoAPI,
  updateCategoryAPI,
} from "../services/allAPI";
import VideoCard from "./VideoCard";

const AllCategories = ({ setDeleteVideoResponse }) => {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [categoryData, setCategoryData] = useState("");

  useEffect(() => {
    getAllCategory();
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addCategoryCall = async () => {
    const reqObj = { categoryName, videos: [] };
    let result = await addCategoryAPI(reqObj);
    console.log(result);
    console.log(categoryName);
    handleClose();
    await getAllCategory();
  };

  const getAllCategory = async () => {
    let result = await getCategoryAPI();
    setCategoryData(result.data);
    console.log(result.data);
  };

  const onVideoDrop = async (e, eachData) => {
    console.log(e);
    console.log(eachData);
    console.log(e.dataTransfer.getData("videoId"));
    let vidId = e.dataTransfer.getData("videoId");
    let result = await getSingleVideoAPI(vidId);
    eachData.videos.push(result.data);

    let updateResult = await updateCategoryAPI(eachData.id, eachData);

    if (updateResult.status == 200) {
      let deleteResult = await deleteVideoAPI(vidId);
      setDeleteVideoResponse(deleteResult);
    }
    console.log(updateResult);
    console.log(eachData);
    console.log(result);
  };
  const onDragging = (e) => {
    e.preventDefault();
  };

  const onDelClick = async (id) => {
    await deleteCategoryAPI(id);
    await getAllCategory();
  };

  const onVideoDrag = async(e,category, video) => {
    console.log(e);
    console.log(category);
    console.log(video);

    let stringData = JSON.stringify(video);
    console.log(stringData);
    e.dataTransfer.setData("videoFromCat", stringData);
    console.log(e);

    // let  newCategory=categoryData.filter((eachCategory)=>eachCategory?.id!=eachData)
    // console.log(newCategory)

    let newVideoArray=category.videos.filter((item)=>item.id!=video.id)  
    console.log(newVideoArray)
    let id=category.id
    
    let categoryName=category.categoryName
    let reqObj={
      id,categoryName,videos:newVideoArray
    }
    

    let result=await updateCategoryAPI(id,reqObj)
    console.log(result)
    await getAllCategory()
    
  };

  return (
    <>
      <div className="d-flex justify-content-around">
        <h1>All Categories</h1>
        <button onClick={handleShow} className="btn btn-primary rounded  ">
          +
        </button>
      </div>

      {categoryData?.length > 0 ? (
        <div className="container-fluid mt-3">
          {categoryData?.map((eachData, index) => (
            <div
              key={index}
              droppable="true"
              onDragOver={(e) => onDragging(e)}
              onDrop={(e) => onVideoDrop(e, eachData)}
              className="border rounded border-info card p-3 m-3"
            >
              <div className="d-flex justify-content-between">
                <h3>{eachData?.categoryName}</h3>
                <button
                  onClick={() => onDelClick(eachData.id)}
                  className="btn btn-primary rounded "
                >
                  <i className="fa-solid fa-trash text-danger"></i>
                </button>
              </div>
              <div>
                <div className="row">
                  {eachData?.videos?.map((eachVideo) => (
                    <div
                      draggable="true"
                      onDragStart={(e) =>
                        onVideoDrag(e, eachData.id, eachVideo)
                      }
                      className="col-5 ms-5 mt-3"
                    >
                      {" "}
                      <VideoCard
                        videos={eachVideo}
                        insideAllCategory={true}
                      />{" "}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-danger">No categories found</div>
      )}

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={true}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category Details!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="rounded p-3 m-2 border">
            <FloatingLabel
              controlId="floatingInputCategory"
              label="Category name"
              className="mb-1 w-100 "
            >
              <Form.Control
                onChange={(e) => setCategoryName(e.target.value)}
                type="text"
                placeholder="Category name"
              />
            </FloatingLabel>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={addCategoryCall} variant="secondary">
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AllCategories;
