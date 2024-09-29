import React from "react";
import '../styles/bottonClear.css';

const BotonClear = (props) =>{
    return(
        <div className="botton-clear"
        onClick={() => props.clearInput()}>
            {props.children}
        </div>
    );
}

export default BotonClear;