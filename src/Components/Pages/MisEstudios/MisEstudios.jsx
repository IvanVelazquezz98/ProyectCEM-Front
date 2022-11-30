import React, { useState, useEffect } from "react";
import styles from './MisEstudios.module.css'


export default function MisEstudios({ user }) {


    const [daySelected, setDaySelected] = useState("")
    const [monthSelected, setMonthSelected] = useState("")
    const [filterUse, setFilterUse] = useState("")

    const allMonths = [{
        nombre: "Enero", id: 1},
    { nombre: "Febrero", id: 2 },
    { nombre: "Marzo", id: 3 },
    { nombre: "Abril", id: 4 },
    { nombre: "Mayo", id: 5 },
    { nombre: "Junio", id: 6 },
    { nombre: "Julio", id: 7 },
    { nombre: "Agosto", id: 8 },
    { nombre: "Septiembre", id: 9 },
    { nombre: "Octubre", id: 10 },
    { nombre: "Noviembre", id: 11 },
    { nombre: "Diciembre", id: 12 }]

    const allDays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
        17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]

    const handleSelectMonth = (e) => {
        e.preventDefault()
        setMonthSelected(e.target.value)
    }
    const handleSelectDay = (e) => {
        e.preventDefault()
        setDaySelected(e.target.value)
    }

    return (
        <div className={styles.flex}>
            <div className={styles.divContainerInfoStudy}>
                <div className={styles.divStudyFor}> Mis estudios por dia</div>
                <div className={styles.divStudyFor}> Mis estudios los ultimos 7 dias</div>
                <div className={styles.divStudyFor}> Mis estudios por mes</div>
            </div>
            <div className={styles.divFilter}>

                Filtros
                <div>
                    <select onChange={(e) => handleSelectMonth(e)} >
                        <option value="selected" >Mes</option>
                        {allMonths.map((m) => {
                            return (<option value={m.id} key={m.id}>{m.nombre}</option>)
                        })}
                    </select>
                    <select onClick={(e) => handleSelectDay(e)}>
                        <option value="selected" >Dia</option>
                        {allDays.map((d) => {
                            return (<option value={d} key={d}>{d}</option>)
                        })}
                    </select>
                </div>

            </div>
            <div className={styles.divResultFilters}>Resultados de los filtros

                <div className={styles.infoResultFilters}>
                    <p className={styles.textStudy}>Estudio</p> 
                    <button className={styles.buttonInfoResult}>Ver Mas</button>
                </div>
            </div>
        </div>
    )
}