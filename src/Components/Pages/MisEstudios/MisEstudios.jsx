import React, { useState, useEffect } from "react";
import styles from './MisEstudios.module.css'
import iconMas from '../../../Assets/iconMas.svg'
import ModalCreateStudy from "./ModalCreateStudy";
export default function MisEstudios({ user }) {

    const [ createStudy , setCreateStudy] = useState(false)

    const [input, setInput] = useState({
        name : "",
        method : "",
        reference : "",
        priority : "",
        files : "",
        notes : "",
        userId : user?.id,
        sedeId : user?.sede?.id
    })
  

    const handleCreateStudy = () => {
        setCreateStudy(true)

    }


    return (
        <div className={styles.flex}>
            <div className={styles.divCreateStudy}>
                <img onClick={(e) => handleCreateStudy(e)} className={styles.iconMas} src={iconMas} />
            </div>
            { createStudy ? <ModalCreateStudy user= {user} closeModal={setCreateStudy}/> : null}

            <div>Lista de estudios creados va abajo</div>
        </div>
    )
}