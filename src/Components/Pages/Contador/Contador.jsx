
import styles from "./Contador.module.css"
import React, { useState, useEffect } from "react";
import iconMas from '../../../Assets/iconMas.svg'
import ModalCreateStudy from "./ModalCreateStudy";

export default function Contador({ user }) {

  const [createStudy, setCreateStudy] = useState(false)
  const [showClasificar, setShowClasificar] = useState(false)
  const [showNotas, setShowNotas] = useState(false)
  const [doppler, setDoppler] = useState(false)
  const [sedeSelected, setSedeSelected] = useState(window.localStorage.getItem('sedeSelected') || null)
  const [status , setStatus] = useState(false)
  const [input, setInput] = useState({
    method: "",
    reference: "",
    status:"",
    priority: "",//priority es lo de las checkbox raras
    files: "",
    notes: "",
    userId: user?.id,
    sedeId: user?.sede?.id
  })
  const [input2 , setInput2] = useState({
    method: "",
    reference: "",
    status:"",
    priority: "",//priority es lo de las checkbox raras
    files: "",
    notes: "",
    userId: user?.id,
    sedeId: user?.sede?.id
  })
  console.log('input', input)

  const clickClasificar = function (e) {
    setShowClasificar(!showClasificar);
  }
  const clickStatus = function (e) {
    setStatus(!status);
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
  const handleInput2Change = function (e) {
    setInput2({
      ...input2,
      [e.target.name]: e.target.value,
    });
  };

  const handleSedeSelected = (e) => {
    setSedeSelected(e)
    window.localStorage.setItem("sedeSelected", e)
  }

  console.log('sede selected', sedeSelected)


//creador de un solo estudio
  const handleCreateStudy = () => {


  }
//creador de dos estudios
  const handleCreateStudys = () => {

  }
  return (
    <div className={styles.flex}>
      {/* <span>fecha</span><span> hora</span><span>sede</span> */}
      <div className={styles.divContainerSede}>
        <h5>Seleccionar sede : </h5>
        <select className={styles.inputSelectSede} onChange={(e) => handleSedeSelected(e.target.value)}>
          {sedeSelected ? <><option value={user.sede.name} key={user.sede.id}>{window.localStorage.getItem('sedeSelected')}</option>
          </> :
            <><option value={null}> Seleccionar sede..</option>
              <option value={user.sede.name} key={user.sede.id}>{user.sede.name}</option></>}
        </select>
      </div>

      {sedeSelected ? <div className={styles.divFormContainer}>

        <div className={styles.divClasification}>
          <button className={styles.button} onClick={clickClasificar}>Clasificar</button>
          {showClasificar && <div className={styles.divInputClasification}>
          <input onClick={(e) => handleInputChange(e)} className={styles.inputClasification} type="checkbox" name="priority" value="BiRadsIII" /> BiRadsIII
            <input onClick={(e) => handleInputChange(e)} className={styles.inputClasification} type="checkbox" name="priority" value="BiRadsIV"/> BiRadsIV
            <input onClick={(e) => handleInputChange(e)} className={styles.inputClasification} type="checkbox" name="priority" value="BiRadsV" /> BiRadsV
            <input onClick={(e) => handleInputChange(e)} className={styles.inputClasification} type="checkbox" name="priority" value="otro" /> Otro

          </div>}
        </div>

        <div className={styles.divNotes}>
          <button className={styles.button} onClick={clickNotas}>Notas</button>
          {showNotas && <div className={styles.divInputNotes}>
            <textarea className={styles.inputNotes} name="notes" onChange={(e) =>handleInputChange(e)} type="text" placeholder="Notas acerca del estudio" />
          </div>}
        </div>


        <div className={styles.divImages}>
          <button className={styles.button}>Adjuntar Imagenes</button>
          <input onChange={(e) => handleInputChange(e)} className={styles.inputImage} name="Adjuntar Imagenes" type="file" value=""  />
        </div>

        <div className={styles.divClasification}>
          <button className={styles.button} onClick={clickStatus}>Estado</button>
          {status && <div className={styles.divInputClasification}>
            <input onClick={(e) => handleInputChange(e)} className={styles.inputClasification} type="checkbox" name="status" value="finalizado" /> Finalizado
            <input onClick={(e) => handleInputChange(e)} className={styles.inputClasification} type="checkbox" name="status" value="pendiente"/> Pendiente

          </div>}
        </div>

        <div className={styles.divSelectDopler}>
          <button className={styles.button} onClick={clickDoppler}>Tiene Doppler</button>
        </div>{ doppler? null : <div><button className={styles.button} onClick={(e) => handleCreateStudy(e)} >Crear estudio</button></div>} </div> : null}

      {doppler && <div className={styles.divFormContainer}>

        <div className={styles.divClasification}>
          <button className={styles.button} onClick={clickClasificar}>Clasificar</button>
          {showClasificar && <div className={styles.divInputClasification}>
            <input onClick={(e) => handleInput2Change(e)} className={styles.inputClasification} type="checkbox" name="priority" value="BiRadsIII" /> BiRadsIII
            <input onClick={(e) => handleInput2Change(e)} className={styles.inputClasification} type="checkbox" name="priority" value="BiRadsIV"/> BiRadsIV
            <input onClick={(e) => handleInput2Change(e)} className={styles.inputClasification} type="checkbox" name="priority" value="BiRadsV" /> BiRadsV
            <input onClick={(e) => handleInput2Change(e)} className={styles.inputClasification} type="checkbox" name="priority" value="otro" /> Otro

          </div>}
        </div>

        <div className={styles.divNotes}>
          <button className={styles.button} onClick={clickNotas}>Notas</button>
          {showNotas && <div className={styles.divInputNotes}>
            <textarea onChange={(e) => handleInput2Change(e)} className={styles.inputNotes} type="text" placeholder="notas acerca del estudio" />
          </div>}
        </div>


        <div className={styles.divImages}>
          <button className={styles.button}>Adjuntar Imagenes</button>
          <input onChange={(e) => handleInput2Change(e)} className={styles.inputImage} name="Adjuntar Imagenes" type="file" value=""  />
        </div>

        <div className={styles.divClasification}>
          <button className={styles.button} onClick={clickStatus}>Estado</button>
          {status && <div className={styles.divInputClasification}>
            <input onClick={(e) => handleInput2Change(e)} className={styles.inputClasification} type="checkbox" name="status" value="finalizado" /> Finalizado
            <input onClick={(e) => handleInput2Change(e)} className={styles.inputClasification} type="checkbox" name="status" value="pendiente"/> Pendiente

          </div>}
        </div>

        <div className={styles.divSelectDopler}>
          <button className={styles.button} onClick={clickDoppler}>No Tiene Doppler</button>
        </div><div><button className={styles.button} onClick={(e) => handleCreateStudys(e)} >Crear estudios</button></div> </div>}

    </div>

  )
}