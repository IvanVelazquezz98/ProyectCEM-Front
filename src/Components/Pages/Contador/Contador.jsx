
import styles from "./Contador.module.css"
import React, { useState, useEffect } from "react";
import ModalCreateStudy from "./ModalCreateStudy";
import { createStudy } from "../../../Redux/Actions";
import { useDispatch } from "react-redux";

export default function Contador({ user }) {
  const dispatch = useDispatch()
  const [createStudy, setCreateStudy] = useState(false)
  const [showClasificar, setShowClasificar] = useState(false)
  const [showNotas, setShowNotas] = useState(false)
  const [showFiles, setShowFiles] = useState(false)
  const [doppler, setDoppler] = useState(false)
  const [sedeSelected, setSedeSelected] = useState(window.localStorage.getItem('sedeSelected') || null)
  const [status, setStatus] = useState(false)
  //estados del segundo form abajo
  const [showClasificarTwo, setShowClasificarTwo] = useState(false)
  const [showNotasTwo, setShowNotasTwo] = useState(false)
  const [showFilesTwo, setShowFilesTwo] = useState(false)
  const [statusTwo, setStatusTwo] = useState(false)
  console.log('sedename', user.sedeName)
  const [input, setInput] = useState({
    reference: "",
    status: "",
    clasification: "normal",//clasification es lo de las checkbox raras
    notes: "",
    userId: user?.id,
    sedeName: user?.sedeName
  })
  const [input2, setInput2] = useState({
    reference: "",
    status: "",
    clasification: "normal",
    notes: "",
    userId: user?.id,
    sedeName: user?.sedeName
  })

  const [imageOne, setImageOne] = useState({
    file: [""]
  })
  const [imageTwo, setImageTwo] = useState({
    file: [""]
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
  const clickFiles = () => {
    setShowFiles(!showFiles)
  }
  //funciones para desbloquear las pestañas del srgundo form abajo
  const clickClasificarTwo = function (e) {
    setShowClasificarTwo(!showClasificarTwo);
  }
  const clickStatusTwo = function (e) {
    setStatusTwo(!statusTwo);
  }
  const clickNotasTwo = function (e) {
    setShowNotasTwo(!showNotasTwo);
  }
  const clickFilesTwo = () => {
    setShowFilesTwo(!showFilesTwo)
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



  //creador de un solo estudio
  const handleCreateStudy = () => {
    let date = new Date()
    let studyEco = {
      method: "ecografia",
      reference: "",
      status: input.status,
      clasification: input.clasification,
      files: imageOne.file,
      notes: input.notes,
      date: date,
      userId: user?.id,
      sedeName: user?.sede?.name
    }
    dispatch(createStudy({study: studyEco}))
  }
  //creador de dos estudios
  const handleCreateStudyTwo = () => {
    let date = new Date()
    let studyEco = {
      method: "ecografia",
      reference: "",
      status: input.status,
      clasification: input.clasification,
      files: imageOne.file,
      notes: input.notes,
      date: date,
      userId: user?.id,
      sedeName: user?.sede?.name
    }
    let studyDoppler = {
      method: "doppler",
      reference: "",
      status: input2.status,
      clasification: input2.clasification,
      files: imageTwo.file,
      notes: input2.notes,
      date: date,
      userId: user?.id,
      sedeName: user?.sede?.name
    }
    dispatch(createStudy({study: {studyEco ,studyDoppler}}))

  }
  console.log('input1', input)
  console.log('input2', input2)
  //FALTA HACER EL MAP CUANDO TENGA MAS DE UNA SEDE
  return (
    <div className={styles.flex}>

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
            <input onClick={(e) => handleInputChange(e)} className={styles.inputClasification} type="checkbox" name="clasification" value="normal" /><p className={styles.inputClasificationText}>Normal</p>
            <input onClick={(e) => handleInputChange(e)} className={styles.inputClasification} type="checkbox" name="clasification" value="BiRadsIII" /><p className={styles.inputClasificationText}>BiRadsIII</p>
            <input onClick={(e) => handleInputChange(e)} className={styles.inputClasification} type="checkbox" name="clasification" value="BiRadsIV" /><p className={styles.inputClasificationText}>BiRadsIV</p>
            <input onClick={(e) => handleInputChange(e)} className={styles.inputClasification} type="checkbox" name="clasification" value="BiRadsV" /><p className={styles.inputClasificationText}>BiRadsV</p>
            <input onClick={(e) => handleInputChange(e)} className={styles.inputClasification} type="checkbox" name="clasification" value="otro" /><p className={styles.inputClasificationText}>Otro</p>

          </div>}
        </div>

        <div className={styles.divNotes}>
          <button className={styles.button} onClick={clickNotas}>Notas</button>
          {showNotas && <div className={styles.divInputNotes}>
            <textarea className={styles.inputNotes} name="notes" onChange={(e) => handleInputChange(e)} type="text" placeholder="Notas acerca del estudio" />
          </div>}
        </div>


        <div className={styles.divImages}>
          <button onClick={clickFiles} className={styles.button}>Adjuntar Imagenes</button>
          {showFiles ? <input onChange={(e) => handleInputChange(e)} className={styles.inputImage} name="Adjuntar Imagenes" type="file" value="" /> : null}
        </div>

        <div className={styles.divClasification}>
          <button className={styles.button} onClick={clickStatus}>Estado</button>
          {status && <div className={styles.divInputStatus}>
            Finalizado<input onClick={(e) => handleInputChange(e)} className={styles.inputStatus} type="checkbox" name="status" value="finalizado" />
            Pendiente<input onClick={(e) => handleInputChange(e)} className={styles.inputStatus} type="checkbox" name="status" value="pendiente" />

          </div>}
        </div>

        <div className={styles.divSelectDopler}>
          <button className={styles.button} onClick={clickDoppler}>Tiene Doppler</button>
        </div>{doppler ? null : <div><button className={styles.button} onClick={(e) => handleCreateStudy(e)} >Crear estudio</button></div>} </div> : null}

      {doppler && <div className={styles.divFormContainer}>

        <div className={styles.divClasification}>
          <button className={styles.button} onClick={clickClasificarTwo}>Clasificar</button>
          {showClasificarTwo && <div className={styles.divInputClasification}>
            <input onClick={(e) => handleInput2Change(e)} className={styles.inputClasification} type="checkbox" name="clasification" value="normal" /><p className={styles.inputClasificationText}>Normal</p>
            <input onClick={(e) => handleInput2Change(e)} className={styles.inputClasification} type="checkbox" name="clasification" value="BiRadsIII" /><p className={styles.inputClasificationText}>BiRadsIII</p>
            <input onClick={(e) => handleInput2Change(e)} className={styles.inputClasification} type="checkbox" name="clasification" value="BiRadsIV" /><p className={styles.inputClasificationText}>BiRadsIV</p>
            <input onClick={(e) => handleInput2Change(e)} className={styles.inputClasification} type="checkbox" name="clasification" value="BiRadsV" /><p className={styles.inputClasificationText}>BiRadsV</p>
            <input onClick={(e) => handleInput2Change(e)} className={styles.inputClasification} type="checkbox" name="clasification" value="otro" /><p className={styles.inputClasificationText}>Otro</p>

          </div>}
        </div>

        <div className={styles.divNotes}>
          <button className={styles.button} onClick={clickNotasTwo}>Notas</button>
          {showNotasTwo && <div className={styles.divInputNotes}>
            <textarea onChange={(e) => handleInput2Change(e)} className={styles.inputNotes} name="notes" type="text" placeholder="notas acerca del estudio" />
          </div>}
        </div>


        <div className={styles.divImages}>
          <button onClick={clickFilesTwo} className={styles.button}>Adjuntar Imagenes</button>
          {showFilesTwo ? <input onChange={(e) => handleInput2Change(e)} className={styles.inputImage} name="Adjuntar Imagenes" type="file" value="" /> : null}
        </div>

        <div className={styles.divClasification}>
          <button className={styles.button} onClick={clickStatusTwo}>Estado</button>
          {statusTwo && <div className={styles.divInputStatus}>
            Finalizado<input onClick={(e) => handleInput2Change(e)} className={styles.inputStatus} type="checkbox" name="status" value="finalizado" />
            Pendiente<input onClick={(e) => handleInput2Change(e)} className={styles.inputStatus} type="checkbox" name="status" value="pendiente" />

          </div>}
        </div>

        <div className={styles.divSelectDopler}>
          <button className={styles.button} onClick={clickDoppler}>No Tiene Doppler</button>
        </div><div><button className={styles.button} onClick={(e) => handleCreateStudyTwo(e)} >Crear estudios</button></div> </div>}

    </div>

  )
}