import React, { useState , useEffect } from "react";
import styled from "styled-components";
import { Route, useNavigate } from "react-router-dom";
import { useDispatch,  useSelector } from "react-redux";
import { getUser } from "../../Redux/Actions";
import Perfil from '../Pages/Perfil/Perfil'
import MisEstudios from '../Pages/MisEstudios/MisEstudios'
import ContadorDeEstudios from '../Pages/Contador/Contador'
import axios from "axios";
import styles from './Notes.module.css'
import ModalNotes from './ModalNotes'

export default function Notes() {

    const [user, setUser] = useState(window.localStorage.getItem('user') || null)
    const [notesDay , setNotesDay] = useState(window.localStorage.getItem('notesDay') || null)
    const [notesNext , setNotesNext] = useState(window.localStorage.getItem('notesNext') || null)
    const [createNoteDay , setCreateNoteDay] = useState(false)
    const [createNoteNext , setCreateNoteNext] = useState(false)
    
  console.log('notas next' , notesNext)
  console.log('notasday' , notesDay)


      const handleDeleteNoteDay = () => {
        localStorage.removeItem('notesDay')
          return   window.location.reload();
     
            
      }
      const handleDeleteNoteNext = () => {
        
            localStorage.removeItem('notesNext')
           return window.location.reload();
        
            
      }
      
      
      //cambiar el apartado de notas para q no quede tan desordenado

    return (
    
    
           
                

                

             <div className={styles.info}>
                
                <div className={styles.divNotes}>
                    
               
                        <div className={styles.noteEnterContainer}>
                    <h4 className={styles.titleNotes}>Nota de hoy</h4>
                        <div className={styles.noteContainer}>

                        <h5 className={styles.note}>{notesDay}...</h5>
                        </div>
                        <div className={styles.buttonContainer}  >
                           {notesDay ? <div className={styles.buttonDeleteNoteContainer}><div className={styles.buttonContainer}>
                            <p onClick={(e) => handleDeleteNoteDay(e)} className={styles.buttonDeleteNote}>🗑️</p> </div></div> :
                            <button className={styles.buttonCreateNote} onClick={() => setCreateNoteDay(true)}>Crear Nota</button>} 
                        </div>
                        </div>
                 

                    <div className={styles.noteEnterContainer}>
                        <h4 className={styles.titleNotes}>Nota Proxima</h4>
                        <div className={styles.noteContainer}>
                        <h5 className={styles.note}>{notesNext}...</h5>
                        </div>
                        <div className={styles.buttonContainer} >
                        {notesNext ? <div className={styles.buttonDeleteNoteContainer}><div >
                            <p className={styles.buttonDeleteNote} onClick={(e) => handleDeleteNoteNext(e)}>🗑️</p> </div></div> :
                            <button className={styles.buttonCreateNote} onClick={() => setCreateNoteNext(true)}>Crear Nota</button>} 
                        </div>
                      
                    </div>
                    </div>
                    {createNoteDay ? <ModalNotes note={createNoteDay}  closeModal={setCreateNoteDay} /> : null}
            {createNoteNext ? <ModalNotes  closeModal={setCreateNoteNext}  /> : null}
                </div>
            
            

           
            
      

    )
}