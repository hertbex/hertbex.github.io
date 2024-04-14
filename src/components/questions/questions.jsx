import { Route, Routes } from 'react-router-dom'
import './questions.css'
import React from "react"
import store from '../../state/store'

export const Questions = (props) => {
    
    return(
        
        <>
        <div className='test-wrapper'>
            <p className='question-title'><span>{props.questionNumber}</span><br/> {props.questions}</p>
                
                <div className='question-inputs'>
                    <input className='question-input' type='radio' id='q1' name='q1' value={props.value1}/>
                    <label htmlFor='q1'>{props.var1}</label>
                </div>
                <div className='question-inputs'>
                    <input className='question-input' type='radio' id='q2' name='q2' value={props.value2}/>
                    <label htmlFor='q2'>{props.var2}</label>
                </div>
                <div className='question-inputs'>
                    <input className='question-input' type='radio' id='q3' name='q3' value={props.value3}/>
                    <label htmlFor='q3'>{props.var3}</label>
                </div>
            <div className='question-button'>
                <input className='question-button-next' type='button' value={props.next}/>
            </div>
            
        </div>
        <Routes>
            <Route path={props.path}></Route>
        </Routes>
        </>
    )
}