import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "next/image";
import modstyles from "../styles/ClubInfo.module.css";
function ModelComp({ certpath }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        View Certificate
      </Button>

      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            {/* <Modal.Title> <h4> Modal heading</h4></Modal.Title> */}
            <h4> Modal heading </h4>
          </Modal.Header>
        <div className={modstyles.mainModContainer}>
          <Modal.Body className={modstyles.modalContent}>
            <div className={modstyles.certificationImage}>
              <Image src={certpath} layout="fill" alt="Image" />
            </div>
          </Modal.Body>
          <Modal.Body>
            <div className={modstyles.description}>This is the description</div>{" "}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
}

export default ModelComp;
