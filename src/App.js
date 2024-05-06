import React from "react";
import './App.css';
import {Mainmenu} from './components/mainmenu/mainmenu';
import {Questions} from './components/questions/questions';
import {Results} from './components/results/results';
import { Routes, Route } from "react-router-dom";


function App() {
    return(
      <>
      <div className='container'>  
      </div>
      <Routes>
        <Route path="/test-env" element={<Mainmenu/>}/>
        <Route path="/test-env/questions" element={<Questions/>}/>
        <Route path="/test-env/results" element={<Results/>}/>
      </Routes>
      </>  
    )
}

export default App;
