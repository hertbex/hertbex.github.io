import './results.css'
import React from "react";
import { Route, Routes, Link } from 'react-router-dom'
export const Results = () => {
    return(
        <div className="result-wrapper">
            <h2 className='result-title'>RIGHT ANSWERS</h2>
            <div className='result-count'><span>0</span></div>

            <Link to='/questions'><input className='result-button' type='button' value='RESTART'/></Link>
        </div>
    )
}