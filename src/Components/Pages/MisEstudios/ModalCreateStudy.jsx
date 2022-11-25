import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function ModalCreateStudy({ user, closeModal }) {
  const [show, setShow] = useState(true);
  
  
  return (
      <Modal show={show}>
        <Modal.Header closeButton onClick={() =>  closeModal()} >
          <Modal.Title> Crear Estudio </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div></div>
        </Modal.Body>
      </Modal>
  );
}