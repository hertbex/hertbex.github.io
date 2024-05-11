import './results.css'
import React from "react";
import { Link } from 'react-router-dom'
import { Questions } from '../questions/questions';
export const Results = (props) => {
    return(
        <div className="result-wrapper">
            <h2 className='result-title'>ПРАВИЛЬНЫЕ ОТВЕТЫ</h2>
            <div className='result-count'>{props.rightAnswerCount}</div>

            <Link to='/test-env/questions'><input className='result-button' type='button' value='RESTART'/></Link>
        </div>
    )
}