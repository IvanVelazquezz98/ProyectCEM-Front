import React, { useState , useEffect } from "react";
import styled from "styled-components";
import { Route, useNavigate } from "react-router-dom";
import { useDispatch,  useSelector } from "react-redux";
import { getUser } from "../../Redux/Actions";
import Perfil from '../Pages/Perfil/Perfil'
import MisEstudios from '../Pages/MisEstudios/MisEstudios'
import ContadorDeEstudios from '../Pages/Contador/Contador'
import axios from "axios";
import styles from './Home.module.css'
import SideBar from "../SideBar/SideBar";
import Notes from '../Notes/Notes'

export default function Home() {
    const [drawer , setDrawer] = useState("HOME")
    const [user, setUser] = useState(window.localStorage.getItem('user') || null)
    const [day , setDay] = useState(new Date())
    const [notesDay , setNotesDay] = useState(window.localStorage.getItem('notesDay') || null)
    const detailUser = useSelector((state) => state.userInfo)
    
    const navigate = useNavigate()

    const dispatch = useDispatch()

    function handleRedirectLogin(){

        navigate('/register')
    }
    useEffect(() => {
        
        if(!user){return  handleRedirectLogin()}

        dispatch(getUser(user))

      }, []);
    
      
      
      //cambiar el apartado de notas para q no quede tan desordenado
     
      console.log(detailUser)
    console.log(drawer)
    return (<>
    
            <div className={styles.navBar}> <p className={styles.titleNavbar}>Contador de ecos y mas</p> <p className={styles.titleDate} >{day.getDate()} / {day.getMonth() + 1}</p> </div>
                
            <div className={styles.flex}>
                
            <SideBar user={detailUser} handleChangeDrawer={setDrawer}/>

            {drawer === "HOME" ? <div className={styles.info}><Notes note={notesDay}/></div>: null }
            {/* {createNoteDay ? <Notes note={createNoteDay}  closeModal={setCreateNoteDay} /> : null}
            {createNoteNext ? <Notes  closeModal={setCreateNoteNext}  /> : null} */}

            {drawer === "MIS ESTUDIOS" ? <div className={styles.info}><MisEstudios user={detailUser}/></div> : null}


            {drawer === "MI PERFIL" ? <div className={styles.info}><Perfil user={detailUser}/></div> : null}


            {drawer === "CONTADOR DE ESTUDIOS" ? <div className={styles.info}><ContadorDeEstudios user={detailUser}/></div> : null}
            </div>
            </>
      

    )
}