import './results.css'
import React from "react";

export default function Results(){
    return(
        <div className="result-wrapper">
            <h2 className='result-title'>RIGHT ANSWERS</h2>
            <div className='result-count'><span>0</span></div>

            <input className='result-button' type='button' value='RESTART'/>
        </div>
    )
}