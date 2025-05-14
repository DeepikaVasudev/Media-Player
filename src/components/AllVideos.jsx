import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { Col, Row } from "react-bootstrap";
import { getVideoAPI, uploadVideoAPI } from "../services/allAPI";

const AllVideos = ({ addVidResponse, deleteVideoResponse }) => {
  console.log("first");

  const [videosData, setVideosData] = useState([]);
  const [deleteVideoRes, setDeleteVideoRes] = useState([]);
  console.log(deleteVideoResponse);

  useEffect(() => {
    getVideos();
  }, [addVidResponse, deleteVideoRes, deleteVideoResponse]);

  const getVideos = async () => {
    let result = await getVideoAPI();
    if (result.status >= 200 && result.status <= 300) {
      setVideosData(result.data);
      console.log(result);
    } else {
      alert("Error fetching video data");
    }
  };

  const onDragVideo = (e) => {
    e.preventDefault();
  };

  const onVideoDrop = async (e) => {
    console.log(e);
    let VideoData = JSON.parse(e.dataTransfer.getData("videoFromCat"));
    console.log(VideoData);
    await uploadVideoAPI(VideoData);
    await getVideos();
  };

  return (
    <>
      <h1>All Videos</h1>

      <Row
        className="border-light rounded p-2 "
        droppable="true"
        onDragOver={(e) => onDragVideo(e)}
        onDrop={(e) => onVideoDrop(e)}
      >
        {videosData?.map((eachVideo, index) => (
          <Col key={index} className="mt-3" lg={4} md={6} sm={12}>
            <VideoCard
              videos={eachVideo}
              setDeleteVideoRes={setDeleteVideoRes}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default AllVideos;
