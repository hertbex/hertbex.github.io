import React, { useState } from "react";
import './mainmenu.css'
import { Link } from "react-router-dom";



export const Mainmenu = () =>{
    return(
    <div className="start-wrapper">
      <Link to='/questions'><input className="start-button" type="button" value="СТАРТ"></input></Link>
    </div>
    )
    
}
