import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import  './SideBar.css'
import Offcanvas from "react-bootstrap/Offcanvas";
import * as FaIcons from 'react-icons/ai'


export default function SideBar({handleChangeDrawer , user}) {
    const [show, setShow] = useState(false)
    const [sidebar, setSidebar] = useState(false)
    // const [drawer, setDrawer] = useState("MI PERFIL");
    const handleClose = () => setSidebar(false);
    const handleShow = () => setSidebar(true);

    let botonesUser = [
      "HOME",
      "MI PERFIL",
      "MIS ESTUDIOS",
      "CONTADOR DE ESTUDIOS"
    ];

    function handleSelectInfo(e){
      handleChangeDrawer(e.target.value)
      handleClose()
    }
    
    return (
        
        <div>
            <div className="buttonContainer">
        <button className="FilterButton" onClick={handleShow}>
          <FaIcons.AiOutlineBars/>
        </button>
      </div>
        <Offcanvas
        className="OffMainContainer"
        show={sidebar}
        onHide={handleClose}
      >
        <Offcanvas.Header className="sideBarTitle" closeButton>
          <Offcanvas.Title className="offTitle">
            {" "}
            ¡Que gran dia {user.name}!
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body className="sideBar">
          <div className="sideBar">
            {botonesUser.map((btn) => (
                  <div className="buttonSideBar">
                    <button className='textButton' key={btn} value={btn} onClick={(e) => handleSelectInfo(e)}>
                      {btn}
                    </button>
                  </div>))}
            
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      </div>

    )
}