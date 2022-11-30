import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from './ModalCreateStudy.module.css'

export default function ModalCreateStudy({ user, closeModal }) {
  const [show, setShow] = useState(true);
  const [input, setInput] = useState({
    name: "",
    method: "",
    reference: "",
    priority: "",
    files: "",
    notes: "",
    userId: user?.id,
    sedeId: user?.sede?.id
  })
  console.log('input', input)

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  const handleAddStudy = () => {


  }

  return (
    <Modal show={show}>
      <Modal.Header closeButton onClick={() => closeModal()} >
        <Modal.Title> Crear Estudio </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <form >
            <div className={styles.firstDiv}>
              <div className={styles.inputContainer}>
                <label className={styles.text}> Nombre : </label>
                <input className={styles.input}
                  value={input.name}
                  type="text"
                  name='name'
                  maxLength='60'
                  minLength='8'
                  placeholder="Nombre del pais"
                  onChange={(e) => handleInputChange(e)}
                />

                <label className={styles.text} >Descripción :</label>
                <input className={styles.input}
                  placeholder="Descripcion"
                  type="textarea"
                  name='descripcion'
                  value={input.descripcion}
                  onChange={(e) => handleInputChange(e)}></input>


                <label className={styles.text} >Foto de perfil
                  *url :</label>
                <input className={styles.input} type="url"
                  value={input.continent}
                  name='imagen_profile'
                  placeholder="Imagen de perfil"
                  onChange={(e) => handleInputChange(e)} />

              </div>
              <button className={styles.button} onClick={(e) => handleAddStudy(e)}>Crear </button>
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
}