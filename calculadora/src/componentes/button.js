import React from 'react';
import '../styles/buton.css';

export default function Buton(props){
    const esOperador = valor => isNaN(valor) && (valor != '.') && (valor != "=");
    
    return(
        <div 
        className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ""}`.trimEnd()}
        onClick={() => props.manejarClicks(props.children)}
        >
            {props.children}
        </div>
    );
};