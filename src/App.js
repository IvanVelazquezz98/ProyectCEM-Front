import React, { FunctionComponent } from 'react';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import Login from "./Components/Login/Login"
import Register from "./Components/Register/Register"
import Home from './Components/Home/Home'
import Perfil from './Components/Pages/Perfil/Perfil'
import Contador from './Components/Pages/Contador/Contador'
import MisEstudios from './Components/Pages/MisEstudios/MisEstudios'



const App= (props) => {
  return (
    <>
    <Routes>
    <Route path="/home" element={<Home/>}/>
    <Route exact path="/login" element={<Login/>} />
    <Route exact path="/register" element={<Register/>} /> 
    <Route path="/perfil" element={<Perfil/>}/>
    <Route path="/userStudy" element={<MisEstudios/>}/>
    <Route path="/study" element={<Contador/>}/>
    </Routes>
    
    </>
  );
}



export default App;
