import React from "react";
import './App.css';
import {Mainmenu} from './components/mainmenu/mainmenu';
import {Questions} from './components/questions/questions';
import {Results} from './components/results/results';
import store from './state/store'
import { Routes, Route, Link } from "react-router-dom";
function App() {
    let questionsArray = store.questions.map((elem) =>
      <Questions
        questionNumber={elem.questionNumber}
        questions={elem.question}
    
        var1={elem.var1}
        var2={elem.var2}
        var3={elem.var3}
        value1={elem.value1}
        value2={elem.value2}
        value3={elem.value3}
        path={elem.path}
        link={elem.link}
        next={elem.next}
      />
    ) 

    return(
    <>
      <div className='container'>
        <h1 className="test-title">CSS-тест</h1>
        <Mainmenu/>
        {questionsArray}
        
      </div>
      
      <Routes>
        <Route path="/mainmenu" element={<Mainmenu/>}/>
        
        <Route  path="/questions" element={<Questions/>}/>
        
        
        <Route path="/results" element={<Results/>}/>
        
      </Routes>
    </>  
    )
}

export default App;
