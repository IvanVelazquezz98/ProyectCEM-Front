import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStudyForUser, filteredStudies } from "../../../Redux/Actions";
import styles from './MisEstudios.module.css'


export default function MisEstudios({ user }) {

    const userId = user.id
    const dispatch = useDispatch();
    const userStudys = useSelector((state) => state.userStudys)
    const [dataFilter, setDataFilter] = useState({})
    const [studyForDay, setStudyForDay] = useState(null)
    const [studyForWeek, setStudyForWeek] = useState(null)
    const [studyForMonth, setStudyForMonth] = useState(null)
    const [fechaActual, setFechaActual] = useState(new Date())
    const [daySelected, setDaySelected] = useState("")
    const [monthSelected, setMonthSelected] = useState("")
    const [filterUse, setFilterUse] = useState("")
    const [valueCheckBox, setValueCheckBox] = useState("normal")
    //const [filters, setFilters] = useState({dayFilter, monthFilter, classificationFilter})
    const allClasification = ["Normal", "BiRadsIII", "BiRadsIV", "BiRadsV", "Otro"]


    useEffect(() => {
        dispatch(getStudyForUser(userId))
        filtersStudysFor()
    }, []);

    let filters = {
        userId,
        daySelected,
        monthSelected,
        valueCheckBox
    }

    const filtersStudysFor = () => {


        let dayActual = fechaActual.getDate()
        let weekActual = fechaActual.getDay()
        let monthActual = fechaActual.getMonth() + 1


        let FilterDay = userStudys.map((study) => (study.date[5] && study.date[6] == dayActual))
        setStudyForDay(FilterDay.length)

        let filterWeek = ""

        // let filterMonth = userStudys.map((study) => ())
        console.log('date entero', fechaActual)
        console.log('dia actual', dayActual)

    }

    const allMonths = [{
        nombre: "Enero", id: 1
    },
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

    const allDays = [1, 2, 3, 4, 5,
        6, 7, 8, 9, 10, 11, 12, 13,
        14, 15, 16, 17, 18, 19, 20, 21,
        22, 23, 24, 25, 26, 27, 28, 29,
        30, 31]

    const handleSelectMonth = (e) => {
        e.preventDefault()
        setMonthSelected(e.target.value)
        dispatch(filteredStudies(filters))
    }
    const handleSelectDay = (e) => {
        e.preventDefault()
        setDaySelected(e.target.value)
        dispatch(filteredStudies(filters))
    }

    const handleSelectCheckbox = (e) => {
        setValueCheckBox(e.target.value)
        dispatch(filteredStudies(filters))
    }
    console.log(filters)

    return (
        <div className={styles.flex}>
            <div className={styles.divContainerInfoStudy}>
                <div className={styles.divStudyFor}>Estudios Creados Hoy: {studyForDay ? <p>{studyForDay}</p> : <p>No tienes estudios..</p>}</div>
                <div className={styles.divStudyFor}>Estudios creados esta semana: {studyForWeek ? <p>{studyForWeek}</p> : <p>No tienes estudios..</p>}</div>
                <div className={styles.divStudyFor}>Estudios creados este mes: {studyForDay ? <p>{studyForMonth}</p> : <p>No tienes estudios..</p>}</div>
            </div>
            <div className={styles.divFilter}>

                <div className={styles.filterTitle}>Filtros</div>
                <div className={styles.divInputFilter}>
                    <select className={styles.inputFilter} onChange={(e) => handleSelectMonth(e)} >
                        <option className={styles.inputFilter} value="selected" >Mes</option>
                        {allMonths.map((m) => {
                            return (<option className={styles.inputFilter} value={m.id} key={m.id}>{m.nombre}</option>)
                        })}
                    </select>
                    <select className={styles.inputFilter} onClick={(e) => handleSelectDay(e)}>
                        <option className={styles.inputFilter} value="selected" >Dia</option>
                        {allDays.map((d) => {
                            return (<option className={styles.inputFilter} value={d} key={d}>{d}</option>)
                        })}
                    </select>

                    <div className={styles.filterDivCheckBox}>
                        <select className={styles.inputFilter} onClick={(e) => handleSelectCheckbox(e)}>
                            <option className={styles.inputFilter} value="selected" >Clasificacion</option>
                            {allClasification.map((clas) => {
                                return (<option className={styles.inputFilter} value={clas} key={clas}>{clas}</option>)
                            })}
                        </select>
                    </div>


                </div>

            </div>
            <div className={styles.divResultFilters}>Resultados de los filtros

                {userStudys ?
                    userStudys.map((study) => {
                        return (<div className={styles.infoResultFilters} key={study.id}> <p className={styles.textStudy}>{study.method}</p>
                            <button className={styles.buttonInfoResult}>Ver Mas</button></div>)
                    }) :
                    <p>Loading..</p>}


            </div>
        </div>
    )
}