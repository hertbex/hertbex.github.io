import './results.css'
import React from "react";
import { Route, Routes, Link } from 'react-router-dom'
import { Questions } from '../questions/questions';
export const Results = (props) => {
    return(
        <div className="result-wrapper">
            <h2 className='result-title'>RIGHT ANSWERS</h2>
            <div className='result-count'></div>

            <Link to='/questions'><input className='result-button' type='button' value='RESTART'/></Link>
        </div>
    )
}