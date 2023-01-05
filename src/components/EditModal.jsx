import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import EditForm from "./EditForm";
import { FaUserEdit } from "react-icons/fa";

const EditModal = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} size="sm">
        <FaUserEdit className="pb-1" />
        Edit
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm
            name={props.name}
            price={props.price}
            description={props.description}
            id={props.id}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditModal;
