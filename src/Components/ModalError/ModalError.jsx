import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function ModalError({ error, closeModal }) {
  const [show, setShow] = useState(true);
  
  
  return (
      <Modal show={show}>
        <Modal.Header closeButton onClick={() =>  closeModal()} >
          <Modal.Title> Ups! Error ⚠️ </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>{error}</div>
        </Modal.Body>
      </Modal>
  );
}