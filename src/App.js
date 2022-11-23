import React, { FunctionComponent } from 'react';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
// import Home from "./Components/Home/index"
import './App.css';



const App= (props) => {
  return (
    <Routes>
    <Route exact path="/" element={<Home/>} />
    </Routes>
  );
}



export default App;
