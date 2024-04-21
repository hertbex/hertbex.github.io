import React, { useState } from "react";
import './App.css';
import {Mainmenu} from './components/mainmenu/mainmenu';
import { Startmenu } from "./components/startmenu/startmenu";
import {Questions} from './components/questions/questions';
import {Results} from './components/results/results';
import store from './state/store'
import { Routes, Route, Link } from "react-router-dom";


function App() {
    
    return(
      <>
      <div className='container'>
        
      </div>
      
      <Routes>
        <Route path="/" element={<Mainmenu/>}/>
        <Route path='/startmenu' element={<Startmenu/>}/>
        <Route path="/questions" element={<Questions/>}/>
        <Route path="/results" element={<Results/>}/>
      </Routes>
    </>  
    )
}

export default App;
