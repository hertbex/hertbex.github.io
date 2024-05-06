import React from "react";
import './mainmenu.css'
import { Link } from "react-router-dom";
import store from "../../state/store";



export const Mainmenu = () =>{
    return(
    <div className="start-wrapper">
      <h1 className="test-title">{store.title}</h1>
      <Link to='/test-env/questions'><input className="start-button" type="button" value="СТАРТ"></input></Link>
    </div>
    )
    
}
