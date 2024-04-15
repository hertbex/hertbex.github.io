import { Route, Routes,  Link } from 'react-router-dom'
import './questions.css'
import React, { useState } from "react"
import store from '../../state/store'


export const Questions = () => {
    
    let [answer, setAnswer ] = useState(0);
    let [flag, setFlag] = useState(0);
    let [result, setResult ] = useState(0);

    const getResult = () => {
        console.log(100)
        
    }
    

    return(
        <div className='Container'>
            {store.questions.map(item => (
                <div className='test-wrapper' key={item.questionNumber}>
                    <p className='question-title'>
                        <span>{item.questionNumber}</span><br/> {item.question}
                    </p>
                    <div className='question-inputs'>
                        <input className='question-input' type={item.type} id={`q${item.questionNumber}_1`} name={`q${item.questionNumber}`} value={item.value1}/>
                        <label htmlFor={`q${item.questionNumber}_1`}>{item.var1}</label>
                    </div>
                    <div className='question-inputs'>
                        <input className='question-input' type={item.type} id={`q${item.questionNumber}_2`} name={`q${item.questionNumber}`} value={item.value2}/>
                        <label htmlFor={`q${item.questionNumber}_2`}>{item.var2}</label>
                    </div>
                    <div className='question-inputs'>
                        <input className='question-input' type={item.type} id={`q${item.questionNumber}_3`} name={`q${item.questionNumber}`} value={item.value3}/>
                        <label htmlFor={`q${item.questionNumber}_3`}>{item.var3}</label>
                    </div>
                    <button className='question-button-next'>ПОДТВЕРДИТЬ</button>
                </div>
            ))}
            <Link to='/results' className='question-button-next' type='button' onClick={()=> {alert(10)}}>ЗАКОНЧИТЬ</Link>  
        </div>
    ) 
}
