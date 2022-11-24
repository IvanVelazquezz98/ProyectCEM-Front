import React, { useState } from "react";
import styled from "styled-components";
import { Route, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import styles from './Home.module.css'
import SideBar from "../../SideBar/SideBar";

export default function Home() {


    return (
      
            <div className={styles.flex}>
            <SideBar/>
            <div className={styles.info}>Home</div>
            </div>
      

    )
}