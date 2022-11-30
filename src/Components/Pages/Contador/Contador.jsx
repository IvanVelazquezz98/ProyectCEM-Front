
import styles from "./Contador.module.css"
import React, { useState, useEffect } from "react";
import iconMas from '../../../Assets/iconMas.svg'
import ModalCreateStudy from "./ModalCreateStudy";

export default function Contador({ user }) {

  const [createStudy, setCreateStudy] = useState(false)
  const [showClasificar, setShowClasificar] = useState(false)
  const [showNotas, setShowNotas] = useState(false)
  const [doppler, setDoppler] = useState(false)

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
  const clickClasificar = function (e) {
    setShowClasificar(!showClasificar);
  }
  const clickNotas = function (e) {
    setShowNotas(!showNotas);
  }
  const clickDoppler = function (e) {
    setDoppler(!doppler);
  }

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };



  const handleCreateStudy = () => {
    setCreateStudy(true)

  }

  return (
    <div className={styles.flex}>
      {/*  <div className={styles.divCreateStudy}>
            <img onClick={(e) => handleCreateStudy(e)} className={styles.iconMas} src={iconMas} />
        </div>
        { createStudy ? <ModalCreateStudy user= {user} closeModal={setCreateStudy}/> : null}

        <div>Lista de estudios creados va abajo</div> */}
      <span>fecha</span><span> hora</span><span>sede</span>
      <div>

        <button onClick={clickClasificar}>Clasificar</button><br />
        {showClasificar && <div>
          <input type="checkbox" name="BiRads III" /> BiRadsIII
          <input type="checkbox" name="BiRads III" /> BiRadsIV
          <input type="checkbox" name="BiRads III" /> BiRadsV
          <input type="checkbox" name="BiRads III" /> Otro

        </div>}
        <button onClick={clickNotas}>Notas</button>
        {showNotas && <div>
          <input type="text" placeholder="notas acerca del estudio" />
        </div>}
        <div>
          <button>Adjuntar Imagenes</button>
          <input name="Adjuntar Imagenes" type="file" hidden />
        </div>
      </div>
      <button onClick={clickDoppler}>Tiene Doppler</button>
      {doppler && <div>

        <button onClick={clickClasificar}>Clasificar</button><br />
        {showClasificar && <div>
          <input type="checkbox" name="BiRads III" /> BiRadsIII
          <input type="checkbox" name="BiRads III" /> BiRadsIV
          <input type="checkbox" name="BiRads III" /> BiRadsV
          <input type="checkbox" name="BiRads III" /> Otro

        </div>}
        <button onClick={clickNotas}>Notas</button>
        {showNotas && <div>
          <input type="text" placeholder="notas acerca del estudio" />
        </div>}
        <div>
          <button>Adjuntar Imagenes</button>
          <input name="Adjuntar Imagenes" type="file" hidden />
        </div>
      </div>}
      <button>sumar Eco</button>

    </div>
  )
}