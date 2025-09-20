import { PlusLg } from "react-bootstrap-icons";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const AddAlbum = () => {
  const addAlbum = () => {
    alert("Add Album Clicked");
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="d-flex flex-column align-items-center mb-4">
        <div
          onClick={handleShow}
          className="d-flex justify-content-center align-items-center mb-2"
          style={{
            width: "100%",
            aspectRatio: "1 / 1",
            objectFit: "contain",
            borderRadius: "0.5rem",
            background: "#f8f9fa",
          }}
        >
          <PlusLg
            size="48%"
            className="text-secondary"
            style={{ width: "48%", height: "48%" }}
          />
        </div>
        <div
          className="album-info-card shadow-sm bg-white rounded-bottom w-100 text-center px-2 pt-1 pb-2"
          style={{
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            marginTop: "-0.5rem",
            zIndex: 1,
            position: "relative",
          }}
        >
          <h1 className="h6 fw-semibold mb-0" style={{ fontSize: "1rem" }}>
            The Life of Pablo
          </h1>
          <div
            className="text-secondary"
            style={{ fontSize: "0.85rem", lineHeight: 1 }}
          >
            ¥$, Kanye West & Ty Dolla $ign
          </div>
          <div
            className="text-muted"
            style={{ fontSize: "0.8rem", lineHeight: 1 }}
          >
            2024
          </div>
        </div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Do not even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
