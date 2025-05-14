import React, { useState } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import { uploadVideoAPI } from "../services/allAPI";

const Add = ({ setAddVidResponse }) => {
  const [InvalidYtLink, setInvalidYtLink] = useState(false);
  const [videoDetails, setVideoDetails] = useState({
    caption: "",
    imageURL: "",
    ytLink: "",
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onAddClick = async () => {
    // console.log(videoDetails)
    if (videoDetails.caption && videoDetails.imageURL && videoDetails.ytLink) {
      let result = await uploadVideoAPI(videoDetails);
      console.log(result);
      if (result.status >= 200 && result.status <= 300) {
        setAddVidResponse(result);
        alert("Succesfully added your video");
        handleClose();
      } else {
        alert("Something went wrong! please conatct admin");
      }
    } else {
      alert("Please fill the form");
    }
  };

  const convertToID = (videoURL) => {
    if (videoURL.includes(".be/")) {
      let videoID = videoURL.slice(17, 28);
      console.log(videoID);

      setVideoDetails({
        ...videoDetails,
        ytLink: `https://www.youtube.com/embed/${videoID}`,
      });
    } else {
      setInvalidYtLink(true);
      console.error("Invalid youtube link");
    }
  };
  return (
    <>
      <div className="d-flex align-items-center ">
        <h1>Upload Vidoes</h1>
        <button onClick={handleShow} className="btn btn-primary rounded  ">
          +
        </button>
      </div>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={true}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Video Details!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="rounded p-3 m-2 border">
            <FloatingLabel
              controlId="floatingInputCaption"
              label="Video caption"
              className="mb-1 w-100 "
            >
              <Form.Control
                onChange={(e) =>
                  setVideoDetails({ ...videoDetails, caption: e.target.value })
                }
                type="text"
                placeholder="Video caption"
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInputURL"
              label="Video image URL"
              className="mb-1 w-100 "
            >
              <Form.Control
                onChange={(e) =>
                  setVideoDetails({ ...videoDetails, imageURL: e.target.value })
                }
                type="text"
                placeholder="Video image URL"
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInputLink"
              label="Youtube video link"
              className="mb-1 w-100 "
            >
              <Form.Control
                onChange={(e) => convertToID(e.target.value)}
                type="text"
                placeholder="Video link"
              />
            </FloatingLabel>
            {InvalidYtLink ? (
              <span className="text-danger">Invalid youtube link</span>
            ) : (
              " "
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
          <Button
            disabled={InvalidYtLink}
            onClick={onAddClick}
            variant="secondary"
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Add;
