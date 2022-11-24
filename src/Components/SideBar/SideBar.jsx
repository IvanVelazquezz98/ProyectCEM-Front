import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import styles from './SideBar.module.css'

export default function SideBar() {


    return (
        <div className={styles.sideBar} >
            <ul className={styles.ul}>
                <li className={styles.li}>
                    <Link className={styles.li} to="/home">Home</Link>
                </li>
                <li className={styles.li}>
                    <Link className={styles.li}  to="/perfil">Perfil</Link>
                </li>
                <li className={styles.li}>
                    <Link className={styles.li}  to="/userStudy">Mis Estudios</Link>
                </li>
                <li className={styles.li}>
                    <Link className={styles.li}  to="/study">Contador de estudios</Link>
                </li>
            </ul>

        </div>

    )
}