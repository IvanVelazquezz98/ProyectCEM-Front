import React, { FunctionComponent } from 'react';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import Login from "./Components/Login/Login"
import Register from "./Components/Register/Register"
import './App.css';



const App= (props) => {
  return (
    <Routes>
    <Route exact path="/login" element={<Login/>} />
    <Route exact path="/register" element={<Register/>} />
    </Routes>
  );
}



export default App;
