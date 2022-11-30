import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import styles from  './Notes.module.css'

export default function ModalError({note , closeModal }) {
    const [show, setShow] = useState(true);
    const [notesDay , setNotesDay] = useState("")
    const [notesNext , setNotesNext] = useState("")
  
    const handleCreateNotePush = () => {
        if(note){
            window.localStorage.setItem("notesDay", notesDay)
            return window.location.reload()
        }
        if(!note){
            window.localStorage.setItem("notesNext", notesNext)
            return window.location.reload()
        }
        
       return closeModal()
    }
    console.log('input' , notesDay)
    const handleCreateNote = (e) => {
        if(note){
           setNotesDay(e.target.value);
        }
        if(!note){
           setNotesNext(e.target.value);
        }
      }
  return (
      
      <Modal show={show}>
      <Modal.Header closeButton onClick={() =>  closeModal()} >
        <Modal.Title> Crear nota </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
        <form>
            <textarea type="text" onChange={(e) => handleCreateNote(e)}></textarea>
        </form>
        <button className={styles.buttonCreateNote} onClick={(e) => handleCreateNotePush(e)}>Crear</button>
      </div>
      </Modal.Body>
    </Modal>
  );
}