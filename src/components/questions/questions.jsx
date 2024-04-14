import { Route, Routes,  Link } from 'react-router-dom'
import './questions.css'
import React from "react"
import store from '../../state/store'

export const Questions = () => {
    return(
        <div className='Container'>
            {store.questions.map(item => (
                <div className='test-wrapper'>
                <p className='question-title'>
                    <span>{item.questionNumber}</span><br/> {item.question}
                </p>
                <div className='question-inputs'>
                    <input className='question-input' type='radio' id='q1' name='q1' value={item.value1}/>
                    <label htmlFor='q1'>{item.var1}</label>
                </div>
                <div className='question-inputs'>
                    <input className='question-input' type='radio' id='q2' name='q2' value={item.value2}/>
                    <label htmlFor='q2'>{item.var2}</label>
                </div>
                <div className='question-inputs'>
                    <input className='question-input' type='radio' id='q3' name='q3' value={item.value3}/>
                    <label htmlFor='q3'>{item.var3}</label>
                </div>
                <div className='question-button'>
                    <Link to={item.link} className='question-button-next' type='button'>{item.next}</Link>
                </div>  
            </div>
            ))}
        </div>
    )    
}
